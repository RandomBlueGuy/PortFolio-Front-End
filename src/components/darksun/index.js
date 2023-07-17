import React from "react";
import componentStyles from "./component.module.css";

const Darksun = () => {
  // function shine() {
  //   for(let i = 0 ; i > 6 ; i++){}
  // }
  return (
    // <main>
    <div className={componentStyles.sun__ctn}>
      <div className={componentStyles.sunshine}></div>
      
      <div className={componentStyles.sun}></div>
    </div>
    // </main>
  );
};

export default Darksun;
