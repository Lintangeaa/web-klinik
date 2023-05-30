import React from "react"
import { SlLocationPin } from "react-icons/sl"
import { MdOutlineAvTimer } from "react-icons/md"
import Button from "./button/Button"
import DropdownNavbar from "./dropdown/DropdownNavbar"
import ContentData from "../store/ContentData"
import Logo from "./Logo"
import Image from "next/image"

const Header = () => {
  return (
    <div className="sticky z-50 w-screen text-gray-700 border-t-8 border-primary bg-slate-100 pb-7">
      <div className="flex justify-start max-w-6xl py-4 mx-auto space-x-3">
        <div className="flex space-x-2 cursor-pointer">
          <SlLocationPin className="text-secondary"></SlLocationPin>
          <p className="text-sm">Alamat</p>
        </div>
        <div className="flex px-10 space-x-2 cursor-pointer">
          <MdOutlineAvTimer className="text-xl text-secondary"></MdOutlineAvTimer>
          <p className="text-sm">Jam buka</p>
        </div>
      </div>

      <div className="relative flex w-full max-w-6xl mx-auto bg-gray-200 border border-gray-300 rounded-full py-7">
        <div className="flex justify-center w-1/3 bg-">
          <Image
            src="/images/Klinikwebicon.png"
            width={200}
            height={100}
            alt=""
            className="absolute top-0"
          />
        </div>
        <div className="flex justify-center w-1/3">
          <ul className="flex justify-between space-x-10 font-medium">
            <li className="cursor-pointer hover:text-primary">HOME</li>
            <li className="cursor-pointer hover:text-primary">
              <DropdownNavbar
                menu="PAGES"
                options={ContentData.navbar.dropdownOptions}
              />
            </li>
            <li className="cursor-pointer hover:text-primary">DOCTORS</li>
            <li className="cursor-pointer hover:text-primary">CONTACT</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end w-1/3 h-full bg-black ">
        <Button
          variant="primary"
          link="/home"
          label="Appointment"
          className="absolute py-4 text-center cursor-pointer right-20 w-min top-16 rounded-ful"
        />
      </div>
    </div>
  )
}

export default Header
