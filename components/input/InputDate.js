import React from "react"

const DateInput = ({ label, value, onChange, style }) => {
  return (
    <div className={style}>
      <label className="mb-2 text-sm font-semibold lg:text-lg text-secondary">
        {label}
      </label>
      <input
        type="date"
        className="w-full px-4 py-3 border rounded-md border-secondary dark:bg-white"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default DateInput
