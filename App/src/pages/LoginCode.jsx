import React from "react";
import { BtnPrimary } from "./BtnPrimary";
import "./style.css";

export const ElementLogInParticulier = () => {
  return (
    <div className="element-log-in-particulier">
      <div className="div">
        <div className="bot">
          <BtnPrimary className="btn-primary-instance" property1="btn-primary" text="Valider" />
        </div>
        <div className="body">
          <div className="code">
            <div className="rectangle" />
            <div className="rectangle" />
            <div className="rectangle" />
            <div className="rectangle" />
          </div>
        </div>
        <div className="top">
          <img className="icon-back" alt="Icon back" src="icon-back.png" />
          <h1 className="text-wrapper">Saississez le code fournis par votre organisme</h1>
        </div>
      </div>
    </div>
  );
};
