import { useState } from "react";

const InputField = ({ type, placeholder, onChange, name }) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    onChange(inputValue);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="relative" key={placeholder}>
      <input
        type={type}
        value={value}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        name={name}
        className="w-full h-10 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label
        className={`absolute left-3 transition-all duration-200 ${
          isFocused || value !== "" ? "-top-4 text-xs text-gray-400" : "top-2"
        }`}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default InputField;
