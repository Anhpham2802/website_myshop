import Sidebar from "./sidebar"
import { ToastContainer } from 'react-toastify';
import { Outlet } from "react-router";
import { useEffect } from "react";
import { verifyToken } from "../../api";

const AdminLayout = () => {
  useEffect(() => {
    if (localStorage.getItem('refresh_token') != null) {
        verifyToken();
    }
  }, []);

  return(
    <div>
      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
      />
      <ToastContainer />
      <Sidebar />
      <div className="main-content" id="panel">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout;
