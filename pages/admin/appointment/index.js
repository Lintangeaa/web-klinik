import React, { useState, useEffect } from "react"
import { apiDeleteAppointment, getAllAppointment } from "@/api/api"
import PageAdmin from "@/components/admin/PageAdmin"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import Link from "next/link"
import { useRouter } from "next/router"

const Appointment = () => {
  const [appointments, setAppointment] = useState([])

  const router = useRouter()

  useEffect(() => {
    getAllAppointment().then((res) => {
      console.log(res)
      setAppointment(res)
    })
  }, [])

  const handleDelete = async (id) => {
    apiDeleteAppointment(id)
      .then((res) => {
        console.log(res)

        if (res == false) {
          return
        }
        setTimeout(() => {
          router.reload()
        }, 2000)
      })
      .catch((err) => console.log(err))
  }

  return (
    <PageAdmin>
      <div className="w-5/6 mx-20 text-black">
        <div className="py-5 text-2xl text-center text-bold font-poppins">
          <h1>Antrian</h1>
        </div>
        <table className="w-full mx-auto text-sm font-light text-left text-black rounded-sm font-poppins">
          <thead className="font-medium text-center border-2 bg-biru-tsg">
            <tr>
              <th scope="col" className="px-2 py-4 border-2 border-biru-dark">
                #
              </th>
              <th scope="col" className="px-2 py-4 border-2 border-biru-dark">
                Nama
              </th>
              <th scope="col" className="px-2 py-4 border-2 border-biru-dark">
                Jenis Kelamin
              </th>
              <th scope="col" className="px-2 py-4 border-2 border-biru-dark">
                Tanggal Lahir
              </th>

              <th scope="col" className="px-2 py-4 border-2 border-biru-dark">
                Telepon
              </th>
              <th scope="col" className="px-2 py-4 border-2 border-biru-dark">
                Alamat
              </th>
              <th scope="col" className="px-2 py-4 border-2 border-biru-dark">
                Riwayat Penyakit
              </th>
              <th scope="col" className="px-2 py-4 border-2 border-biru-dark">
                Dokter
              </th>
              <th scope="col" className="px-2 py-4 border-2 border-biru-dark">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {appointments.map((appointment, i) => (
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
                  title={appointment.name}
                >
                  {appointment.name}
                </td>
                <td
                  className="px-2 py-4 border-2 border-biru-dark whitespace-nowrap"
                  title={appointment.gender}
                >
                  {appointment.gender}
                </td>
                <td
                  className="px-2 py-4 border-2 border-biru-dark whitespace-nowrap"
                  title={appointment.birthday}
                >
                  {appointment.birthday}
                </td>
                <td
                  className="px-2 py-4 border-2 border-biru-dark whitespace-nowrap"
                  title={appointment.phone}
                >
                  {appointment.phone}
                </td>
                <td
                  className="px-2 py-4 border-2 border-biru-dark whitespace-nowrap"
                  title={appointment.address}
                >
                  {appointment.address}
                </td>
                <td
                  className="px-2 py-4 border-2 border-biru-dark whitespace-nowrap"
                  title={appointment.medicalHistory}
                >
                  {appointment.medicalHistory}
                </td>
                <td
                  className="px-2 py-4 border-2 border-biru-dark whitespace-nowrap"
                  title={appointment.Doctor.name}
                >
                  {appointment.Doctor.name}
                </td>
                <td className="flex justify-center py-4 space-x-5 border-b-2 border-r-2 border-biru-dark">
                  <Link href={`/admin/blog/edit?id=`}>
                    <AiOutlineEdit
                      title="Hapus user"
                      className="text-xl cursor-pointer hover:text-secondary"
                    />
                  </Link>
                  <AiOutlineDelete
                    onClick={() => handleDelete(appointment.id)}
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

export default Appointment
