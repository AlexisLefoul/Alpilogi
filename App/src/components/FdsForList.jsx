import PropTypes from "prop-types";
import React from "react";
import "../style/index.css";

function FdsForList({ text = "Text", className }) {
  return (
    <div className={`fds-for-list ${className}`}>
      <div className="text">{text}</div>
      <img className="rectangle" alt="Rectangle" src="icon-FdS.png" />
    </div>
  );
}

FdsForList.propTypes = {
  text: PropTypes.string,
};

export default FdsForList;
