import Header from './components//Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Header theme={theme} setTheme={setTheme} />
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
