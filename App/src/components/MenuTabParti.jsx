import React from "react";
import "../style/index.css";
import { BiHomeAlt, BiFile, BiMessageDetail, BiCalendar } from "react-icons/bi";

function MenuTabParti({ className }) {
  return (
    <div className={`menu-bar ${className}`}>
      <div className="div">
        <div className="active-page">
          <BiHomeAlt className="icon-home" />
        </div>
        <BiFile className="icon-file" />
        <BiMessageDetail className="icon-message" />
        <BiCalendar className="icon-calendar" />
      </div>
    </div>
  );
}

export default MenuTabParti;
