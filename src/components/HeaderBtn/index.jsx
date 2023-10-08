import React from "react";
import style from "./index.module.css";

function HeaderBtn({ title, isActive }) {
  const buttonClass = isActive ? `${style.header_btn} ${style.activeLink}` : style.header_btn;

  return <button className={buttonClass}>{title}</button>;
}

export default HeaderBtn;
