import React from "react";
import "./Header.css";
import userIcon from "../../../assets/images/userIcon.png";
function Header() {
  return (
    <div className="header">
      <span>Serverning vaqti:</span>
      <span>Time 12:00:00</span>
      <div className="user-info">
        <span>superMind</span>
        <img src={userIcon} alt="" />
      </div>
    </div>
  );
}

export default Header;
