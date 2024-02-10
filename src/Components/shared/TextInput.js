// TextInput.js
import React from "react";

const TextInput = ({ label, type, id, placeholder, value, onChange }) => {
  return (
    <div className="form-group">
      <label className="login-label label-color" htmlFor={id}>
        {label}
      </label>
      <input
        className="login-text-field"
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
