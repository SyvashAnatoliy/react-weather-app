import './Weather3Hours.css';
import { ReactComponent as DownArrow } from '../../assets/icons/downArrow.svg';
import Weather3HoursUrlToggle from './Weather3HoursUrlToggle.jsx';

const Weather3Hours = ({ weather, unit }) => {
  if (!weather || !weather.weather3Hours) {
    return null;
  }

  const convertTemp = (temp, unit) => {
    return unit === "celsius"
      ? temp.toFixed(1)
      : (temp * 1.8 + 32).toFixed(1);
  }

  const formatTime = (dt_txt) => {
    return new Date(dt_txt).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const getTimeOfDay = (dt_txt) => {
    const hours = new Date(dt_txt).getHours();

    if (hours >= 6 && hours < 12) { return 'Morning'; }
    if (hours >= 12 && hours < 18) { return 'Afternoon'; }
    if (hours >= 18 && hours < 24) { return 'Evening'; }
    return 'Night';
  };

  const unitSymbol = unit === 'celsius' ? 'C' : 'F';

  return (
    <div className="weather-3hours">
      <div className="weather3hours-header">
        <h2>Weather for 3 Hours</h2>
        <div className="weather3hours-scrollLabel">
          <p> Scroll </p>
          < DownArrow />
        </div>
      </div>
      <ul className="weather3hours-list">
        {weather.weather3Hours.list.slice(0, 5).map((item) => (
          <li className="weather3hours-item" key={item.dt}>
            <div className="weather3hours-item-info">
              <p className="weather3hours-item-time">
                {getTimeOfDay(item.dt_txt)}
              </p>
              <h3 className="weather3hours-item-date">{formatTime(item.dt_txt)}</h3>
              <p className="weather3hours-item-description">{item.weather[0].description}</p>
            </div>
            <img src={Weather3HoursUrlToggle(item)} alt="" className="weather3hours-item-img" />
            <p className="weather3hours-item-temp">{convertTemp(item.main.temp_max, unit)}°{unitSymbol}
              <span>/{convertTemp(item.main.temp_min, unit)}°{unitSymbol}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Weather3Hours;