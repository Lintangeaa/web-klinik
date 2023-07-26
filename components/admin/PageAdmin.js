import React from "react"
import { RxDashboard } from "react-icons/rx"
import { RiUserHeartLine } from "react-icons/ri"
import { FaUserMd, FaUserCircle } from "react-icons/fa"
import { GoChecklist } from "react-icons/go"
import Link from "next/link"
import { useState, useEffect } from "react"
import jwt from "jsonwebtoken"
import { useRouter } from "next/router"
import requireAdmin from "@/middlewares/requireAdmin"

const PageAdmin = ({ children }) => {
  const router = useRouter()
  const [username, setUsername] = useState("")

  useEffect(() => {
    // Retrieve the token from localStorage
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user)
    // const decodedToken = jwt.decode(token)
    setUsername(user.username)
  }, [])

  const handleLogout = () => {
    // Remove the token from localStorage (accessible only on the client-side)
    if (typeof window !== "undefined") {
      localStorage.removeItem("tokem")
      router.push("/login") // Redirect to the login page
    }
  }
  return (
    <>
      <div className="flex">
        <aside className="relative hidden w-64 h-screen shadow-xl bg-sidebar sm:block bg-primary">
          <div className="p-6">
            <a
              href="index.html"
              className="text-3xl font-semibold text-white uppercase hover:text-gray-300"
            >
              Admin
            </a>
            <button className="flex items-center justify-center w-full py-2 mt-5 space-x-2 font-semibold rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-lg bg-lp cta-btn hover:shadow-xl hover:bg-gray-300">
              <FaUserCircle className="text-3xl" />
              <p>{username}</p>
            </button>
            <button
              className="flex items-center justify-center w-full py-2 mt-5 space-x-2 font-semibold bg-red-300 rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-lg cta-btn hover:shadow-xl hover:bg-red-500 hover:text-white"
              onClick={handleLogout}
            >
              <p>Logout</p>
            </button>
          </div>
          <nav className="p-6 pt-3 text-base font-semibold text-secondary">
            <Link
              href="/admin"
              className="flex items-center justify-start w-full py-2 mt-5 font-semibold bg-white rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-lg cta-btn hover:shadow-xl hover:bg-secondary hover:text-white"
            >
              <RxDashboard className="mx-3 text-xl text-left" />
              Dashboard
            </Link>
            <Link
              href="/admin/user"
              className="flex items-center justify-start w-full py-2 mt-5 font-semibold bg-white rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-lg cta-btn hover:shadow-xl hover:bg-secondary hover:text-white"
            >
              <RiUserHeartLine className="mx-3 text-xl text-left" />
              User
            </Link>
            <Link
              href="/admin/dokter"
              className="flex items-center justify-start w-full py-2 mt-5 font-semibold bg-white rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-lg cta-btn hover:shadow-xl hover:bg-secondary hover:text-white"
            >
              <FaUserMd className="mx-3 text-xl text-left" />
              Dokter
            </Link>
            <Link
              href="/admin/appointment"
              className="flex items-center justify-start w-full py-2 mt-5 font-semibold bg-white rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-lg cta-btn hover:shadow-xl hover:bg-secondary hover:text-white"
            >
              <GoChecklist className="mx-3 text-xl text-left" />
              Pendaftaran
            </Link>
          </nav>
        </aside>
        <div className="flex flex-col w-full overflow-x-hidden">{children}</div>
      </div>
    </>
  )
}

export default PageAdmin
