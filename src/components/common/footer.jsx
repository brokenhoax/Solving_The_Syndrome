import React from "react";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center h-32 mt-12 w-full bg-gray-900 opacity-50 z-20">
      <div className="flex items-center">
        <div className="text-xs z-10">2022 Solving the Syndrome</div>
        <img className="h-6 m-4" src={logo} alt="Logo"></img>
      </div>
    </footer>
  );
}
