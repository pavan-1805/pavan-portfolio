import React from "react";
import "./index.css";
import Logo from "../../assets/p-logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <img src={Logo} alt="Logo" className="navbar-logo"></img>
      <div className="navbar-menu">
        <Link className="navbar-menu-item">Home</Link>
        <Link className="navbar-menu-item">About</Link>
        <Link className="navbar-menu-item">Resume</Link>
        <Link className="navbar-menu-item">Portfolio</Link>
        <Link className="navbar-menu-item">Contact me</Link>
      </div>
    </nav>
  );
};

export default Navbar;
