import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const navigate = useNavigate();

  const { backendUrl, setIsLoggedIn, token, setToken } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      axios.defaults.withCredentials = true;


        const { data } = await axios.post(backendUrl + "/api/auth/admin-login", {
          email,
          password,
        });

        console.log(data);
        if (data.success) {
          setIsLoggedIn(true);
          localStorage.setItem("token", data.token);
          setToken(data.token);
          toast.success(data.message)
          navigate("/");
        } else {
          setIsLoggedIn(false);
          toast.error(data.message);
        }  
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div className="w-[90%] md:w-[30%] bg-slate-800 px-5 py-8 text-white rounded">
        <div className="heading flex flex-col items-center leading-3 mb-5 ">
          <h2 className="text-2xl font-bold text-blue-600">
            Login
          </h2>
          <p className="text-gray-300 text-sm">
            Login into your account
          </p>
        </div>
        <form className="" onSubmit={onSubmitHandler}>
         
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-100"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-100"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-indigo-500 to-indigo-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center mt-3"
          >
           Submit
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
