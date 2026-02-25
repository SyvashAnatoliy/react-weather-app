import Search from "../SearchBar/SearchBar";
import ThemeToggle from "../Utils/ThemeToggle.jsx";
import "./Header.css";
import avatar from "../../assets/images/avatar.png";

const Header = ({ onSearchChange, theme, setTheme }) => {

  return (
    <div className="header">
      <div className="header-title">
        <h3> Hi, User! </h3>
        <h2> Good {new Date().getHours() < 12 ? "morning" : "afternoon"} </h2>
      </div>
      <div className="header-main">
        <Search onSearchChange={onSearchChange} />
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <div className="avatar">
          <img className="avatar-img" src={avatar} alt="avatar" />
          <button className="arrow-icon" type="button" alt="arrow">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.66669 6.66667L8.00002 10L11.3334 6.66667" stroke="#5E5E5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;