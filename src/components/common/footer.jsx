import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="flex items-center  justify-center h-16 mt-12 -mb-1 z-20 w-full px-4 md:w-700  text-gray-200">
      <div className="flex items-center justify-center border border-red-400 min-w-full rounded-t-3xl bg-gray-900">
        <div className="text-sm font-medium z-10">2024 Cozy Campus</div>
        <img className="h-6 m-4" src={logo} alt="Logo"></img>
      </div>
    </footer>
  );
}
