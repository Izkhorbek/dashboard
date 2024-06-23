import "./Sidebar.css";
import statisticsLogo from "../../../assets/images/statistics.png";
import commentLogo from "../../../assets/images/comments.png";
import applicationLogo from "../../../assets/images/applications.png";
import settingLogo from "../../../assets/images/settings.png";
import sendLetterLogo from "../../../assets/images/send-letter.png";
import shoppingListLogo from "../../../assets/images/shopping-list.png";
import usersLogo from "../../../assets/images/users.png";
import mainLogo from "../../../assets/images/logo.png";
import React, { useCallback, useState } from "react";
import SIDEBAR_ITEMS from "../../../utility/SIDEBAR_ITEMS";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [activeSideBar, setActiveSideBar] = useState<SIDEBAR_ITEMS>(
    SIDEBAR_ITEMS.Dashboard
  );

  const handleClickSideBar = useCallback((item: SIDEBAR_ITEMS) => {
    setActiveSideBar(item);
  }, []);

  return (
    <div className="container">
      <nav className="nav-sidebar">
        <div className="sidebar__logo">
          <Link to="/dashboard">
            <img src={mainLogo} alt="" style={{ height: "4rem" }}></img>
          </Link>
        </div>
        <ul className="sidebar__main">
          <li
            className={`sidebar__item ${
              activeSideBar === SIDEBAR_ITEMS.Dashboard ? "active" : ""
            }`}
          >
            <Link
              to="/dashboard"
              onClick={() => {
                handleClickSideBar(SIDEBAR_ITEMS.Dashboard);
              }}
            >
              <img src={statisticsLogo} alt="statisticsImg" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li
            className={`sidebar__item ${
              activeSideBar === SIDEBAR_ITEMS.Users ? "active" : ""
            }`}
          >
            <Link
              to="/users/servicer"
              onClick={() => {
                handleClickSideBar(SIDEBAR_ITEMS.Users);
              }}
            >
              <img src={usersLogo} alt="usersImg" />
              <span>Users</span>
            </Link>
            <ul>
              <li
                className={`sidebar__item ${
                  activeSideBar === SIDEBAR_ITEMS.Hairdressers ? "active" : ""
                }`}
              >
                <Link
                  to="/users/servicer"
                  onClick={() => {
                    handleClickSideBar(SIDEBAR_ITEMS.Hairdressers);
                  }}
                >
                  <span> Hairdressers</span>
                </Link>
              </li>
              <li
                className={`sidebar__item ${
                  activeSideBar === SIDEBAR_ITEMS.Clients ? "active" : ""
                }`}
              >
                <Link
                  to="/users/client"
                  onClick={() => {
                    handleClickSideBar(SIDEBAR_ITEMS.Clients);
                  }}
                >
                  <span> Clients</span>
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={`sidebar__item ${
              activeSideBar === SIDEBAR_ITEMS.AllOrders ? "active" : ""
            }`}
          >
            <Link
              to="/orders"
              onClick={() => {
                handleClickSideBar(SIDEBAR_ITEMS.AllOrders);
              }}
            >
              <img src={shoppingListLogo} alt="shoppingListImg" />
              <span>All Orders</span>
            </Link>
          </li>
          <li
            className={`sidebar__item ${
              activeSideBar === SIDEBAR_ITEMS.Comments ? "active" : ""
            }`}
          >
            <Link
              to="/comments"
              onClick={() => {
                handleClickSideBar(SIDEBAR_ITEMS.Comments);
              }}
            >
              <img src={commentLogo} alt="commentImg" />
              <span> Comments</span>
            </Link>
          </li>
          <li
            className={`sidebar__item ${
              activeSideBar === SIDEBAR_ITEMS.Appeals ? "active" : ""
            }`}
          >
            <Link
              to="/appeals"
              onClick={() => {
                handleClickSideBar(SIDEBAR_ITEMS.Appeals);
              }}
            >
              <img src={applicationLogo} alt="applicationImg" />
              <span> Appeals</span>
            </Link>
          </li>
          <li
            className={`sidebar__item ${
              activeSideBar === SIDEBAR_ITEMS.Message ? "active" : ""
            }`}
          >
            <Link
              to="/messages"
              onClick={() => {
                handleClickSideBar(SIDEBAR_ITEMS.Message);
              }}
            >
              <img src={sendLetterLogo} alt="sendLetterImg" />
              <span> Message</span>
            </Link>
          </li>
          <li
            className={`sidebar__item ${
              activeSideBar === SIDEBAR_ITEMS.Setting ? "active" : ""
            }`}
          >
            <Link
              to="/settings"
              onClick={() => {
                handleClickSideBar(SIDEBAR_ITEMS.Setting);
              }}
            >
              <img src={settingLogo} alt="settingImg" />
              <span>Setting</span>
            </Link>
          </li>
        </ul>
        <div className="sidebar__info">
          <h1>Barbers</h1>
          <p>Barbers Administrator panel</p>
          <p>v. 1.0</p>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;

//Note;
/*Bu yerda men UI re-render qilib yuborish muammosiga yo'liqidim. 
Yani  Sidebar item almashganda UI bir render bo'lib sidebar item background-color joyiga qaytib qolayotgan edi.
Yechim: 
1. <a/> to <Link/> ga o'zgartirdim. <a></a> ishlatsam useCallback tufayli Navigation ishlame qoldi.
2. useState va useCallBack dan foydalandim

ChatGPT: 
1. **Use `Link` from `react-router-dom`:** This ensures that the application uses client-side routing and prevents full-page reloads.
2. **State Management with `useState` and `useCallback`:** This helps to manage the active sidebar item state effectively, avoiding unnecessary re-renders.
3. **CSS for Active Links:** The CSS ensures the active link styling is applied correctly.
*/
