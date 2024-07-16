import React from "react";

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
          rows={type === "body" ? "10" : "5"}
          className = "textarea textarea-bordered textarea-primary w-full" 
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          className = "input input-bordered input-primary w-full" 
        />
      )}
    </div>
  );
};

export default FormField;