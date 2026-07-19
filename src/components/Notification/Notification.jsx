import "./Notification.css";

import successIcon from "../../images/icons/success.png";
import errorIcon from "../../images/icons/error.png";

const icons = {
  success: successIcon,
  error: errorIcon,
};

function Notification({ isOpen, type = "success", title, message }) {
  if (!isOpen) return null;

  return (
    <div
      className={`notification notification--${type}`}
      role="status"
      aria-live="polite"
    >
      <img
        src={icons[type]}
        alt=""
        aria-hidden="true"
        className="notification__icon"
      />

      <div className="notification__content">
        <h3 className="notification__title">{title}</h3>

        {message && <p className="notification__message">{message}</p>}
      </div>
    </div>
  );
}

export default Notification;
