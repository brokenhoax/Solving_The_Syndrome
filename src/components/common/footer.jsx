import React from "react";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="flex items-center border border-red-400 justify-center h-16 mt-12 -mb-1 w-full z-20 rounded-t-3xl md:w-700 bg-gray-900 text-gray-200">
      <div className="flex items-center">
        <div className="text-sm font-medium z-10">
          2024 Solving the Syndrome
        </div>
        <img className="h-6 m-4" src={logo} alt="Logo"></img>
      </div>
    </footer>
  );
}
