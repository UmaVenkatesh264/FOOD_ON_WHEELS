import React, { useState } from "react";
import "../styles.css"
import {LOGO_URL} from "../utils/constants"

const Header = () => {
  const [btnName, setBtnName] = useState ("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="App Logo" />
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
        <button className="login" onClick={()=>{
          btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
        }}>{btnName}</button>
      </div>
    </div>
  );
};

export default Header;
