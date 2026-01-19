import React from "react";
import Styles from "./Search.module.css";

const LoadingSpinner = () => {
  return (
    <div className={Styles["spinner-overlay"]}>
      <div className={Styles["spinner"]}></div>
      <p>Searching hotels...</p>
    </div>
  );
};

export default LoadingSpinner;
