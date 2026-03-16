import { useEffect } from "react";
import "./ThemeToggle.css";

function ThemeToggle({ theme, setTheme }) {

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button
      className="theme-btn"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    />
  );
}

export default ThemeToggle;