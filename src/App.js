import Navbar from "./components/navbar/Navbar";
import Home from "./pages/blog/home";
import Contact from "./pages/blog/contact";
import Blog from "./pages/blog/blog";
import IKnowKungFoo from "./pages/blog/i-know-kung-fu";
import CleanCode from "./pages/blog/clean-code";
import Test from "./pages/blog/test";
import Login from "./pages/login";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./styles/scss/base.scss";
import "./styles/app.css";

function App() {
  return (
    <Router>
      <div className="wrapper h-screen text-gray-400 font-plex">
        <Navbar className="navbar" />
        <Switch>
          <Route path="/" exact={true} component={Blog} />
          <Route path="/home" exact={true} className="home" component={Home} />
          {/* <Route
            path="/login"
            exact={true}
            className="login"
            component={Login}
          /> */}
          <Route path="/blog" exact={true} className="blog" component={Blog} />
          <Route
            path="/blog/i-know-kung-foo"
            exact={true}
            className="blog"
            component={IKnowKungFoo}
          />
          <Route
            path="/blog/clean-code"
            g
            exact={true}
            className="blog"
            component={CleanCode}
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
    </Router>
  );
}

export default App;
