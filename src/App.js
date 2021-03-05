import Navbar from "./components/navbar/Navbar";
import Home from "./pages/blog/home";
import Blog from "./pages/blog/blog";
import Login from "./pages/login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/scss/base.scss";
import "./styles/app.css";

function App() {
  return (
    <Router>
      <div className="wrapper h-screen text-gray-400">
        <Navbar className="navbar" />
        <Switch>
          <Route path="/" exact={true} comonent={Home} />
          <Home path="/home" className="home" component={Home} />
          <Blog path="/blog" className="blog" component={Blog} />
          <Login path="/login" className="login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
