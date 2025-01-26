import React from "react";
import "./Button.css";
import classNames from "classnames";

const Button = ({
  children,
  size = "small",
  disabled = false,
  isActive = false,
}) => {
  return (
    <button
      className={`${size === "small" ? "btn-small" : "btn-large"} ${classNames({
        "btn-disabled": disabled,
        "btn-active": isActive,
      })}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
