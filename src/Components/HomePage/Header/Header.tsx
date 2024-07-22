import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/Reducers";
import styles from './styles.module.scss'
import NormalText from "../../common/Text/NormalText";

const Header = () => {
  const headerName = useSelector((state: RootState) => state.header);
  return (
    <div className={styles.container}>
      <NormalText className={styles.headerText} text={headerName}/>
    </div>
  );
};

export default Header;
