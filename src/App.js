import Navbar from "./components/navbar/Navbar";
import Home from "./pages/blog/home";
import About from "./pages/blog/about";
import Blog from "./pages/blog/blog";
import DarkMode from "./pages/blog/dark-mode";
import IKnowKungFoo from "./pages/blog/i-know-kung-fu";
import FigmaSlider from "./pages/blog/figma-slider";
import ReactComponents from "./pages/blog/react-components";
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
  return (
    <Router>
      <div className="relative h-screen">
        <Navbar/>
        <div>
          <Switch>
            <Route path="/" exact={true} component={Blog} />
            <Route path="/Solving_The_Syndrome" exact={true} component={Blog} />
            <Route
              path="/home"
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
              path="/blog"
              exact={true}
              className="blog"
              component={Blog}
            />
            <Route
              path="/blog/figma-slider"
              exact={true}
              className="figma-slider"
              component={FigmaSlider}
            />
            <Route
              path="/blog/react-components"
              exact={true}
              className="react-components"
              component={ReactComponents}
            />
            <Route
              path="/blog/dark-mode"
              exact={true}
              className="dark-mode"
              component={DarkMode}
            />
            <Route
              path="/blog/i-know-kung-fu"
              exact={true}
              className="i-know-kung-fu"
              component={IKnowKungFoo}
            />
            <Route
              path="/blog/ready-set-go"
              exact={true}
              className="ready-set-go"
              component={ReadySetGo}
            />
            <Route
              path="/about"
              exact={true}
              className="about"
              component={About}
            />
            <Redirect from="*" to="/404" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
