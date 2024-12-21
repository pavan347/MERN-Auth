import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const { backendUrl, setIsLoggedIn, getUserData, token, setToken } = useContext(AppContext);

  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      axios.defaults.withCredentials = true;

      if (state === "Sign Up") {

        if(password !== confirmPassword) {
          return toast.error("Password and Confirm Password should be same.")
        }

        const { data } = await axios.post(backendUrl + "/api/auth/register", {
          username: name,
          email,
          password,
        });

        if (data.success) {
          // setIsLoggedIn(true);
          // localStorage.setItem("token", data.token);
          // setToken(data.token);
          toast.success(data.message)
          setState("Login")
          navigate("/login");
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/auth/login", {
          email,
          password,
        });

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
    <div className="flex flex-col justify-start items-center w-full h-full">
      <div className="w-[90%] md:w-[30%] mt-12 bg-slate-800 px-5 py-8 text-white rounded">
        <div className="heading flex flex-col items-center leading-3 mb-5 ">
          <h2 className="text-2xl font-bold text-blue-600">
            {state === "Sign Up" ? "Create Account" : "Login"}
          </h2>
          <p className="text-gray-300 text-sm">
            {state === "Sign Up"
              ? "Fill all the details and click on submit."
              : "Login into your account."}
          </p>
        </div>
        <form className="" onSubmit={onSubmitHandler}>
          {state === "Sign Up" && (
            <div className="mb-3">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-100"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Enter your name."
                required
              />
            </div>
          )}
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
          {state === "Sign Up" && (
            <div className="mb-3">
              <label
                htmlFor="confirmpassword"
                className="block mb-2 text-sm font-medium text-gray-100"
              >
                confirm password
              </label>
              <input
                type="password"
                id="confirmpassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required />
            </div>
          )}
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-indigo-500 to-indigo-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center mt-3"
          >
            {state}
          </button>
        </form>
        {state === "Sign Up" ? (
          <p className="text-gray-400 text-center mt-4">
            Already have an account ?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-blue-400 underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="text-gray-400 text-center mt-4">
            Dont have an account ?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-blue-400 underline cursor-pointer"
            >
              Sign Up here
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
