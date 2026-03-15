import './Weather5Days.css';
import Weather5DaysUrlToggle from './Weather5DaysUrlToggle.jsx';

const Weather5Days = ({ weather, unit, width }) => {
  if (!weather || !weather.weather5Days) {
    return null;
  }

  const convertTemp = (temp, unit) => {
    if (unit === 'celsius') {
      return temp.toFixed(1);
    } else {
      return (temp * 1.8 + 32).toFixed(1)
    }
  }

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const daysLong = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return width >= 1215
      ? daysLong[date.getDay()]
      : daysShort[date.getDay()];
  }

  const unitSymbol = unit === 'celsius' ? 'C' : 'F';


  return (
    <div className="weather-5days">
      <h2> Weather for 5 Days </h2>
      <ul className="weather5days-list">
        {weather.weather5Days.list.filter((_, i) => i % 8 === 0).map((item) => (
          <li key={item.dt} className="weather5days-item">
            <div className="weather5days-date">
              <p className="weather5days-day">{formatDateTime(item.dt_txt)}</p>
              <hr className="line-short" />
            </div>
            <img src={Weather5DaysUrlToggle(item)} alt="" />
            <p className="weather5days-temp">{convertTemp(item.main.temp, unit)}°{unitSymbol}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Weather5Days;