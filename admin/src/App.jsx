import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import AllUsers from "./pages/AllUsers";
import LogHistory from "./pages/LogHistory";
import { AppContext } from "./context/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/sidebar";

const App = () => {
  const { setIsLoggedIn, token, setToken } = useContext(AppContext);
  return (
    <div>
      {token ? (
        <>
          <ToastContainer />
          <Navbar />
          <div className="flex">
            <Sidebar/>
            <Routes>
              {/* Add routes here */}
              <Route path="/" element={<></>} />
              <Route path="/admin-dashboard" element={<AdminDashboard/>} />
              <Route path="/all-users" element={<AllUsers/>} />
              <Route path="/log-history" element={<LogHistory/>} />
            </Routes>
          </div>
        </>
      ) : (
        <>
          <ToastContainer />
          <Login />
        </>
      )}
    </div>
  );
};

export default App;
