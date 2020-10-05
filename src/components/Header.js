import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header-box">
      <div className="header-content">
        <div className="logo">
          <h1>
            <span>P</span>et<span>S</span>tore
          </h1>
        </div>
        <div className="username">
          <h3>{props.email}</h3>
        </div>
      </div>
      <button onClick={props.handleLogOut}>Log Out</button>
    </div>
  );
};

export default Header;
