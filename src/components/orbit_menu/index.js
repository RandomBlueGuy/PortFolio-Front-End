"use client";

import orbit_menu from "./orbit_menu.module.css";

export default function OrbitMenu() {
  return (
    <div className={orbit_menu.menu__ctn}>
      <div className={`${orbit_menu.orbital} ${orbit_menu.orbital__general}`}>
        <div className={`${orbit_menu.orbital} ${orbit_menu.orbital__general}`}>
          <div
            className={`${orbit_menu.orbital} ${orbit_menu.orbital__general}`}
          >
            <div
              className={`${orbit_menu.orbital} ${orbit_menu.orbital__general}`}
            >
              <div
                className={`${orbit_menu.sun} ${orbit_menu.orbital__general}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
