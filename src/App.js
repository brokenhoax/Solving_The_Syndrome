import Navbar from "./components/navbar/Navbar";
import Home from "./pages/blog/home";
import Contact from "./pages/blog/contact";
import Blog from "./pages/blog/blog";
import IKnowKungFoo from "./pages/blog/i-know-kung-fu";
import FigmaSlider from "./pages/blog/figma-slider";
import ReactComponents from "./pages/blog/react-components";
import {
  HashRouter as Router,
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
      <div className="wrapper h-screen text-gray-400 font-plex">
        <Navbar className="navbar" />
        <div className="">
          <Switch>
            <Route path="/" exact={true} component={Blog} />
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
              className="slider"
              component={FigmaSlider}
            />
            <Route
              path="/blog/react-components"
              exact={true}
              className="blog"
              component={ReactComponents}
            />
            <Route
              path="/blog/react-components"
              exact={true}
              className="blog"
              component={IKnowKungFoo}
            />
            <Route
              path="/blog/ready-set-go"
              exact={true}
              className="blog"
              component={ReadySetGo}
            />
            <Route
              path="/contact"
              exact={true}
              className="contact"
              component={Contact}
            />
            <Redirect from="*" to="/404" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
