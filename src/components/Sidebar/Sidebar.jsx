import './Sidebar.css';
import { ReactComponent as BellIcon } from '../../assets/icons//sidebar/bellIcon.svg';
import { ReactComponent as CalendarIcon } from '../../assets/icons//sidebar/calendarIcon.svg';
import { ReactComponent as MapIcon } from '../../assets/icons//sidebar/mapIcon.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons//sidebar/settingsIcon.svg';
import { ReactComponent as QuestionIcon } from '../../assets/icons//sidebar/questionIcon.svg';
import { ReactComponent as WeatherIcon } from '../../assets/icons//sidebar/weatherIcon.svg';
import { ReactComponent as UserIcon } from '../../assets/icons//sidebar/userIcon.svg';

const Sidebar = ({ isOpen, showToast }) => {
  const toastMessage = "This feature is not implemented yet, but stay tuned for updates!";

  return (
    <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
      <div className="sidebar-main">
        <div className='sidebar-top'>
          <button onClick={() => showToast(toastMessage)}>
            <UserIcon className="sidebar-menu-icon" />
          </button>
          <hr className="sidebar-long" />
        </div>

        <ul className="sidebar-menu">
          <li className="sidebar-menu-item-active">
            <button className={`sidebar-menu-button active`}>
              <WeatherIcon className="sidebar-menu-icon" />
            </button>
          </li>
          <li className="sidebar-menu-item">
            <button onClick={() => showToast(toastMessage)}>
              <MapIcon className="sidebar-menu-icon" />
            </button>
          </li>
          <li className="sidebar-menu-item">
            <button onClick={() => showToast(toastMessage)}>
              <CalendarIcon className="sidebar-menu-icon" />
            </button>
          </li>
          <li className="sidebar-menu-item">
            <button onClick={() => showToast(toastMessage)}>
              <BellIcon className="sidebar-menu-icon" />
            </button>
          </li>
          <li className="sidebar-menu-item">
            <button onClick={() => showToast(toastMessage)}>
              <SettingsIcon className="sidebar-menu-icon" />
            </button>
          </li>
        </ul>
      </div>

      <div className="sidebar-bottom">
        <hr className="sidebar-long" />
        <button onClick={() => showToast(toastMessage)}>
          <QuestionIcon className="sidebar-menu-icon" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;