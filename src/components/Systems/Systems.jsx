import { motion } from "framer-motion";
import "./Systems.scss";

function Systems() {

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
    <motion.section className="systems" initial="hidden" whileInView="visible">
      <motion.div className="systems__wrap" custom={5.5} variants={leftToRightAnimation}>
        <h2 className="systems__subtitle">Support CPU:</h2>
        <h1 className="systems__title">Intel Only! (AMD not supported)</h1>
      </motion.div>
      <motion.div className="systems__wrap" custom={6} variants={leftToRightAnimation}>
        <h2 className="systems__subtitle">Support OS:</h2>
        <h1 className="systems__title">Windows 10, Windows 11</h1>
      </motion.div>
      <motion.div className="systems__wrap" custom={6.5} variants={leftToRightAnimation}>
        <h2 className="systems__subtitle">Support Anti-Cheats:</h2>
        <h1 className="systems__title">BattleEye</h1>
      </motion.div>
      <motion.div className="systems__wrap" custom={7} variants={leftToRightAnimation}>
        <h2 className="systems__subtitle">Publisher:</h2>
        <h1 className="systems__title">Bungie</h1>
      </motion.div>
    </motion.section>
  );
}

export default Systems;
