import './Sidebar.css';
import { ReactComponent as BellIcon } from '../../assets/icons//sidebar/bellIcon.svg';
import { ReactComponent as CalendarIcon } from '../../assets/icons//sidebar/calendarIcon.svg';
import { ReactComponent as MapIcon } from '../../assets/icons//sidebar/mapIcon.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons//sidebar/settingsIcon.svg';
import { ReactComponent as QuestionIcon } from '../../assets/icons//sidebar/questionIcon.svg';
import { ReactComponent as WeatherIcon } from '../../assets/icons//sidebar/weatherIcon.svg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-main">
        <div className='sidebar-top'>
          <label htmlFor="" className="sidebar-burgerLabel">
            <input type="checkbox" className="sidebar-burgerCheckbox" />
            <span className="burger-line1"></span>
            <span className="burger-line2"></span>
            <span className="burger-line3"></span>
          </label>
          <hr className="sidebar-long" />
        </div>

        <ul className="sidebar-menu">
          <li className="sidebar-menu-item">
            <WeatherIcon className="sidebar-menu-icon" />
          </li>
          <li className="sidebar-menu-item">
            <MapIcon className="sidebar-menu-icon" />
          </li>
          <li className="sidebar-menu-item">
            <CalendarIcon className="sidebar-menu-icon" />
          </li>
          <li className="sidebar-menu-item">
            <BellIcon className="sidebar-menu-icon" />
          </li>
          <li className="sidebar-menu-item">
            <SettingsIcon className="sidebar-menu-icon" />
          </li>
        </ul>
      </div>

      <div className="sidebar-bottom">
        <hr className="sidebar-long" />
        <QuestionIcon className="sidebar-menu-icon" />
      </div>
    </div>
  );
};

export default Sidebar;