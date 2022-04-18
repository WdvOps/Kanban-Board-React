import React from "react";
import "./navbar.css";

import logoRP from "../../img/ReparadoraAndrade.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logoRP} alt="logo" />
      <span>Reparadora Andrade</span>
    </nav>
  );
}
