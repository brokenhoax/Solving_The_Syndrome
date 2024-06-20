import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/app.css";
import "../../styles/scss/base.scss";

export default function Links() {

  const navLinks = [
    {
      title: "Home",
      path: "/blog",
    },
    {
      title: "About",
      path: "/about",
    },
    // {
    //   title: "Login",
    //   path: "/login",
    // },
    // {
    //   title: "Blog",
    //   path: "/blog",
    // },
  ];

  // Get the current path from URL...
  // Underline the current path by looping through navLinks

  return (
    <div className="w-1/3 flex justify-end items-stretch">
      {setNavvy && (
        <ul className="flex font-semibold bg-gray-900">
          {navLinks.map((link, index) => (
            <li className="px-6 my-auto" key={index}>
              {setNavvy === link.path && (
                <Link
                  to={link.path}
                  className="h-full focus:outline-none border-b-2 border-transparent border-opacity-100 border-red-400"
                >
                  {link.title}
                </Link>
              )}
              {setNavvy !== link.path && (
                <Link
                  to={link.path}
                  className="focus:outline-none border-opacity-0 border-b-2 border-transparent hover:border-opacity-100 hover:border-b-2 hover:border-red-400 focus:border-red-400 focus:border-opacity-100 focus:border-b-2 active:border-opacity-100 active:border-b-2 active:border-red-400"
                >
                  {link.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
