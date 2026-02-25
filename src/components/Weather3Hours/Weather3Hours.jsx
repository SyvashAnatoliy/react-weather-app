import './Weather3Hours.css';
import { ReactComponent as DownArrow } from '../../assets/icons/downArrow.svg';
import Weather3HoursUrlToggle from './Weather3HoursUrlToggle.jsx';

const Weather3Hours = ({ weather, unit }) => {
  if (!weather || !weather.weather3Hours) {
    return null;
  }

  const convertTemp = (temp, unit) => {
    if (unit === 'celsius') {
      return temp.toFixed(1);
    } else {
      return Math.round(temp * 1.8 + 32).toFixed(1);
    }
  }

  const highlightsFormatDate = (dt_txt) => {
    const date = new Date(dt_txt);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }

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
        {weather.weather3Hours.list.slice(0, 5).map((item, index) => (
          <li className="weather3hours-item" key={index}>
            <div className="weather3hours-item-info">
              <p className="weather3hours-item-time">
                {new Date(item.dt_txt).getHours() >= 6 && new Date(item.dt_txt).getHours() < 12
                  ? 'Morning'
                  : new Date(item.dt_txt).getHours() >= 12 && new Date(item.dt_txt).getHours() < 18
                    ? 'Afternoon'
                    : new Date(item.dt_txt).getHours() >= 18 && new Date(item.dt_txt).getHours() < 24
                      ? 'Evening'
                      : 'Night'
                }
              </p>
              <h3 className="weather3hours-item-date">{highlightsFormatDate(item.dt_txt)}</h3>
              <p className="weather3hours-item-description">{item.weather[0].description}</p>
            </div>
            <img src={Weather3HoursUrlToggle(item)} alt="" className="weather3hours-item-img" />
              <p className="weather3hours-item-temp">{convertTemp(item.main.temp_max, unit) }°{unit === 'celsius' ? 'C' : 'F'} 
                <span>/{convertTemp(item.main.temp_min, unit) }°{unit === 'celsius' ? 'C' : 'F'}</span>
              </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Weather3Hours;