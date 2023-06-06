import React from "react"
import Link from "next/link"

const Button = ({ className, label, variant, link }) => {
  const addClassName = className ? `${className}` : ""

  const variants = {
    primary: `bg-secondary text-white hover:bg-white hover:border border-secondary hover:text-secondary`,
    secondary: `bg-white text-secondary hover:bg-secondary hover:text-white`,
  }

  const pickerVariant = variants[variant]

  return (
    <Link
      href={link}
      className={`py-2 px-10 rounded-md  font-normal inline-block ${pickerVariant} ${addClassName}`}
    >
      {label}
    </Link>
  )
}

export default Button
