import React, { useState, useEffect } from "react"
import CarouselAbout from "@/components/carousel/CaroselAbout"
import InputWithTitle from "@/components/input/InputWithTitle"
import Dropdown from "@/components/input/Dropdown"
import ContentData from "@/store/ContentData"
import DateInput from "@/components/input/InputDate"
import { FaChevronCircleDown } from "react-icons/fa"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import {
  addAppointment,
  apiAddAppoinment,
  apiGetAllDivision,
  apiGetAllDoctor,
} from "@/api/api"
import { useRouter } from "next/router"
import { Alert } from "@mui/material"

const Appointment = () => {
  const [name, setName] = useState("")
  const [gender, setGender] = useState("")
  const [birthday, setBirthday] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [medicalHistory, setMedicalHistory] = useState("")
  const [doctorId, setDoctorId] = useState("")
  const [userId, setUserId] = useState("")
  const [username, setUsername] = useState("")
  const [doctors, setDoctors] = useState([])

  const [status, setStatus] = useState("")

  const router = useRouter()

  useEffect(() => {
    apiGetAllDoctor().then((res) => {
      console.log(res)
      setDoctors(res)
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    apiAddAppoinment({
      name,
      gender,
      birthday,
      phone,
      address,
      medicalHistory,
      doctorId,
      userId,
    })
      .then((res) => {
        console.log(res)
        setTimeout(() => {
          setStatus({
            type: "success",
            message: "Pendaftaran Janji Temu Berhasil",
          })
          router.reload()
        }, 2000)
      })
      .catch((error) => {
        setTimeout(() => {
          setName("")
          setGender("")
          setBirthday("")
          setPhone("")
          setAddress("")
          setMedicalHistory("")
          setDoctorId("")
          setUserId("")
        }, 3000)
        console.log(error)
      })
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    setUserId(parseInt(user.id))
    setUsername(user.username)
  }, [])

  return (
    <main>
      <Header />
      <section className="flex flex-col items-center justify-center bg-fixed h-72 bg-about">
        <h1 className="text-3xl font-bold text-secondary">BUAT JANJI TEMU</h1>
        <p className="mx-16 text-base">
          Dengan membuat janji temu, Anda dapat mengatur waktu yang tepat untuk
          bertemu, berdiskusi, atau mendapatkan pelayanan dari dokter,
          profesional, atau orang lain.
        </p>
      </section>
      <section className="h-auto px-20">
        <div className="flex flex-col items-center w-full py-5 mt-10 h-1/6 ">
          <h1 className="text-3xl text-secondary">BUAT JANJI TEMU</h1>
          <p className="text-base">
            Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes
          </p>
        </div>
        <div className="flex py-5 mt-2 h-5/6">
          <div className="w-1/2 h-screen rounded-2xl">
            <form className="space-y-3" onSubmit={handleSubmit}>
              <label className="block mb-2 text-sm font-semibold lg:text-lg text-secondary">
                Pengguna
              </label>
              <input
                className="bg-white border-secondary appearance-none text-sm w-full border rounded-md py-3.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-secondary"
                placeholder={username}
              />
              <InputWithTitle
                title="Nama Pasien"
                placeholder="Silahkan masukan nama anda ..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div>
                <p className="block mb-2 text-sm font-semibold lg:text-lg text-secondary">
                  Jenis Kelamin
                </p>
                <select
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value)
                  }}
                  className="rounded-md border-secondary"
                >
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
              <DateInput
                label="Tanggal Lahir"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
              <InputWithTitle
                title="Nomor Whats App"
                type="number"
                placeholder="Silahkan masukan nomor wa anda ..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <InputWithTitle
                title="Alamat Rumah"
                placeholder="Silahkan masukan alamat rumah anda ..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <InputWithTitle
                title="Riwayat Penyakit"
                placeholder="Silahkan masukan riwayat penyakit jika ada ..."
                value={medicalHistory}
                onChange={(e) => setMedicalHistory(e.target.value)}
              />
              <p className="block mb-2 text-sm font-semibold lg:text-lg text-secondary">
                Jenis Kelamin
              </p>
              <select
                value={doctorId}
                onChange={(e) => {
                  setDoctorId(e.target.value)
                }}
                className="rounded-md border-secondary"
              >
                {doctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name}
                  </option>
                ))}
              </select>
              <div className="flex justify-center mt-12 space-x-4">
                <button
                  type="submit"
                  className="w-4/12 py-3 text-white transition-all duration-300 bg-secondary rounded-xl hover:bg-primary "
                >
                  Submit
                </button>
              </div>
            </form>
            {status && (
              <Alert
                severity={status.type === "success" ? "success" : "danger"}
              >
                {status.message}
              </Alert>
            )}
          </div>
          <p className="w-1/2 h-screen bg-no-repeat bg-appointment"></p>
        </div>
      </section>
      <section className="h-auto px-20 bg-slate-100">
        <div className="flex flex-col items-center w-full py-5 mt-10 h-1/6 ">
          <h1 className="text-3xl font-bold text-secondary">
            Setelah Mendaftar
          </h1>
          <p className="px-48 text-base text-center">
            Hai isi detailnya dan kirimkan formulirnya. Kami akan menghubungi
            Anda melalui telepon atau email dan memperbaiki jadwal waktu. Ini
            adalah hal yang perlu Anda bawa saat Anda datang untuk membuat janji
            dengan dokter.
          </p>
          <div className="flex w-full px-40 mt-10">
            <ul className="w-1/2 space-y-5">
              <li className="flex space-x-5">
                <FaChevronCircleDown className="text-2xl" color="#13BFB3" />
                <p>Cekkk</p>
              </li>
              <li className="flex space-x-5">
                <FaChevronCircleDown className="text-2xl" color="#13BFB3" />
                <p>Cekkk</p>
              </li>
              <li className="flex space-x-5">
                <FaChevronCircleDown className="text-2xl" color="#13BFB3" />
                <p>Cekkk</p>
              </li>
              <li className="flex space-x-5">
                <FaChevronCircleDown className="text-2xl" color="#13BFB3" />
                <p>Cekkk</p>
              </li>
            </ul>
            <ul className="w-1/2 space-y-5">
              <li className="flex space-x-5">
                <FaChevronCircleDown className="text-2xl" color="#13BFB3" />
                <p>Cekkk</p>
              </li>
              <li className="flex space-x-5">
                <FaChevronCircleDown className="text-2xl" color="#13BFB3" />
                <p>Cekkk</p>
              </li>
              <li className="flex space-x-5">
                <FaChevronCircleDown className="text-2xl" color="#13BFB3" />
                <p>Cekkk</p>
              </li>
              <li className="flex space-x-5">
                <FaChevronCircleDown className="text-2xl" color="#13BFB3" />
                <p>Cekkk</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Appointment
