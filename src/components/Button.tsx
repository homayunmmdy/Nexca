import React from "react";
import { ButtonType } from "@/types/entities";

const Button: React.FC<ButtonType> = ({
  title,
  color,
  style,
  onCllick,
  disabled,
  type,
}: ButtonType) => {
  return (
    <button
      onClick={onCllick}
      disabled={disabled}
      type={type}
      className={`btn ${color} ${style}`}
    >
      {title}
    </button>
  );
};

export default Button;
