import React, { useContext, useState } from "react";
import "../styles.css"
import {LOGO_URL} from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Header = () => {
  const [btnName, setBtnName] = useState ("Login");
  const onlineStatus = useOnlineStatus();
  const centralData = useContext(userContext)

  return (
    <div className="flex justify-between border-gray-300 border-b-2">
      <div>
        <Link to="/"><img className="w-56" src={LOGO_URL} alt="App Logo" /></Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴" }</li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4"><Link to="/about">About</Link></li>
          <li className="px-4"><Link to="/contact">Contact</Link></li>
          <li className="px-4">Cart</li>
          <button className="px-4 border-black border-2 rounded-md bg-gray-200 " onClick={()=>{
          btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
        }}>{btnName}</button>
         <li className="px-4">👤 {centralData.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
