import React from "react";
import "./Button.css";
import classNames from "classnames";

const Button = ({
  children,
  size = "large",
  disabled = false,
  isActive = false,
  ...restProps
}) => {
  return (
    <button
      className={`${size === "small" ? "btn-small" : "btn-large"} ${classNames({
        "btn-disabled": disabled,
        "btn-active": isActive,
      })}`}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
