import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="container">
      <div className="content">
        <div className="main">
          <div className="first-half">
          </div>
          <div className="second-half">
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
