import React from "react";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center h-32 mt-12 bg-gray-900 text-white w-full z-20">
      <div className="flex items-center">
        <div className="text-xs z-10">2024 Solving the Syndrome</div>
        <img className="h-6 m-4" src={logo} alt="Logo"></img>
      </div>
    </footer>
  );
}
