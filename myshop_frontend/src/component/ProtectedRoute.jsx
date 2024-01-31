import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = () => {
  if (localStorage.getItem("refresh_token") == null) {
    setTimeout(() => {
      toast.error("Bạn chưa đăng nhập!");
    }, 1000);
    return <Navigate to="/login" />;
  }
  else if (localStorage.getItem("role") !== "admin") {
    setTimeout(() => {
      toast.error("Bạn không có quyền truy cập!");
    }, 1000);
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
