import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/app.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";

function Navbar() {
  const [toggle, setNavvy] = useState(false);

  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact Us",
      path: "/contact-us",
    },
    {
      title: "Login",
      path: "/login",
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
      <div>
        <div className="bg-gray-900 text-gray-400 max-w-full flex items-center justify-between">
          <img className="h-8 m-4" src={logo} alt="Logo"></img>
          <div className="font-plex font-bold px-4 md:text-xl lg:text-2xl">
            A Blog About Learning To Code
          </div>
          <button className="mx-4" onClick={setNavbarstatus}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </button>
        </div>
        <ul className="flex flex-col items-end font-plex font-semibold p-4 bg-gray-900">
          {navLinks.map((link, index) => (
            <li className="p-2" key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (!toggle) {
    return (
      <div>
        <div className="bg-gray-900 text-gray-400 max-w-full flex items-center justify-between">
          <img className="h-8 m-4" src={logo} alt="Logo"></img>
          <div className="font-plex font-bold px-4 md:text-xl lg:text-2xl">
            A Blog About Learning To Code
          </div>
          <button className="mx-4" onClick={setNavbarstatus}>
            <FontAwesomeIcon icon={faMinus} size="2x" />
          </button>
        </div>
      </div>
    );
  }
}
export default Navbar;
