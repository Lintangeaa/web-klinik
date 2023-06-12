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
        className="block mb-2 text-sm font-semibold lg:text-lg text-grey-200"
        htmlFor={id}
      >
        {title}
      </label>
      <input
        className="bg-white border-blue-300 appearance-none text-sm w-full border rounded-xl py-3.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputWithTitle
