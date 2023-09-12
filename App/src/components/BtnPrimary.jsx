import PropTypes from "prop-types";
import React from "react";
import "../style/index.css";

function BtnPrimary({ text = "Text", property1, className }) {
  return (
    <div className={`btn-primary property-1-${property1} ${className}`}>
      <div className="text">{text}</div>
    </div>
  );
}

BtnPrimary.propTypes = {
  text: PropTypes.string,
  property1: PropTypes.oneOf(["btn-primary", "btn-primary-light"]),
};

export default BtnPrimary;
