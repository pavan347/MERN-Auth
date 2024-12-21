import React from 'react'
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white border-b border-gray-300">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
                  <span className="text-2xl">🛡️</span>
                  <span className="ml-2 text-xl font-bold">SecureConnect</span>
                </div>
              </div>
            </div>
            <div className="buttons flex justify-center items-center">
              {/* { ( */}
                <div className="login-signup">
                  <button
                    className="relative inline-flex items-center justify-center rounded-full px-4 py-2 text-white bg-blue-700 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                </div>
              {/* ) : (
              
                 <button
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-black bg-white hover:text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
                    onClick={}
                  >
                    Logout
                  </button> 
              )} */}

             
            </div>
          </div>
        </div>

        
      </nav>
  )
}

export default Navbar