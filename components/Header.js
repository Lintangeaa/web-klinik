import React from "react"
import { SlLocationPin } from "react-icons/sl"
import { MdOutlineAvTimer } from "react-icons/md"
import Button from "./button/Button"
import DropdownNavbar from "./dropdown/DropdownNavbar"
import ContentData from "../store/ContentData"
import Logo from "./Logo"
import Image from "next/image"
import PopUpForm from "./form/PopUpForm"
import { useRouter } from "next/router"
import NavItem from "./NavItem"
import Link from "next/link"

const Header = () => {
  return (
    <div className="sticky top-0 z-50 w-screen text-gray-700 border-t-8 border-secondary bg-slate-100 pb-7">
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
            className="absolute -bottom-2"
          />
        </div>
        <nav className="flex justify-center w-1/3">
          <ul className="flex justify-between space-x-10 font-medium">
            <NavItem link="/" title="HOME" />

            <li className="cursor-pointer hover:text-secondary">
              <DropdownNavbar
                menu="PAGES"
                options={ContentData.navbar.dropdownOptions}
              />
            </li>
            <NavItem link="/" title="DOCTOR" />
            <NavItem link="/" title="CONTACT" />
          </ul>
        </nav>
      </div>
      <button className="absolute z-50 px-10 font-bold text-white rounded-lg h-14 bg-secondary top-[64px] right-20 hover:bg-white hover:border-2 border-secondary focus:outline-none focus:shadow-outline hover:text-secondary">
        <Link href="/appointment">JANJI TEMU</Link>
      </button>
    </div>
  )
}

export default Header
