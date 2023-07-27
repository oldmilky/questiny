import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Popup from "../Popup/Popup";
import Systems from "../Systems/Systems";
import "./Title.scss";

function Title() {
  const [popupActive, setPopupActive] = useState(false);

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

  return (
    <motion.section className="title" initial="hidden" whileInView="visible">
      <motion.h1
        className="title__title"
        custom={4}
        variants={leftToRightAnimation}
      >
        Destiny 2 <span className="title__span">Cheat</span>
      </motion.h1>
      <motion.h2
        className="title__subtitle"
        custom={4.5}
        variants={leftToRightAnimation}
      >
        Cheat is <span className="title__span_subtitle">undetected</span> and up
        to date
      </motion.h2>
      <motion.button
        className="title__button"
        custom={5}
        variants={leftToRightAnimation}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={() => setPopupActive(true)}
      >
        Features
      </motion.button>
      <Systems />
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {popupActive && (
          <Popup active={popupActive} setActive={setPopupActive} />
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default Title;
