import React from "react";
import { ButtonType } from "@/types/entities";

const Button: React.FC<ButtonType> = ({
  title,
  icon,
  color,
  style,
  onClick,
  disabled,
  type,
  ariaLabel,
  removeDefaultStyle,
}: ButtonType) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={removeDefaultStyle ? style : `btn ${color} ${style}`}
      aria-label={ariaLabel}
    >
      {icon}
      {title}
    </button>
  );
};

export default Button;
