import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/guns">Guns</Link>
      <Link to="/maps">Maps</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Navigation;
