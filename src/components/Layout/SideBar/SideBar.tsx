import "./Sidebar.css";
import statisticsLogo from "../../../assets/images/statistics.png";
import commentLogo from "../../../assets/images/comments.png";
import applicationLogo from "../../../assets/images/applications.png";
import settingLogo from "../../../assets/images/settings.png";
import sendLetterLogo from "../../../assets/images/send-letter.png";
import shoppingListLogo from "../../../assets/images/shopping-list.png";
import usersLogo from "../../../assets/images/users.png";
import logo from "../../../assets/images/logo.png";

function SideBar() {
  return (
    <div className="container">
      <nav className="nav-sidebar">
        <div className="sidebar__logo">
          <div className="logo__photo"></div>
          <div className="logo__icon"></div>
        </div>
        <ul className="sidebar__main">
          <li className="sidebar__item">
            <a href="/">
              <img src={statisticsLogo} alt="statisticsImg" />
              <span>Dashboard</span>
            </a>
          </li>
          <li className="sidebar__item">
            <a href="/users/servicer">
              <img src={usersLogo} alt="usersImg" />
              <span>Foydalanchilar</span>
            </a>
            <ul>
              <li>
                <a href="/users/servicer">
                  <span> Xizmat beruvchilar</span>
                </a>
              </li>
              <li>
                <a href="/users/client">
                  <span> Xizmat oluvchilar</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar__item">
            <a href="/orders">
              <img src={shoppingListLogo} alt="shoppingListImg" />
              <span>Buyurtmalar</span>
            </a>
          </li>
          <li className="sidebar__item">
            <a href="/comments">
              <img src={commentLogo} alt="commentImg" />
              <span> Sharhlar</span>
            </a>
          </li>
          <li className="sidebar__item">
            <a href="/appeals">
              <img src={applicationLogo} alt="applicationImg" />
              <span> Murojatlar</span>
            </a>
          </li>
          <li className="sidebar__item">
            <a href="/messages">
              <img src={sendLetterLogo} alt="sendLetterImg" />
              <span> Xabar yuborish</span>
            </a>
          </li>
          <li className="sidebar__item">
            <a href="/settings">
              <img src={settingLogo} alt="settingImg" />
              <span>Sozlamalar</span>
            </a>
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
}

export default SideBar;
