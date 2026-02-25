import Header from './components//Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import CurrentWeather from './components/CurrentWeather/CurrentWeather.jsx';
import Highlights from './components/Highlights/Highlights.jsx';
import Weather3Hours from './components/Weather3Hours/Weather3Hours.jsx';
import Weather5Days from './components/Weather5Days/Weather5Days.jsx';
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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const searchData = { value: `${latitude} ${longitude}` };
      handleOnSearchChange(searchData);
    },
      (error) => {
        handleOnSearchChange({ value: "50.4501 30.5234" });
      }
    );
  }, [handleOnSearchChange]);

  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Header setWeather={setWeather} theme={theme} setTheme={setTheme} onSearchChange={handleOnSearchChange} />
        <div className="main">
          <div className="first-half">
            <CurrentWeather weather={weather} unit={unit} setUnit={setUnit} />
            <Weather3Hours weather={weather} unit={unit} setUnit={setUnit} />
          </div>
          <div className="second-half">
            <Highlights weather={weather} unit={unit} setUnit={setUnit} />
            <Weather5Days weather={weather} unit={unit} setUnit={setUnit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
