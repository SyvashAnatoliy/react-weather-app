import Header from './components//Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import CurrentWeather from './components/CurrentWeather/CurrentWeather.jsx';
import useWeatherSearch from './hooks/useWeatherSearch';
import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState('dark');
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState('celsius');

  const { handleOnSearchChange } = useWeatherSearch(setWeather);


  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Header setWeather={setWeather} theme={theme} setTheme={setTheme} onSearchChange={handleOnSearchChange}  />
        <div className="main">
          <div className="first-half">
            <CurrentWeather weather={weather} unit={unit} setUnit={setUnit} />
          </div>
          <div className="second-half">
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
