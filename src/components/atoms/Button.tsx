import React from "react";
import { ButtonType } from "@/types/FormFiledType";

const Button: React.FC<ButtonType> = ({
  children,
  color = "btn-primary",
  className,
  removeDefaultStyle = false,
  ...rest
}) => {

  return (
    <button
      className={removeDefaultStyle ? ` ${className}` : `btn ${color === 'btn-null' ? '' : color} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;