import { ACCESS_KEY, BASE_URL, client, logout, REFRESH_KEY } from "./client";

export { client, logout };

export const login = async (credential) => {
  const response = await fetch(`${BASE_URL}/auth/jwt/create/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credential),
  });
  if (response.status === 200) {
    const { refresh, access } = await response.json();
    localStorage.setItem(REFRESH_KEY, refresh);
    localStorage.setItem(ACCESS_KEY, access);
    return true;
  }
  else throw new Error();
};

export const getAuthenticationStatus = () => {
  return (
    localStorage.getItem(REFRESH_KEY) !== null &&
    localStorage.getItem(ACCESS_KEY) !== null
  );
};
