import React from "react";
import { ButtonType } from "@/types/FormFiledType";

const Button: React.FC<ButtonType> = ({
  id,
  children,
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
      id={id}
      className={removeDefaultStyle ? style : `btn ${color} ${style}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
