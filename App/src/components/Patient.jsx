import PropTypes from "prop-types";
import React from "react";
import "../style/index.css";

function Patient({ text = "Text", className }) {
  return (
    <div className={`patient ${className}`}>
      <img className="ellipse" alt="Ellipse" src="avatar_patient.png" />
      <div className="text">{text}</div>
    </div>
  );
}

Patient.propTypes = {
  text: PropTypes.string,
};

export default Patient;
