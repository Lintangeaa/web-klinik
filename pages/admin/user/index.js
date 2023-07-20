import React, { useState, useEffect } from "react"
import { getAllUser, deleteUser } from "@/api/api"
import PageAdmin from "@/components/admin/PageAdmin"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import Link from "next/link"

const User = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getAllUser().then((res) => {
      console.log(res)
      setUsers(res)
    })
  }, [])

  const handleDelete = async (id) => {
    deleteUser(id)
      .then((res) => {
        console.log(res)

        if (res == false) {
          setAlertFailed(true)
          return
        }
        setShowAlert(true)
        setTimeout(() => {
          router.reload()
        }, 2000)
      })
      .catch((err) => console.log(err))
  }

  console.log(users)

  return (
    <PageAdmin>
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
                <td className="flex justify-center py-4 space-x-5 border-b-2 border-r-2 border-biru-dark">
                  <Link href={`/admin/blog/edit?id=`}>
                    <AiOutlineEdit
                      title="Hapus user"
                      className="text-xl cursor-pointer hover:text-secondary"
                    />
                  </Link>
                  <AiOutlineDelete
                    onClick={() => handleDelete(user.id)}
                    title="Hapus user"
                    className="text-xl cursor-pointer hover:text-red-400"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageAdmin>
  )
}

export default User
