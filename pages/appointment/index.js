import React from "react"
import CarouselAbout from "@/components/carousel/CaroselAbout"
import InputWithTitle from "@/components/input/InputWithTitle"
import Dropdown from "@/components/input/Dropdown"
import ContentData from "@/store/ContentData"
import DateInput from "@/components/input/InputDate"
import { FaChevronCircleDown } from "react-icons/fa"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const Appointment = () => {
  return (
    <main>
      <Header />
      <section className="flex flex-col items-center justify-center bg-fixed h-72 bg-about">
        <h1 className="text-3xl font-bold text-secondary">
          MAKE AN APPOINTMENT
        </h1>
        <p className="text-base">
          Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes
        </p>
      </section>
      <section className="h-auto px-20">
        <div className="flex flex-col items-center w-full py-5 mt-10 h-1/6 ">
          <h1 className="text-3xl text-secondary">MAKE AN APPOINTMENT</h1>
          <p className="text-base">
            Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes
          </p>
        </div>
        <div className="flex py-5 mt-2 h-5/6">
          <div className="w-1/2 h-screen rounded-2xl">
            <form className="space-y-3">
              <InputWithTitle
                title="Nama"
                placeholder="Silahkan masukan nama anda ..."
              />
              <div>
                <p className="mb-2 text-sm font-semibold lg:text-lg text-secondary">
                  Jenis Kelamin
                </p>
                <Dropdown
                  unSelect="Pilih Jenis Kelamin"
                  options={ContentData.appointment.dropdownJenisKelamin}
                />
              </div>
              <DateInput label="Tanggal Lahir" />
              <InputWithTitle
                title="Nomor Whats App"
                type="number"
                placeholder="Silahkan masukan nomor wa anda ..."
              />
              <InputWithTitle
                title="Alamat Rumah"
                placeholder="Silahkan masukan alamat rumah anda ..."
              />
              <InputWithTitle
                title="Riwayat Penyakit"
                placeholder="Silahkan masukan riwayat penyakit jika ada ..."
              />
              <div className="flex justify-center mt-12 space-x-4">
                <button
                  type="submit"
                  className="w-4/12 py-3 text-white transition-all duration-300 bg-secondary rounded-xl hover:bg-primary "
                >
                  Submit
                </button>
              </div>
            </form>
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
            Hi fill in the details and submit the form. We will contact you via
            phone or email and fix a time schedule. These are the thing you need
            to carry with you when you come in for the appointment wit the
            doctor.
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
