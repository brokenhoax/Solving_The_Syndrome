import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/app.css";
import "../../styles/scss/base.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";

function Navbar() {
  const [toggle, setNavvy] = useState(false);

  const navLinks = [
    {
      title: "Home",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
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

  function setNavbarstatus() {
    if (toggle) {
      setNavvy(false);
    } else {
      setNavvy(true);
    }
  }

  if (toggle) {
    return (
      <div className="flex justify-center bg-gray-900 text-gray-400 z-20">
        <div className="w-1/2">
          <div className="flex justify-center items-center">
            {/* Left */}
            <div className="w-1/3">
              <img className="h-8 m-4" src={logo} alt="Logo"></img>
            </div>
            {/* Middle */}
            <div className="w-1/3 text-center font-bold px-4 md:text-xl lg:text-2xl"></div>
            {/* Right */}
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
              <button
                className="mx-4 focus:outline-none"
                onClick={setNavbarstatus}
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!toggle) {
    return (
      <div className="flex justify-center bg-gray-900 text-gray-400 z-20">
        <div className="w-1/2">
          <div className="flex justify-center items-center bg-gray-900">
            <div className="w-1/3">
              <img className="h-8 m-4" src={logo} alt="Logo"></img>
            </div>
            <div className="w-full text-center font-bold px-4 md:text-xl lg:text-2xl">
              Solving the Syndrome
            </div>
            <div className="w-1/3 flex justify-end">
              <button
                className="mx-4 focus:outline-none"
                onClick={setNavbarstatus}
              >
                <FontAwesomeIcon icon={faMinus} size="lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
