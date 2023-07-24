import React from "react"

const InputWithTitle = ({
  width,
  id,
  type = "text",
  placeholder,
  onChange,
  value,
  title,
}) => {
  return (
    <div className={`${width}`}>
      <label
        className="block mb-2 text-sm font-semibold lg:text-lg text-secondary"
        htmlFor={id}
      >
        {title}
      </label>
      <input
        className="bg-white border-secondary appearance-none text-sm w-full border rounded-md py-3.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-secondary"
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default InputWithTitle
