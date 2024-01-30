import { ACCESS_KEY, BASE_URL, client, REFRESH_KEY } from "./client";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

export { client };

export const verifyToken = () => {
  client.post("/api/verify_token", {
      "token": localStorage.getItem(REFRESH_KEY)
  }).then((res) => {
      sessionStorage.setItem('isAuth', true);
  }).catch((err) => {
      sessionStorage.removeItem('isAuth');
      localStorage.removeItem(REFRESH_KEY);
      localStorage.removeItem(ACCESS_KEY);
      localStorage.removeItem("username");
      localStorage.removeItem("full_name");
      localStorage.removeItem("email");
      localStorage.removeItem("role");
  });
}

export const login = async (credential) => {
  const response = await fetch(`${BASE_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credential),
  });
  if (response.status === 200) {
    const { refresh, access } = await response.json();
    sessionStorage.setItem("isAuth", true);
    localStorage.setItem(REFRESH_KEY, refresh);
    localStorage.setItem(ACCESS_KEY, access);

    const decoded = jwtDecode(access);
    localStorage.setItem("username", decoded.username);
    localStorage.setItem("full_name", decoded.full_name);
    localStorage.setItem("email", decoded.email);
    localStorage.setItem("role", decoded.role);

    return true;
  }
  else {
    const error = await response.json();
    for (const key in error) {
      toast.error(error[key]);
    }
    throw new Error(error);
  }
};

export const logout = async () => {
  const response = await client.post("/api/logout", {
      "refresh_token": localStorage.getItem(REFRESH_KEY),
  });
  if (response.status === 204) {
    sessionStorage.removeItem("isAuth");
    localStorage.removeItem(REFRESH_KEY);
    localStorage.removeItem(ACCESS_KEY);
    localStorage.removeItem("username");
    localStorage.removeItem("full_name");
    localStorage.removeItem("email");
    localStorage.removeItem("role");

    toast.success("Đăng xuất thành công!");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } else {
    toast.error("Đã có lỗi xảy ra! Đăng xuất thất bại!");
  }
};

export const register = async (data) => {
  const response = await fetch(`${BASE_URL}/api/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.status === 201){
    return response.json();
  }
  else 
  {
    const error = await response.json();
    for (const key in error) {
      for (const message of error[key]) {
        toast.error(message);
      }
    }
    throw new Error(error);
  }
};

export const getAuthenticationStatus = () => {
  return (
    localStorage.getItem(REFRESH_KEY) !== null &&
    localStorage.getItem(ACCESS_KEY) !== null
  );
};
