import React, { useState, useEffect } from "react"
import { getAllUser } from "@/api/api"

const User = () => {
  const [users, setUsers] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")

  useEffect(() => {
    getAllUser().then((res) => {
      console.log(res)
      setUsers(res)
    })
  }, [])

  return (
    <div className="w-5/6 mx-20 text-black">
      <div className="py-5 text-2xl text-center text-bold font-poppins">
        <h1>User</h1>
      </div>
      <table className="w-full mx-auto text-sm font-light text-left text-black rounded-sm font-poppins">
        <thead className="font-medium text-center border-2 bg-biru-tsg">
          <tr>
            <th scope="col" className="px-2 py-4 border-2 border-biru-dark">
              #
            </th>
            <th scope="col" className="px-2 py-4 border-2 border-biru-dark">
              Username
            </th>
            <th scope="col" className="px-2 py-4 border-2 border-biru-dark">
              Email
            </th>
            <th scope="col" className="px-2 py-4 border-2 border-biru-dark">
              Role
            </th>
            <th scope="col" className="px-2 py-4 border-2 border-biru-dark">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {users.map((user, i) => (
            <tr
              key={i}
              className="transition duration-300 ease-in-out hover:bg-white/5"
            >
              <td
                className="px-2 py-4 font-medium border-2 border-biru-dark whitespace-nowrap"
                title={i + 1}
              >
                {i + 1}
              </td>
              <td
                className="px-2 py-4 border-2 border-biru-dark whitespace-nowrap"
                title={user.username}
              >
                {user.username}
              </td>
              <td
                className="px-2 py-4 border-2 border-biru-dark whitespace-nowrap"
                title={user.email}
              >
                {user.email}
              </td>
              <td
                className="px-2 py-4 border-2 border-biru-dark whitespace-nowrap"
                title={user.role}
              >
                {user.role}
              </td>
              <td className="flex justify-center py-4 border-b-2 border-r-2 border-biru-dark"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default User
