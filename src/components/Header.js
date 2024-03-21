import React from "react";
import { Link } from "react-router-dom";
import user from "../image/user.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <Link to="/favorite">
        <div className="logo2">favorites</div>
      </Link>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
