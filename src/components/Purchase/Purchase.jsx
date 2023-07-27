import { motion } from "framer-motion";
import { useState } from "react";
import "./Purchase.scss";

function Purchase() {
  const [purchase, setPurchase] = useState("day");
  const handleDay = () => {
    setPurchase("day");
  };
  const handleWeek = () => {
    setPurchase("week");
  };
  const handleMouth = () => {
    setPurchase("mouth");
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
    <motion.section
      className="purchase"
      initial="hidden"
      whileInView="visible"
    >
      <motion.div
        className="purchase__container"
        custom={4}
        variants={rightToLeftAnimation}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={handleDay}
      >
        <div className="purchase__wrap">
          <h2 className={purchase === "day" ? "purchase__title_active" : "purchase__title"}>1 week</h2>
          <div className={purchase === "day" ? "purchase__line_active" : "purchase__line"} />
          <h3 className={purchase === "day" ? "purchase__price_active" : "purchase__price"}>$39.00</h3>
        </div>
        <button
          className="purchase__button"
          data-sellix-product="64bff6369ac78"
          type="submit"
        >
          Buy now
        </button>
      </motion.div>
      <motion.div
        className="purchase__container"
        custom={4.5}
        variants={rightToLeftAnimation}
        onClick={handleWeek}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="purchase__wrap">
          <h2 className={purchase === "week" ? "purchase__title_active" : "purchase__title"}>1 mouth</h2>
          <div className={purchase === "week" ? "purchase__line_active" : "purchase__line"} />
          <h3 className={purchase === "week" ? "purchase__price_active" : "purchase__price"}>$99.00</h3>
        </div>
        <button
          className="purchase__button"
          data-sellix-product="64bff63a5ad94"
          type="submit"
        >
          Buy now
        </button>
      </motion.div>
      <motion.div
        className="purchase__container"
        custom={5}
        variants={rightToLeftAnimation}
        onClick={handleMouth}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="purchase__wrap">
          <h2 className={purchase === "mouth" ? "purchase__title_active" : "purchase__title"}>3 mouths</h2>
          <div className={purchase === "mouth" ? "purchase__line_active" : "purchase__line"} />
          <h3 className={purchase === "mouth" ? "purchase__price_active" : "purchase__price"}>$250.00</h3>
        </div>
        <button
          className="purchase__button"
          data-sellix-product="64bff67b64085"
          type="submit"
        >
          Buy now
        </button>
      </motion.div>
    </motion.section>
  );
}

export default Purchase;
