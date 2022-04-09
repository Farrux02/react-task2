import { useState } from 'react';
import './formInput.css'

const FormInput = ({ type, name, label, required, handleChange, placeholder, errorMessage, ...props }) => {

  const [touched, setTouched] = useState(false)

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
        onBlur={() => required ? setTouched(true) : setTouched(false)} // ! required true kelsa va required parameterini qoniqtirmasa input borderi qizil ranga o'zgaradi
        onFocus={() => name === 'confirmPassword' && setTouched(true)}
        touched={touched.toString()}
        {...props}
      />
      {(required && errorMessage) && <div className="errorMessage">{errorMessage}</div>} 
    </div>
  );
};

export default FormInput;
