import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import discord from "../../assets/images/discord.svg";
import logo from "../../assets/images/logo.svg";
import mail from "../../assets/images/mail.svg";
import telegram from "../../assets/images/telegram.svg";
import "./Header.scss";

function Header() {
  const leftToRightAnimation = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const rightToLeftAnimation = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <motion.header className="header" initial="hidden" whileInView="visible">
      <Link to="/">
        <motion.div
          className="header__wrap"
          custom={2}
          variants={leftToRightAnimation}
        >
          <img className="header__logo" src={logo} alt="logo" />
          <h1 className="header__name">Questiny</h1>
        </motion.div>
      </Link>
      <motion.div
        className="header__wrapper"
        custom={3}
        variants={rightToLeftAnimation}
      >
        <motion.div
          // className="header__text"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <button
            className="header__text"
            data-sellix-product="64bff721affb7"
            type="submit"
          >
            Donate
          </button>
        </motion.div>
        <motion.button
          className="header__text"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          TOS
        </motion.button>
        <div className="header__buttons">
          <motion.a
            href="https://t.me/+HjaSrRskkxA5OWEy"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            target="_blank"
            rel="noreferrer"
          >
            <img className="header__icon" src={telegram} alt="telegram" />
          </motion.a>
          <motion.a
            href="https://discord.gg/UeHCVxvZ"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            target="_blank"
            rel="noreferrer"
          >
            <img className="header__icon" src={discord} alt="discord" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            href="mailto:admin@questiny.com"
            target="_blank"
            rel="noreferrer"
          >
            <img className="header__icon" src={mail} alt="mail" />
          </motion.a>
        </div>
      </motion.div>
    </motion.header>
  );
}

export default Header;
