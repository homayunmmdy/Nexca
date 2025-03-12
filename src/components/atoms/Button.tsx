import React from "react";
import { ButtonType } from "@/types/FormFiledType";

const Button: React.FC<ButtonType> = ({
  id,
  children,
  color = "btn-primary",
  className,
  onClick,
  disabled = false,
  type = "button",
  ariaLabel,
  value,
  form,
  removeDefaultStyle = false,
  ...rest
}) => {

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      value={value}
      form={form}
      aria-label={ariaLabel}
      className={removeDefaultStyle ? ` ${className}` : `btn ${color === 'btn-null' ? '' : color} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;