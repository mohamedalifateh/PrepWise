import React from "react";
import "./Button.css";

const Button = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  type = "button",
  onClick,
  ...props
}) => {
  const classes = `btn btn-${variant} btn-${size} ${className}`;

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;