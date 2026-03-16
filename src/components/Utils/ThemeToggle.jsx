import './ThemeToggle.css';

function ThemeToggle({ toggleTheme }) {
  return (
    <button
      className="theme-btn"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    />
  );
}

export default ThemeToggle;