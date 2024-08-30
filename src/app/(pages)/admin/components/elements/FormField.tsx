import { Input } from "@/components";
import React from "react";

//@ts-ignore
const FormField = ({ id, name, type = "text", label, value, onChange, required = false}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          //@ts-ignore
          rows={type === `body` ? 10 : 5}
          className = "textarea textarea-bordered textarea-primary w-full" 
        />
      ) : (
        <>
        <Input 
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        color="input-primary"
        style="w-full"
        />
        </>
      )}
    </div>
  );
};

export default FormField;