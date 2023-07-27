import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "./Popup.scss";

function Popup({ active, setActive }) {
  const activeClass = "popup_opened";
  const inactiveClass = "popup";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={active ? activeClass : inactiveClass}
      onClick={() => setActive(false)}
    >
      <div className="popup__content" onClick={e => e.stopPropagation()}>
        <div className="popup__container">
          <h2 className="popup__title">Aimbot</h2>
          <div className="popup__buttons">
            <button className="popup__button">Aimbot hotkey</button>
            <button className="popup__button">Aimbot Bone Selection</button>
            <button className="popup__button">Aimbot Smoothing slider</button>
            <button className="popup__button">FOV</button>
            <button className="popup__button">FOV Radius Slider</button>
            <button className="popup__button">Aim Indicator</button>
            <button className="popup__button">
              Aimbot Fireteam & Multiplayer Team Filters
            </button>
          </div>
        </div>
        <div className="popup__container">
          <h2 className="popup__title">Visuals</h2>
          <div className="popup__buttons">
            <button className="popup__button">Boxes</button>
            <button className="popup__button">Names (soon)</button>
            <button className="popup__button">Distance</button>
            <button className="popup__button">Snaplines</button>
            <button className="popup__button">Features</button>
            <button className="popup__button">
              Regular, Cornered and 3D box options
            </button>
            <button className="popup__button">Filled 2D Boxes option</button>
            <button className="popup__button">Filled Box Opacity Slider</button>
            <button className="popup__button">
              Snapline Origin Selection: Top, Center and Bottom
            </button>
            <button className="popup__button">
              Fireteam & Multiplayer Team Filters
            </button>
            <button className="popup__button">
              Configurable colors for GUI
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

Popup.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default Popup;
