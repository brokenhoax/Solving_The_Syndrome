import Navbar from "./components/navbar/Navbar";
import Home from "./pages/blog/home";
import About from "./pages/blog/about";
import Blog from "./pages/blog/blog";
import DarkMode from "./pages/blog/dark-mode";
import IKnowKungFoo from "./pages/blog/i-know-kung-fu";
import FigmaSlider from "./pages/blog/figma-slider";
import ReactComponents from "./pages/blog/react-components";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./styles/scss/base.scss";
import "./styles/app.css";
import ReadySetGo from "./pages/blog/ready-set-go";

function App() {
  useEffect(() => {
    // Added to manually test...
    localStorage.setItem("theme", "dark");
    console.log("Howdy!");
    // If the user has selected a theme, use that
    const selectedTheme = localStorage.getItem("theme");

    if (selectedTheme) {
      document.body.classList.remove("light");
      document.body.classList.remove("dark");
      document.body.classList.add(selectedTheme);
      // Else, if the user's OS preference is Dark Mode...
    } else if (window.matchMedia("(prefers-color-scheme: dark)")) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, []);
  return (
    <Router>
      <div className="relative h-full bg-background text-copy-primary">
        <Navbar />
        <Switch>
          <Route path="/" exact={true} component={Blog} />
          <Route path="/Solving_The_Syndrome" exact={true} component={Blog} />
          <Route
            path="/Solving_The_Syndrome/home"
            exact={true}
            className="home"
            component={Home}
          />
          {/* <Route
              path="/login"
              exact={true}
              className="login"
              component={Login}
            /> */}
          <Route
            path="/Solving_The_Syndrome/blog"
            exact={true}
            className="blog"
            component={Blog}
          />
          <Route
            path="/Solving_The_Syndrome/blog/figma-slider"
            exact={true}
            className="figma-slider"
            component={FigmaSlider}
          />
          <Route
            path="/Solving_The_Syndrome/blog/react-components"
            exact={true}
            className="react-components"
            component={ReactComponents}
          />
          <Route
            path="/Solving_The_Syndrome/blog/dark-mode"
            exact={true}
            className="dark-mode-blog"
            component={DarkMode}
          />
          <Route
            path="/Solving_The_Syndrome/blog/i-know-kung-fu"
            exact={true}
            className="i-know-kung-fu"
            component={IKnowKungFoo}
          />
          <Route
            path="/Solving_The_Syndrome/blog/ready-set-go"
            exact={true}
            className="ready-set-go"
            component={ReadySetGo}
          />
          <Route
            path="/Solving_The_Syndrome/about"
            exact={true}
            className="about"
            component={About}
          />
          <Redirect from="*" to="/404" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
