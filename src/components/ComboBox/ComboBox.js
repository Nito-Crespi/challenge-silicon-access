//src/components/ComboBox/ComboBox.js

import React, { useState } from "react";

const ComboBox = ({ placeholder, options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative h-full w-full">
      <button
        className={`w-full rounded-lg bg-primary-text px-4 py-2 ${selectedOption ? "text-eigengrau" : "text-gray-500"} focus:outline-none`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption || "Seleccione un" + placeholder}
      </button>
      {isOpen && (
        <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-eigengrau bg-primary-text shadow-lg">
          {options.map((option, index) => (
            <li
              key={index}
              className="cursor-pointer px-4 py-2 hover:bg-primary-sa hover:text-eigengrau"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ComboBox;
