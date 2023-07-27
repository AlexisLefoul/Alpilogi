import React from "react";
import "../style/index.css";

export const Message = ({ className }) => {
  return (
    <div className={`message ${className}`}>
      <img className="ellipse" alt="Ellipse" src="avatar_profe.png" />
      <div className="name">Christine Bernard</div>
      <div className="heure">13:26</div>
      <p className="corps_message">
        Bonjour Christine, j'ai lu que ma grand..
      </p>
    </div>
  );
};
