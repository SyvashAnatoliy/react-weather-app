import './Highlights.css';
import { ReactComponent as WindIcon } from '../../assets/icons/highlights/windIcon.svg';
import { ReactComponent as HumidityIcon } from '../../assets/icons/highlights/humidityIcon.svg';
import { ReactComponent as SunriseIcon } from '../../assets/icons/highlights/sunriseImg.svg';
import { ReactComponent as PressureIcon } from '../../assets/icons/highlights/pressureIcon.svg';
import { ReactComponent as VisibilityIcon } from '../../assets/icons/highlights/visibilityIcon.svg';
import { ReactComponent as SunsetIcon } from '../../assets/icons/highlights/sunsetImg.svg';

const Highlights = ({ weather, isTablet }) => {
  if (!weather || !weather.currentWeather) {
    return null;
  }

  const data = weather.currentWeather;

  const getHumidityStatus = (humidity) => {
    if (humidity < 30)return "Humidity is low";
    if (humidity < 45)return "Humidity is normal";
    if (humidity < 60)return "Humidity is moderate";
    return "Humidity is high";
  };

  const getPressureStatus = (pressure) => {
    if (pressure < 1000)return "Pressure is low";
    if (pressure > 1050)return "Pressure is high";
    return "Pressure is normal";
  };

  const renderSunriseCard = (isTablet) => {
    return (
      <div className="highlightItemLong">
        <SunriseIcon className='highlightItemLong-icon' />
        <div className="highlights-sunStatus">
          <h3 className="highlightItem-title">
            Sunrise
          </h3>
          <p className='highlights-value'>{new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}</p>
        </div>
      </div>
    );
  }

  const renderSunsetCard = (isTablet) => {
    return (
      <div className="highlightItemLong">
        <SunsetIcon className='highlightItemLong-icon' />
        <div className="highlights-sunStatus">
          <h3 className="highlightItem-title">
            Sunset
          </h3>
          <p className='highlights-value'>{new Date(data.sys.sunset * 1000).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="highlights">
      <h2>Today`s Highlights</h2>
      <div className="highlightsGrid">
        { isTablet && renderSunriseCard(isTablet) }
        { isTablet && renderSunsetCard(isTablet) }
        <div className="highlightItem" id='wind-block'>
          <h3 className="highlightItem-title">
            <WindIcon className='highlightItem-icon' />
            Wind Status
          </h3>
          <p className='highlights-value'>{data.wind.speed} <span className='highlights-valueUnit'>m/s</span></p>
          <p className='highlights-desc'>
            {new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })}
          </p>
        </div>

        <div className="highlightItem" id='humidity-block'>
          <h3 className="highlightItem-title">
            <HumidityIcon className='highlightItem-icon' />
            Humidity
          </h3>
          <p className='highlights-value'>{data.main.humidity}<span className='highlights-valueUnit'>%</span></p>
          <p className='highlights-desc'>
            {getHumidityStatus(data.main.humidity)}
          </p>
        </div>

        { !isTablet && renderSunriseCard(isTablet) }

        <div className="highlightItem" id='pressure-block'>
          <h3 className="highlightItem-title">
            <PressureIcon className='highlightItem-icon' />
            Pressure
          </h3>
          <p className='highlights-value'>{data.main.pressure} <span className='highlights-valueUnit'>hPa</span></p>
          <p className='highlights-desc'>
            {getPressureStatus(data.main.pressure)}
          </p>
        </div>

        <div className="highlightItem" id='visibility-block'>
          <h3 className="highlightItem-title">
            <VisibilityIcon className='highlightItem-icon' />
            Visibility
          </h3>
          <p className='highlights-value'>{(data.visibility / 1000).toFixed(1)} <span className='highlights-valueUnit'>km</span></p>
          <p className='highlights-desc'>
            {new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })}
          </p>
        </div>

        { !isTablet && renderSunsetCard(isTablet) }
      </div>
    </div>
  );
}

export default Highlights;