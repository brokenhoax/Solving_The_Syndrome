import "../../styles/app.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-gray-900 text-gray-400 max-w-full flex items-center justify-between">
      <img className="h-16 p-2" src={logo} alt="Logo"></img>
      <ul>
        <li className="font-plex text-2xl">A Blog About Learning To Code</li>
      </ul>
      <button className="pr-4">
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>
    </div>
  );
};
export default Navbar;
