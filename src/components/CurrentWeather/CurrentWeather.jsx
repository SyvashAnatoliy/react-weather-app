import './CurrentWeather.css';
import UnitToggle from '../../components/Utils/UnitToggle.jsx';
import { ReactComponent as LocationIcon } from '../../assets/icons/location.svg';
import CurrentWeatherUrlToggle from './CurrentWeatherUrlToggle.jsx';

const CurrentWeather = ({ weather, unit, setUnit }) => {
  if (!weather || !weather.currentWeather) {
    return null;
  }

  const convertTemp = (temp, unit) => {
    if (unit === 'celsius') {
      return temp.toFixed(1);
    } else {
      return Math.round(temp * 1.8 + 32).toFixed(1);
    }
  }

  const convertCountryName = (country) => {
    let countryConvert = new Intl.DisplayNames(['en'], { type: 'region' });
    return countryConvert.of(country);
  }

  const convertCurrentDay = (date) => {
    let DateConvert = new Intl.DateTimeFormat('en', { weekday: 'long' });
    return DateConvert.format(new Date(date));
  }

  const convertCurrentDate = (date) => {
    let DateConvert = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric' });
    return DateConvert.format(new Date(date));
  }

return (
  <div className="current-weather">
    <div className="current-weather-header">
      <div className="current-location">
        <LocationIcon className="location-icon" />
        <p> {weather.currentWeather.name}, {convertCountryName(weather.currentWeather.sys.country)} </p>
      </div>
      <UnitToggle unit={unit} setUnit={setUnit} />
    </div>

    <div className="current-weather-main">
      <div className='current-main-date'>
        <p className='current-day'> {convertCurrentDay(new Date())} </p>
        <p className='current-time'> {convertCurrentDate(new Date())} </p>
      </div>
      <div className="current-info-block">
        <div className='weather-img'>
          <img src={CurrentWeatherUrlToggle(weather)} alt="weather" />
        </div>
        <div className="current-weather-info">
          <div className="current-temp">
            <p className="current-temp-max">{convertTemp(weather.currentWeather.main.temp_max, unit)}°{unit === 'celsius' ? 'C' : 'F'}</p>
            <p className="current-temp-min">/ {convertTemp(weather.currentWeather.main.temp_min, unit)}°{unit === 'celsius' ? 'C' : 'F'}</p>
          </div>
          <div className="current-descr">
            <p className='current-condition'>{weather.currentWeather.weather[0].description}</p>
            <p className='feels-like'>feels like {convertTemp(weather.currentWeather.main.feels_like, unit)}°{unit === 'celsius' ? 'C' : 'F'}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default CurrentWeather;