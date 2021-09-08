import Navbar from "./components/navbar/Navbar";
import Home from "./pages/blog/home";
import Blog from "./pages/blog/blog";
import IKnowKungFoo from "./pages/blog/i-know-kung-fu";
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
      <div className="wrapper h-screen text-gray-400">
        <Navbar className="navbar" />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/home" exact={true} className="home" component={Home} />
          <Route
            path="/login"
            exact={true}
            className="login"
            component={Login}
          />
          <Route path="/blog" exact={true} className="blog" component={Blog} />
          <Route
            path="/blog/i-know-kung-foo"
            exact={true}
            className="blog"
            component={IKnowKungFoo}
          />
          <Redirect from="*" to="/404" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
