import { useState, useEffect } from 'react';

import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import CurrentWeather from './components/CurrentWeather/CurrentWeather.jsx';
import Highlights from './components/Highlights/Highlights.jsx';
import Weather3Hours from './components/Weather3Hours/Weather3Hours.jsx';
import Weather5Days from './components/Weather5Days/Weather5Days.jsx';
import PreloadingScreen from './components/PreloadingScreen/PreloadingScreen.jsx';
import Toast from './components/Toast/Toast.jsx';

import useWeatherSearch from './hooks/useWeatherSearch';
import useDebounce from './hooks/useDebounce.jsx';
import { useTheme } from './hooks/useTheme';
import { useToast } from './hooks/useToast';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { toastMessage, isToastVisible, showToast } = useToast();

    const [weather, setWeather] = useState(null);
  const { handleOnSearchChange } = useWeatherSearch(setWeather);

  const [unit, setUnit] = useState('celsius');
  const [isOpen, setIsOpen] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const debouncedWidth = useDebounce(width, 200);
  const [isLoading, setIsLoading] = useState(true);

  const isMobile = debouncedWidth < 768;
  const isTablet = debouncedWidth < 1299;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fallbackLocation = { value: '46.4825 30.7233' }; // Odessa

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const searchData = {
          value: `${coords.latitude} ${coords.longitude}`,
        };

        handleOnSearchChange(searchData);
      },
      () => handleOnSearchChange(fallbackLocation),
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, [handleOnSearchChange]);

  const renderMainContent = () => {
    if (isLoading) return <PreloadingScreen />;

    return (
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
    );
  };

  return (
    <div className="container">
      {!isMobile && (
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          showToast={showToast}
        />
      )}

      <div className="content">
        <Header
          theme={theme}
          toggleTheme={toggleTheme}
          onSearchChange={handleOnSearchChange}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isMobile={isMobile}
        />

        {isMobile && (
          <Sidebar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            showToast={showToast}
          />
        )}

        <div className="main">{renderMainContent()}</div>
      </div>

      <Toast message={toastMessage} visible={isToastVisible} />
    </div>
  );
}

export default App;