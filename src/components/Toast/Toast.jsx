import './Toast.css';
import { ReactComponent as InfoIcon } from '../../assets/icons/infoIcon.svg';

const Toast = ({ message, visible }) => {
    return (
        <div className={`toast ${visible ? 'toast-show' : ''}`}>
            <InfoIcon className="toast-icon" />
            {message}
        </div>
    );
};

export default Toast;