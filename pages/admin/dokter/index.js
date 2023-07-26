import { apiDeleteDoctor, apiGetAllDoctor } from "@/api/api"
import PageAdmin from "@/components/admin/PageAdmin"
import React, { useState, useEffect } from "react"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import Link from "next/link"
import { useRouter } from "next/router"
import { Alert } from "@mui/material"

const Doctor = () => {
  const [doctors, setDoctors] = useState([])
  const [status, setStatus] = useState("")

  const router = useRouter()

  useEffect(() => {
    apiGetAllDoctor().then((res) => {
      console.log(res)
      setDoctors(res)
    })
  }, [])

  const handleDelete = async (id) => {
    apiDeleteDoctor(id)
      .then((res) => {
        console.log(res)

        if (res == false) {
          return
        }
        setTimeout(() => {
          setStatus({
            type: "danger",
            message: "Data berhasil dihapus!",
          })
          router.reload()
        }, 2000)
      })
      .catch((err) => console.log(err))
  }
  return (
    <PageAdmin>
      <div className="w-5/6 mx-20 text-black">
        <div className="py-5 text-2xl text-center text-bold font-poppins">
          <h1>doctor</h1>
        </div>
        <Link href="/admin/dokter/add">
          <button className="p-2 mb-5 text-white rounded-sm bg-secondary">
            Tambah Dokter
          </button>
        </Link>
        {status && (
          <Alert severity={status.type === "success" ? "success" : "danger"}>
            {status.message}
          </Alert>
        )}
        <table className="w-full mx-auto text-sm font-light text-left text-black rounded-sm font-poppins">
          <thead className="font-medium text-center border-2 bg-biru-tsg">
            <tr>
              <th scope="col" className="px-2 py-4 border-2 border-biru-dark">
                No
              </th>
              <th scope="col" className="px-2 py-4 border-2 border-biru-dark">
                Nama
              </th>
              <th scope="col" className="px-2 py-4 border-2 border-biru-dark">
                Divisi
              </th>
              <th scope="col" className="px-2 py-4 border-2 border-biru-dark">
                Sesi
              </th>
              <th scope="col" className="px-2 py-4 border-2 border-biru-dark">
                action
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {doctors.map((doctor, i) => (
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
                  title={doctor.name}
                >
                  {doctor.name}
                </td>
                <td
                  className="px-2 py-4 border-2 border-biru-dark whitespace-nowrap"
                  title={doctor.Division.name}
                >
                  {doctor.Division.name}
                </td>
                <td
                  className="px-2 py-4 border-2 border-biru-dark whitespace-nowrap"
                  title={doctor.Scheudle.session}
                >
                  {doctor.Scheudle.session}
                </td>
                <td className="flex justify-center py-4 space-x-5 border-b-2 border-r-2 border-biru-dark">
                  <Link href={`/admin/blog/edit?id=${doctor.id}`}>
                    <AiOutlineEdit
                      title="Hapus doctor"
                      className="text-xl cursor-pointer hover:text-secondary"
                    />
                  </Link>
                  <AiOutlineDelete
                    onClick={() => handleDelete(doctor.id)}
                    title="Hapus doctor"
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

export default Doctor
