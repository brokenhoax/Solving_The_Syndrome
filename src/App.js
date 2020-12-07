import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Blog from "./pages/blog/blog";
import "./styles/scss/base.scss";
import "./styles/app.css";

function App() {
  return (
    <Router>
      <div className="wrapper h-screen text-gray-400">
        <Navbar className="navbar" />
        <Blog className="blog" />
      </div>
    </Router>
  );
}

export default App;
