import React, { useEffect, useState } from "react";
import "../../styles/scss/blog.scss";
import "../../styles/app.css";

const Toggle = () => {
  const [toggled, setToggled] = useState(true);

  function handleToggle() {
    setToggled(!toggled);
    if (toggled) {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      console.log("Dark mode DISABLED...");
    } else {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      console.log("Dark mode ENABLED...");
    }
  }

  useEffect(() => {
    const runColorMode = (fn) => {
      if (!window.matchMedia) {
        return;
      }
      const query = window.matchMedia("(prefers-color-scheme: dark)");
      fn(query.matches);
      query.addEventListener("change", (event) => fn(event.matches));
    };
    runColorMode((isDarkMode) => {
      if (isDarkMode) {
        console.log("Dark mode enabled...");
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
        setToggled(true);
      } else {
        console.log("Dark mode disabled...");
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        setToggled(false);
      }
    });
  }, []);

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleToggle}
        className={`toggle-btn ${toggled ? "toggled" : ""}`}
      >
        <div className="thumb flex items-center justify-center">
          <i
            className={`${
              toggled
                ? "fas fa-moon text-gray-500 text-xs"
                : "fas fa-sun text-red-400 text-xs"
            }`}
          ></i>
        </div>
      </button>
    </div>
  );
};

export default Toggle;
