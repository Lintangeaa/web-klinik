import React, { useState } from "react"
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
import { useEffect } from "react"
import jwt from "jsonwebtoken"
import requireLogin from "@/middlewares/requireLogin"

const Header = () => {
  const [username, setUsername] = useState("")

  const router = useRouter()

  useEffect(() => {
    // Retrieve the token from localStorage
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user)

    if (!user) {
      router.push("/login")
    } else {
      setUsername(user.username)
    }
  }, [router])

  const handleLogout = () => {
    // Remove the token from localStorage (accessible only on the client-side)
    if (typeof window !== "undefined") {
      localStorage.removeItem("token")
      router.push("/login") // Redirect to the login page
    }
  }

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
        <div className="flex items-center px-2 py-3 mx-10 bg-white rounded-md shadow-lg">
          <p className="p-2 font-medium text-secondary">{username}</p>
          <button
            className="p-1 text-white bg-red-400 rounded-sm"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
        <div className="flex justify-center w-1/3">
          <Image
            src="/images/Klinikwebicon.png"
            width={200}
            height={100}
            alt=""
            className="absolute bottom-1"
          />
        </div>
        <nav className="flex items-center justify-center w-1/3">
          <ul className="flex justify-between space-x-10 font-medium">
            <NavItem link="/" title="HOME" />

            <li className="cursor-pointer hover:text-secondary">
              <DropdownNavbar
                menu="PAGES"
                options={ContentData.navbar.dropdownOptions}
              />
            </li>
            <NavItem link="/doctor" title="DOCTOR" />
            <NavItem link="/contact" title="CONTACT" />
          </ul>
        </nav>
      </div>
      <button className="absolute z-50 px-10 font-bold text-white rounded-lg h-14 bg-secondary top-[82px] right-20 hover:bg-white hover:border-2 border-secondary focus:outline-none focus:shadow-outline hover:text-secondary">
        <Link href="/appointment">JANJI TEMU</Link>
      </button>
    </div>
  )
}

export default Header
