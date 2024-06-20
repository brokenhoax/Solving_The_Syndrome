import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/app.css";
import "../../styles/scss/base.scss";
import logo from "../../assets/logo.png";

function Navbar() {
  const [toggle, setNavvy] = useState(false);

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

  function setNavbarstatus() {
    if (toggle) {
      setNavvy(false);
    } else {
      setNavvy(true);
    }
  }

  if (!toggle) {
    return (
      <div className="min-w-full fixed top-0 left-0 right-0">
        <div className="flex justify-center bg-gray-900 text-gray-400 z-20">
          <div className="w-full container px-8">
            <div className="flex justify-center items-center">
              {/* Left */}
              <div className="w-1/3">
              <button className="flex justify-start items-center w-full" onClick={setNavbarstatus}>
                    <img className="h-8 my-4" src={logo} alt="Logo"></img>
                  </button>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (toggle) {
    return (
      <div className="min-w-full fixed top-0 left-0 right-0">
        <div className="flex justify-center bg-gray-900 text-gray-400 z-20">
          <div className="flex justify-start items-center px-8 container">
            {/* Logo & Title */}
            <button className="flex justify-start items-center w-full" onClick={setNavbarstatus}>
              <img className="h-8 my-4" src={logo} alt="Logo"></img>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
