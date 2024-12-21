import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { AppContext } from "./context/AppContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const App = () => {

  const {  setIsLoggedIn, token, setToken } = useContext(AppContext);
  return (
    <div>
      {token ? (
      <>
        <ToastContainer />
        <Navbar />
        <Routes>
          {/* Add routes here */}
          <Route path="/" element={<></>} />
        </Routes>
      </>
      ):(
      <>
        <ToastContainer />
        <Login />
      </>)}
    </div>
  );
};

export default App;
