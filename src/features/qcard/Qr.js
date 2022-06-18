import { Fragment } from "react";
import styles from "./Qr.module.css";
import code_img from "../../images/code.png";

const Qcard = () => {
  return (
    <div className={styles.card}>
      <img className={styles.code} src={code_img} alt="" />
      <div className={styles.textContainer}>
        <h1 className={styles.h1}>
          Improve your front-end skills by building projects
        </h1>
        <p className={styles.p}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default Qcard;
