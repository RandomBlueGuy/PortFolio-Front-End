import React from "react";
import componentStyles from "./component.module.css";

const Darksun = () => {
  return (
    <div className={componentStyles.sun__ctn}>
      <div className={componentStyles.sunshine} />
      <div className={componentStyles.sun} />
    </div>
  );
};

export default Darksun;
