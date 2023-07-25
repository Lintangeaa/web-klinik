import Link from "next/link"
import Image from "next/image"
import { GrUserManager } from "react-icons/gr"

const Card = ({ name, spesialis }) => {
  return (
    <div className="w-full max-w-xs mx-auto mb-6 overflow-hidden rounded-lg shadow-lg lg:mb-0 ">
      <div className="flex items-center justify-center object-contain w-full h-40 bg-cyan-200">
        <GrUserManager className="text-9xl" />
      </div>
      <div className="px-6 py-4 border-t">
        <div className="mb-2 text-lg font-bold text-black lg:text-xl">
          {name}
        </div>
        <p className="text-sm text-gray-400 lg:text-base">
          Spesialis : {spesialis}
        </p>
      </div>

      <div className="flex justify-end mx-6 my-4"></div>
    </div>
  )
}

export default Card
