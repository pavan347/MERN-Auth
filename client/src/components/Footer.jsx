import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <span className="text-2xl">🛡️</span>
              <span className="ml-2 text-xl font-bold">SecureConnect</span>
            </div>
            <p className="mt-2 text-gray-400">
              Your Gateway to Online Safety
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Navigation</h3>
            <div className="mt-4 space-y-2">
              <NavLink to="/" className="block text-gray-400 hover:text-white">Home</NavLink>
              <NavLink to="/about" className="block text-gray-400 hover:text-white">About</NavLink>
              <NavLink to="/contact" className="block text-gray-400 hover:text-white">Contact</NavLink>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
            <div className="mt-4 space-y-2">
              <p to="/privacy" className="block text-gray-400 hover:text-white">Privacy Policy</p>
              <p to="/terms" className="block text-gray-400 hover:text-white">Terms of Service</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Social</h3>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-2xl">
                📱
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl">
                💬
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl">
                📧
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 SecureConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}