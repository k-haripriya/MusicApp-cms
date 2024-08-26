import React from "react";
import TransparentBackground from "../TransparentBackground/TransparentBackground";
import styles from "./styles.module.scss";
import { Images } from "../../../constants/Images";

const Loader = () => {
  return (
    <TransparentBackground className={styles.container}>
     <img src={Images.loader} className={styles.loader}/>
    </TransparentBackground>
  );
};

export default Loader;
