import axios from "axios";
import { camelizeKeys } from "humps";

export const REFRESH_KEY = "refresh_token";
export const ACCESS_KEY = "access_token";

let isRefreshing = false;

const refreshQueue = [];

export const BASE_URL = "http://127.0.0.1:8000";

export const client = axios.create({
  baseURL: BASE_URL,
});

client.interceptors.request.use((config) => {
  const token = localStorage.getItem(ACCESS_KEY);
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

client.interceptors.response.use(
  (response) => {
    if (response.data) {
      response.data = camelizeKeys(response.data);
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem(REFRESH_KEY);

    if (
      error.response &&
      error.response.status === 401 &&
      error.config &&
      !error.config.__isRetryRequest &&
      refreshToken
    ) {
      originalRequest._retry = true;
      if (!isRefreshing) {
        console.log("refreshing token!");
        isRefreshing = true;

        const response = await fetch(`${BASE_URL}/api/refresh_token`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refresh: refreshToken,
          }),
        });
        console.log("Refresh status code: ", response.status);
        if (response.status === 200) {
          const data = await response.json();
          const newToken = data.access;
          localStorage.setItem(ACCESS_KEY, newToken);
          refreshQueue.forEach((request) => request.resolve());
          console.log("token refreshed!");
          isRefreshing = false;
          return client(originalRequest);
        } else if (response.status === 401) {
          const res = await fetch(`${BASE_URL}/api/logout`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              refresh: refreshToken,
            }),
          });
          localStorage.removeItem(REFRESH_KEY);
          localStorage.removeItem(ACCESS_KEY);
          localStorage.removeItem("username");
          localStorage.removeItem("full_name");
          localStorage.removeItem("email");
          localStorage.removeItem("role");
          console.log("Logout status code: ", res.status);
        }
      } else {
        return new Promise((resolve, reject) => {
          refreshQueue.push({ resolve, reject });
        })
          .then(() => {
            return client(originalRequest);
          })
          .catch((error) => {
            return Promise.reject(error);
          });
      }
    }
    return Promise.reject(error);
  }
);
