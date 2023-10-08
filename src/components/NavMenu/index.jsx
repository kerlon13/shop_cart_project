import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderBtn from "../HeaderBtn";
import style from './index.module.css';

function NavMenu() {
  const [isActive, setIsActive] = useState(true);
  
  return (
    <nav className={style.nav_menu}>
      <div className={style.btns_wrapper}>
        <NavLink 
            to='/' 
            onClick={() => setIsActive(true)}
        >
          <HeaderBtn title="Categories" isActive={isActive}  />
        </NavLink>
        <NavLink 
            to='/cart' 
            onClick={() => setIsActive(false)}
        >
          <HeaderBtn title="Cart" isActive={!isActive} />
        </NavLink>
      </div>
    </nav>
  );
}

export default NavMenu;
