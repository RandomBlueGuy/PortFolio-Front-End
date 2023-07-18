import React from "react";
import componentStyles from "./navbar.module.css";

const NavBar = () => {
  return <div className={componentStyles.navbar}>
   <div className={componentStyles.section__ctn}></div>
   <div className={componentStyles.section__ctn}></div>
   <div className={componentStyles.section__ctn}></div>
   <div className={componentStyles.section__ctn}></div>
  </div>;
};

export default NavBar;
