import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { navigation } from "../assets/data";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const {
    isLoggedIn,
    backendUrl,
    userData,
    setUserData,
    setIsLoggedIn,
    token,
    setToken,
  } = useContext(AppContext);

  const sendVerificationOtp = async () => {
    try {
      console.log(token);
      const { data } = await axios.post(
        backendUrl + "/api/auth/send-verify-otp",
        {},
        { headers: { token } }
      );
      if (data.success) {
        navigate("/email-verify");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(false);
    setIsLoggedIn(false);
    setUserData(false);
    navigate("/login");
  };

  return (
    <>
      <nav className="bg-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
                  <span className="text-2xl">🛡️</span>
                  <span className="ml-2 text-xl font-bold">SecureConnect</span>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                  {navigation.map((item) => {
                    return (
                      <NavLink
                        key={item.href}
                        to={item.href}
                        className="  px-3 py-2 text-sm font-medium "
                        aria-current=""
                      >
                        {item.name}
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="buttons flex justify-center items-center">
              {!userData ? (
                <div className="login-signup">
                  <button
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-black bg-white hover:text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                </div>
              ) : (
                <div className="user-profile ">
                  <div className="user-icon p-3 rounded-full text-xl bg-blue-700 h-9 w-9 flex items-center justify-center text-white font-bold relative group cursor-pointer">
                    {userData.name[0].toUpperCase()}
                    <ul className="user-options list-none absolute hidden group-hover:block top-9 right-0 z-10 text-black bg-gray-100 text-sm rounded">
                      {!userData.isAccountVerified && (
                        <>
                          <li
                            onClick={sendVerificationOtp}
                            className=" px-4 py-2 m-2 rounded font-medium cursor-pointer hover:bg-gray-300"
                          >
                            Verify&nbsp;Email
                          </li>
                          <hr />
                        </>
                      )}

                      <li
                        onClick={logout}
                        className="px-4 py-2 m-2 rounded font-medium cursor-pointer hover:bg-gray-300"
                      >
                        Logout
                      </li>
                    </ul>
                  </div>

                  {/* <button
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-black bg-white hover:text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button> */}
                </div>
              )}

              <div className="bars">
                <button
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:hidden"
                  onClick={() => setMenu((menu) => !menu)}
                >
                  <p className={menu ? "hidden" : "block"}>
                    <FaBars />
                  </p>
                  <p className={menu ? "block " : "hidden "}>
                    <IoClose />
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className={menu ? "block sm:hidden" : "hidden sm:hidden"}>
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            {navigation.map((item) => {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  aria-current=""
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
