import React from "react";

import { Link } from "react-router-dom";

import Logo from "../assets/logo.png";
import "../styles/LoggedInLinks.css";

export const LoggedInLinks = ({ handleLogout }) => {
  return (
    <div className="nav">
      <img src={Logo} alt="logo" className="logo" />
      <div className="other-links">
        <Link to="/contacts" className="link">
          Dashboard
        </Link>
        <Link to="/contacts/favorites" className="link">
          Favorites
        </Link>
        <div onClick={handleLogout} className="logout">
          Log Out
        </div>
      </div>
    </div>
  );
};
