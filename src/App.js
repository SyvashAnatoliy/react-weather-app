import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import CurrentWeather from './components/CurrentWeather/CurrentWeather.jsx';
import Highlights from './components/Highlights/Highlights.jsx';
import Weather3Hours from './components/Weather3Hours/Weather3Hours.jsx';
import Weather5Days from './components/Weather5Days/Weather5Days.jsx';
import useWeatherSearch from './hooks/useWeatherSearch';
import PreloadingScreen from './components/PreloadingScreen/PreloadingScreen.jsx';
import Toast from './components/Toast/Toast.jsx';
import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState('dark');
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState('celsius');
  const [isOpen, setIsOpen] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);
  const isMobile = width < 768;
  const isTablet = width < 1299;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const showToast = (message) => {
    setToastMessage(message);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 3000);
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      {!isMobile && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} showToast={showToast}/>}
      <div className="content">
        <Header setWeather={setWeather} theme={theme} setTheme={setTheme} onSearchChange={handleOnSearchChange} isOpen={isOpen} setIsOpen={setIsOpen} isMobile={isMobile} />
        {isMobile && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} showToast={showToast}/>}
        <div className="main">
          {isLoading ? (
            <PreloadingScreen />
          ) : (
            <>
              <div className="first-half">
                <CurrentWeather weather={weather} unit={unit} setUnit={setUnit} />
                <Weather3Hours weather={weather} unit={unit} setUnit={setUnit} />
              </div>
              <div className="second-half">
                <Highlights weather={weather} unit={unit} setUnit={setUnit} isTablet={isTablet} />
                <Weather5Days weather={weather} unit={unit} setUnit={setUnit} width={width} />
              </div>
            </>
          )}
        </div>
      </div>

      <Toast message={toastMessage} visible={isToastVisible} />
    </div>
  );
}

export default App;
