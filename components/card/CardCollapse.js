import { useState } from "react"
import { TbSquareRoundedChevronDownFilled } from "react-icons/tb"

const Card = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="p-5 mb-4 rounded-md shadow-xl bg-third">
      <button
        className="flex items-center justify-between w-full mb-2"
        onClick={toggleCollapse}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <TbSquareRoundedChevronDownFilled
          className={`text-4xl transition-transform ${
            isCollapsed ? "transform rotate-180" : ""
          }`}
          color="#13BFB3"
        />
        {/* <svg
          className={`w-5 h-5 transition-transform ${
            isCollapsed ? "transform rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg> */}
      </button>
      {isCollapsed && <p className="w-full ">{content}</p>}
    </div>
  )
}

export default Card
