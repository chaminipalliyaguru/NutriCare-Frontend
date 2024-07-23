import React from "react";
import "./Header.css";
import Logo from "../assets/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header className="header">
      <Link to="/">
          <img src={Logo} alt="logo" className="Logo" />
        </Link>
        <nav className="navbar">
          {/* <a href="/"></a> */}
          <Link to="/recipe_vault">Recipe Vault</Link>
          <Link to="/assistant">Virtual Assistant</Link>
          <Link to="/HealthGuide">Health Guide</Link>
          <Link to="/findDoctor">Find Your Doctor</Link>
          <Link to="/about_us">About Us</Link>
        </nav>
      </header>

    </div>
  );
}

export default Header;
