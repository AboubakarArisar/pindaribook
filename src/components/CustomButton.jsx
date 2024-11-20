import React from "react";
import PropTypes from "prop-types";

const CustomButton = ({ onClick, children, className, ...other }) => {
  return (
    <button
      className={`px-4 py-2 bg-green-600  min-w-[150px] rounded transition-colors duration-300 text-white ${className} font-semibold`}
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
  className: "default-class",
};

export default CustomButton;
