import React from "react";
import "./ThemeToggle.css";

function ThemeToggle({ theme, setTheme }) {
  const savedTheme = localStorage.getItem('theme');

   React.useEffect(() => {
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [savedTheme, setTheme]);

  return (
      <button className="theme-btn" onClick={() => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
      }}>
      </button>
  );
}

export default ThemeToggle;