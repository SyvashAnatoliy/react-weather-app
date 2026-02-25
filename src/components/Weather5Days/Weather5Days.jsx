import './Weather5Days.css';
import Weather5DaysUrlToggle from './Weather5DaysUrlToggle.jsx';

const Weather5Days = ({ weather, unit }) => {
  if (!weather || !weather.weather5Days) {
    return null;
  }

  const convertTemp = (temp, unit) => {
    if (unit === 'celsius') {
      return temp.toFixed(1);
    } else {
      return Math.round(temp * 1.8 + 32).toFixed(1);
    }
  }

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[date.getDay()];
    return `${day}`;
  }

  return (
    <div className="weather-5days">
      <h2> Weather for 5 Days </h2>
      <ul className="weather5days-list">
        {weather.weather5Days.list.filter((_, i) => i % 8 === 0).map((item, index) => (
          <li key={index} className="weather5days-item">
            <div className="weather5days-date">
              <p className="weather5days-day">{formatDateTime(item.dt_txt)}</p>
              <hr className="line-short"/>
            </div>
            <img src={Weather5DaysUrlToggle(item)} alt="" />
            <p className="weather5days-temp">{convertTemp(item.main.temp, unit)}°{unit === 'celsius' ? 'C' : 'F'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Weather5Days;