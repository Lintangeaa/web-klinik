import Image from "next/image"
import CarouselHome from "@/components/carousel/CarouselHome"
import Footer from "@/components/Footer"
import { BiDonateHeart } from "react-icons/bi"
import { FaLaptopMedical, FaStethoscope } from "react-icons/fa"
import { TbActivity } from "react-icons/tb"
import { BsHeartPulse } from "react-icons/bs"
import { GiMedicalDrip } from "react-icons/gi"
import { MdOutlineLocalPharmacy } from "react-icons/md"
import ContentData from "@/store/ContentData"
import Button from "@/components/button/Button"
import Header from "@/components/Header"
import PopUpForm from "@/components/form/PopUpForm"

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <div className="relative mx-auto border-t-2 border-gray-200">
        <CarouselHome />
        <div className="z-40 flex flex-col w-full px-20 lg:absolute lg:flex-row container-fluid -bottom-44">
          <div className="relative rounded-xl px-12 py-7 cursor-pointer mx-auto w-full max-w-sm bg-white shadow-lg h-72 hover:bg-secondary hover:text-white transition ease-in-out delay-150 hover:-translate-y-8 duration-300 ... bg-content1">
            <BiDonateHeart className="text-7xl" />
            <p className="py-2 text-2xl font-semibold">
              {ContentData.home.box.title1}
            </p>
            <p className="text-sm"> {ContentData.home.box.content1}</p>
          </div>
          <div className="relative rounded-xl px-10 py-7 cursor-pointer mx-auto w-full max-w-sm bg-white shadow-lg h-72 hover:bg-secondary hover:text-white transition ease-in-out delay-150 hover:-translate-y-8 duration-300 ... bg-content1">
            <FaLaptopMedical className="text-7xl" />
            <p className="py-2 text-2xl font-semibold">
              {ContentData.home.box.title2}
            </p>
            <p className="text-sm"> {ContentData.home.box.content2}</p>
          </div>
          <div className="relative rounded-xl px-10 py-7 cursor-pointer mx-auto w-full max-w-sm bg-white shadow-lg h-72 hover:bg-secondary hover:text-white transition ease-in-out delay-150 hover:-translate-y-8 duration-300 ... bg-content1">
            <FaStethoscope className="text-7xl" />
            <p className="py-2 text-2xl font-semibold">
              {ContentData.home.box.title3}
            </p>
            <p className="text-sm"> {ContentData.home.box.content3}</p>
          </div>
        </div>
      </div>
      <div className="flex w-full h-screen bg-white container-fluid -z-10">
        <div className="flex justify-center w-1/2 pt-64 bg-content2">
          <p className="text-gray-700">Our Medical</p>
        </div>
        <div className="w-1/2 px-2 pt-64">
          <p className="text-lg font-ligt">OUR MEDICAL</p>
          <p className="max-w-xl py-5 text-3xl font-bold text-black">
            We&apos;re setting Standards in Research what&apos;s more, Clinical
            Care.
          </p>
          <TbActivity className="text-8xl text-secondary" />
          <div className="max-w-xl">
            <p className="py-4 text-sm">
              {ContentData.home.ourmedical.content2}
            </p>
            <p className="py-4 text-sm">
              {ContentData.home.ourmedical.content3}
            </p>
            <Button variant="primary" link="/" label="About Us" />
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-white bg-no-repeat bg-contain container-fluid bg-content3 ">
        <div className="flex flex-col items-center py-28">
          <p className="text-xl text-gray-700">
            {ContentData.home.ourservice.title}
          </p>
          <p className="text-3xl font-bold">
            {ContentData.home.ourservice.title2}
          </p>
          <TbActivity className="text-8xl text-secondary" />
          <div className="z-50 grid w-full grid-cols-3 mt-10 hover:drop-shadow-xl">
            <div className="flex flex-col items-center justify-center w-full max-w-xs mx-auto mb-6 overflow-hidden transition duration-300 ease-in-out delay-150 cursor-pointer hover:bg-white bg-none h-72 rounded-t-2xl hover:-translate-y-8 hover:border-b-4 border-secondary">
              <BsHeartPulse className="mb-5 text-6xl" />

              <div className="mb-2 text-lg font-bold text-black lg:text-xl">
                {ContentData.home.ourservice.popup.title1}
              </div>
              <p className="mx-5 text-sm text-gray-400 lg:text-base">
                {ContentData.home.ourservice.popup.content1}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full max-w-xs mx-auto overflow-hidden transition duration-300 ease-in-out delay-150 cursor-pointer hover:bg-white bg-none h-72 rounded-t-2xl hover:-translate-y-8 hover:border-b-4 border-secondary">
              <GiMedicalDrip className="mb-5 text-6xl" />
              <div className="mx-auto mb-2 text-lg font-bold text-black lg:text-xl">
                {ContentData.home.ourservice.popup.title2}
              </div>
              <p className="mx-5 text-sm text-gray-400 lg:text-base">
                {ContentData.home.ourservice.popup.content2}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full max-w-xs mx-auto overflow-hidden transition duration-300 ease-in-out delay-150 cursor-pointer hover:bg-white bg-none h-72 rounded-t-2xl hover:-translate-y-8 hover:border-b-4 border-secondary">
              <MdOutlineLocalPharmacy className="mb-5 text-6xl" />
              <div className="mb-2 text-lg font-bold text-black lg:text-xl">
                {ContentData.home.ourservice.popup.title3}
              </div>
              <p className="mx-5 text-sm text-gray-400 lg:text-base">
                {ContentData.home.ourservice.popup.content3}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
