import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/app.css";
import "../../styles/scss/base.scss";
import logo from "../../assets/logo.png";
import Toggle from "../../components/common/toggle";

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
      <div className="flex items-center justify-center pb-8">
        <div className="fixed top-0 flex justify-between items-center bg-gray-900 h-16 rounded-b-3xl px-8 py-4 md:w-700">
          {/* Left */}
          <div className="flex items-center">
          {setNavvy && (
            <ul className="flex font-semibold space-x-4">
              <button onClick={setNavbarstatus}>
                <img className="w-8 h-8" src={logo} alt="Logo"></img>
              </button>
              {navLinks.map((link, index) => (
                <li className="flex items-center justify-between my-auto" key={index}>
                  {setNavvy === link.path && (
                    <Link
                      to={link.path}
                      className="bg-gray-900 hover:bg-gray-800 rounded-lg text-gray-200 px-3 py-2 font-semibold focus:bg-gray-800"
                    >
                      {link.title}
                    </Link>
                  )}
                  {setNavvy !== link.path && (
                    <Link
                      to={link.path}
                      className="bg-gray-900 hover:bg-gray-800 rounded-lg text-gray-200 px-3 py-2 font-semibold focus:bg-gray-800"
                    >
                      {link.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            )}
          </div>
          {/* Right */}
          <div className="pl-8">
            <Toggle />
          </div>
        </div>
      </div>
    );
  }

  if (toggle) {
    return (
      <div className="flex items-center justify-center pb-8">
        <div className="fixed top-0 flex justify-between items-center bg-gray-900 h-16 rounded-b-3xl px-8 py-4 md:w-700">
          {/* Left */}
          <button onClick={setNavbarstatus} className="w-8 h-8 text-center">
            <img src={logo} alt="Logo"></img>
          </button>
          {/* Right */}
          <div className="flex justify-end items-center">
            <div className="pl-8">
              <Toggle />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
