import Link from "next/link"
import React from "react"

const NavItem = ({ link, title }) => {
  return (
    <Link className="cursor-pointer hover:text-secondary" href={link}>
      {title}
    </Link>
  )
}

export default NavItem
