import React from "react";

const FormInput = ({ type, name, label, required, handleChange, placeholder, ...props }) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        className="form-input"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export default FormInput;
