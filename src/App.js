import Navbar from "./components/navbar/Navbar";
import Blog from "./components/blog/Blog";
import "./styles/app.css";

function App() {
  return (
    <div className="h-screen bg-gray-800 text-gray-400">
      <Navbar />
      <Blog />
    </div>
  );
}

export default App;
