import React from "react";
import PropTypes from "prop-types";

const CustomButton = ({ onClick, children, className, ...other }) => {
  return (
    <button
      className={`px-4 py-2 hover:bg-yellow-400 border-yellow-400 min-w-[150px] rounded transition-colors duration-300 text-white hover:text-black ${className}`}
      onClick={onClick}
      {...other}
    >
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

CustomButton.defaultProps = {
  type: "button",
  className: "",
};

export default CustomButton;
