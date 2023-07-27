import React from "react";
import "../style/index.css";

function MenuTabParti({ className }) {
  return (
    <div className={`menu-bar ${className}`}>
      <div className="div">
        <div className="active-page">
          <img className="icon-home" alt="Icon home" src="icon-home.png" />
        </div>
        <img className="icon-file" alt="Icon file" src="icon-file.png" />
        <img
          className="icon-message"
          alt="Icon message"
          src="icon-message.png"
        />
        <img
          className="icon-calendar"
          alt="Icon calendar"
          src="icon-calendar.png"
        />
      </div>
    </div>
  );
}

export default MenuTabParti;
