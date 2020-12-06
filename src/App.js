import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Blog from "./pages/blog/blog";
import "./styles/app.css";
import "./styles/sassy.scss";

function App() {
  return (
    <Router>
      <div className="h-screen bg-gray-800 text-gray-400">
        <Navbar />
        <Blog />
      </div>
    </Router>
  );
}

export default App;
