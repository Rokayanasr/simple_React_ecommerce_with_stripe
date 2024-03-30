import React from "react";
import style from "./header.module.css";
function Header() {
  return (
    <div className={style.headerContainer}>
      <div className={style.headerTitle}>

      </div>
      {/* <div className={style.headerSearch}>
        <i className="fa-solid fa-magnifying-glass" />
        <input type="text" placeholder="search" />
      </div> */}
    </div>
  );
}

export default Header;
