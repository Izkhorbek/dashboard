import React, { useEffect, useState } from "react";
import "./Header.css";
import userIcon from "../../../assets/images/userIcon.png";
import IUserModel from "../../../Interface/IUserMode";
import { useSelector } from "react-redux";
import { RootState } from "../../../Storage/Redux/store";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const [clientTimer, setClientTimer] = useState("");
  const userInfo: IUserModel = useSelector(
    (state: RootState) => state.userSlice
  );
  if (!userInfo?.username) {
    navigate("/");
  }
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const formattedDate = new Intl.DateTimeFormat("eng-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }).format(date);
      setClientTimer(formattedDate);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  function handleLogout(): void {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="header">
      <span>Time:</span>
      <span>{clientTimer}</span>
      <div className="user-info">
        <button className="header-login" onClick={() => handleLogout()}>
          {userInfo?.username ? "Logout" : "Login"}
        </button>
        <span>{userInfo?.username}</span>
        <img src={userIcon} alt="" />
      </div>
    </div>
  );
}

export default Header;
