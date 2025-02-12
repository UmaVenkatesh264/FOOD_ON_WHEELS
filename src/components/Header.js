import React, { useState } from "react";
import "../styles.css"
import {LOGO_URL} from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState ("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between">
      <div>
        <img className="w-56" src={LOGO_URL} alt="App Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴" }</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About</Link></li>
          <li className="px-4"><Link to="/contact">Contact</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4">Cart</li>
          <button className="px-4" onClick={()=>{
          btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
        }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
