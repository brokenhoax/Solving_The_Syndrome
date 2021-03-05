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
      path: "/home",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Login",
      path: "/login",
    },
    {
      title: "Blog",
      path: "/blog",
    },
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
      <div className="fixed w-full top-0 z-10">
        <div className="bg-gray-900 text-gray-400 max-w-full flex items-center justify-between z-20">
          <img className="h-8 m-4" src={logo} alt="Logo"></img>
          <div className="font-plex font-bold px-4 md:text-xl lg:text-2xl">
            A Blog About Learning To Code
          </div>
          <div className="w-16">
            {" "}
            <button
              className="mx-4 focus:outline-none"
              onClick={setNavbarstatus}
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
          </div>
        </div>
        <ul className="flex justify-end font-plex font-semibold pb-2 pr-2 bg-gray-900 navDown">
          {navLinks.map((link, index) => (
            <li className="pl-6" key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (!toggle) {
    return (
      <div className="fixed w-full top-0 z-10">
        <div className="bg-gray-900 text-gray-400 max-w-full flex items-center justify-between z-20">
          <img className="h-8 m-4" src={logo} alt="Logo"></img>
          <div className="font-plex font-bold px-4 md:text-xl lg:text-2xl">
            A Blog About Learning To Code
          </div>
          <div className="w-16">
            {" "}
            <button
              className="mx-4 focus:outline-none"
              onClick={setNavbarstatus}
            >
              <FontAwesomeIcon icon={faMinus} size="lg" />
            </button>
          </div>
        </div>
        <ul className="flex justify-end font-plex font-semibold pb-2 pr-2 bg-gray-900 navUp">
          {navLinks.map((link, index) => (
            <li className="pl-6" key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Navbar;
