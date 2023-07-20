import React from "react"
import CarouselAbout from "@/components/carousel/CaroselAbout"
import GoogleMaps from "@/components/GoogleMap"
import { TbActivity } from "react-icons/tb"
import { FaGlobeEurope } from "react-icons/fa"
import { BsPhone } from "react-icons/bs"
import { FiMail } from "react-icons/fi"
import ContentData from "@/store/ContentData"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import InputWithTitle from "@/components/input/InputWithTitle"

const Contact = () => {
  return (
    <main>
      <Header />
      <section className="flex flex-col items-center justify-center bg-fixed h-72 bg-about">
        <h1 className="text-3xl font-bold text-secondary">Contact Us</h1>
      </section>
      <section className="px-20 py-10">
        <div className="flex flex-col items-center space-y-5">
          <h1 className="text-2xl font-semibold text-secondary">Alamat Kami</h1>
          <GoogleMaps />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center py-20 bg-slate-100">
        <h1>Hubungi sekarang</h1>
        <h1 className="text-2xl font-bold text-secondary">
          Tulis pesan untuk kami !
        </h1>
        <TbActivity className="text-5xl text-secondary" />

        <div className="z-10 grid w-full grid-cols-3 mt-10 hover:drop-shadow-xl">
          <div className="flex flex-col items-center justify-center w-full h-32 max-w-xs mx-auto mb-6 overflow-hidden transition duration-300 ease-in-out delay-150 rounded-t-lg cursor-pointer hover:bg-white bg-none hover:-translate-y-8 hover:border-b-4 border-secondary">
            <div className="flex">
              <div className="flex justify-center w-1/6 ">
                <FaGlobeEurope className="text-4xl" color="#13BFB3" />
              </div>
              <div className="w-5/6">
                <div className="mb-2 text-lg font-bold text-black lg:text-xl">
                  {ContentData.home.ourservice.popup.title1}
                </div>
                <p className="text-sm text-gray-400 lg:text-base">
                  {ContentData.home.ourservice.popup.content1}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-32 max-w-xs mx-auto overflow-hidden transition duration-300 ease-in-out delay-150 rounded-t-lg cursor-pointer hover:bg-white bg-none hover:-translate-y-8 hover:border-b-4 border-secondary">
            <div className="flex">
              <div className="flex justify-center w-1/6 ">
                <BsPhone className="text-4xl" color="#13BFB3" />
              </div>
              <div className="w-5/6">
                <div className="mb-2 text-lg font-bold text-black lg:text-xl">
                  {ContentData.home.ourservice.popup.title1}
                </div>
                <p className="text-sm text-gray-400 lg:text-base">
                  {ContentData.home.ourservice.popup.content1}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-32 max-w-xs mx-auto overflow-hidden transition duration-300 ease-in-out delay-150 rounded-t-lg cursor-pointer hover:bg-white bg-none hover:-translate-y-8 hover:border-b-4 border-secondary">
            <div className="flex">
              <div className="flex justify-center w-1/6 ">
                <FiMail className="text-4xl" color="#13BFB3" />
              </div>
              <div className="w-5/6">
                <div className="mb-2 text-lg font-bold text-black lg:text-xl">
                  {ContentData.home.ourservice.popup.title1}
                </div>
                <p className="text-sm text-gray-400 lg:text-base">
                  {ContentData.home.ourservice.popup.content1}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex px-20 py-10">
        <section className="w-1/2">
          <InputWithTitle
            title="Nama"
            placeholder="Silahkan masukan nama anda ..."
          />
          <InputWithTitle
            title="Nomor Telepon"
            placeholder="Silahkan masukan nomor wa ..."
          />
          <InputWithTitle
            title="Pesan"
            placeholder="Apa yang anda ingin sampaikan ..."
          />
          <button className="px-3 py-2 mt-5 text-base font-semibold text-white rounded-md bg-secondary hover:bg-primary">
            SUBMIT
          </button>
        </section>
        <section className="w-1/2 h-screen bg-no-repeat bg-contact"></section>
      </section>
      <Footer />
    </main>
  )
}

export default Contact
