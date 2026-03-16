import { useState, useEffect, useRef } from "react";
import Search from "../SearchBar/SearchBar";
import ThemeToggle from "../Utils/ThemeToggle.jsx";
import SidebarToggle from "../Utils/SidebarToggle.jsx";
import avatar from "../../assets/images/avatar.png";
import "./Header.css";

const Header = ({ onSearchChange, theme, toggleTheme, isOpen, setIsOpen, isMobile }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const greeting =
    new Date().getHours() < 12 ? "morning" : "afternoon";

  const Customization = () => (
    <div className="header-misc">
      <ThemeToggle toggleTheme={toggleTheme} />

      <div
        className="avatar" ref={dropdownRef}>
        <img className="avatar-img" src={avatar} alt="avatar" />

        <button
          className="arrow-icon"
          data-state={isDropdownOpen ? "open" : "closed"}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsDropdownOpen((prev) => !prev);
          }}>
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path
              d="M4.66669 6.66667L8.00002 10L11.3334 6.66667"
              stroke="#5E5E5E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
          <div className="profile-dropdown" data-state={ isDropdownOpen ? "open" : "closed" }>
            <p className="profileName"> User </p>
            <button className="profile-option">Edit Profile</button>
          </div>
      </div>
    </div>
  );

  return (
    <header className="header">
      <div className="header-title">
        <div className="header-greet">
          <SidebarToggle isOpen={isOpen} setIsOpen={setIsOpen} />

          <div className="header-greeting">
            <h3>Hi, User!</h3>
            <h2>Good {greeting}</h2>
          </div>
        </div>

        {isMobile && <Customization />}
      </div>

      <div className="header-main">
        <Search onSearchChange={onSearchChange} />
        {!isMobile && <Customization />}
      </div>
    </header>
  );
};

export default Header;