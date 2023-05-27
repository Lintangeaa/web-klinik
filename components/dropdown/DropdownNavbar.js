import ContentData from '@/store/ContentData'
import React from 'react'
import { GoChevronDown } from "react-icons/go"

const DropdownNavbar = ({menu, options}) => {
  return (
    <div className="relative group">
      <button className="flex items-center">
        {menu}
        <GoChevronDown />
      </button>
      <div className="absolute hidden w-32 p-2 text-black bg-gray-100 rounded-lg group-hover:block">
        {options.map((option, index) => (
          <a
            key={index}
            href={option.link}
            className="block px-2 py-1 text-sm rounded hover:text-primary"
          >
            {option.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default DropdownNavbar