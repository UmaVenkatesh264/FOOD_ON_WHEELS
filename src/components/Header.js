import React, { useState } from "react";
import "../styles.css"
import {LOGO_URL} from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState ("Login");
  // useEffect(()=>{
  //   console.log("USE EFFECT");  
  // },[btnName])
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="App Logo" />
      </div>
      <div className="navbar">
        <ul className="header-list">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴" }</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
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
