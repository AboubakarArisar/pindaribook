import React from "react";
import PropTypes from "prop-types";

const CustomButton = ({ onClick, children, className, ...other }) => {
  return (
    <button
      className={`px-2 py-3 hover:bg-[#f3ad87] min-w-[200px] rounded duration-300 text-white hover:text-black ${className}`}
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
