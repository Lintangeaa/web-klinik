import React from "react"
import { useState } from "react"

const RadioButtons = ({ options, title }) => {
  const [selectedOption, setSelectedOption] = useState("")

  const handleOptionChange = (option) => {
    setSelectedOption(option)
    // Add your logic to handle the selected option here
  }
  return (
    <div className="radio-buttons">
      <p className="mb-2 text-sm font-semibold lg:text-lg text-secondary focus:border-secondary">
        {title}
      </p>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={() => handleOptionChange}
            className="hover:bg-secondary ring-secondary"
          />
          {option.label}
        </label>
      ))}
    </div>
  )
}

export default RadioButtons
