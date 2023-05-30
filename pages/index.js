import Image from "next/image"
import CarouselHome from "@/components/carousel/CarouselHome"
import Footer from "@/components/Footer"
import { BiDonateHeart } from "react-icons/bi"
import { FaLaptopMedical, FaStethoscope } from "react-icons/fa"
import ContentData from "@/store/ContentData"

export default function Home() {
  return (
    <main className="w-full">
      <div className="relative mx-auto border-t-2 border-gray-200">
        <CarouselHome />
        <div className="z-50 flex flex-col w-full px-20 lg:absolute lg:flex-row container-fluid -bottom-44">
          <div className="relative px-12 py-7 cursor-pointer mx-auto w-full max-w-sm bg-white shadow-lg h-72 hover:bg-secondary hover:text-white transition ease-in-out delay-150 hover:-translate-y-8 duration-300 ... bg-content1">
            <BiDonateHeart className="text-7xl" />
            <p className="py-2 text-2xl font-semibold">
              {ContentData.home.box.title1}
            </p>
            <p className="text-sm"> {ContentData.home.box.content1}</p>
          </div>
          <div className="relative px-10 py-7 cursor-pointer mx-auto w-full max-w-sm bg-white shadow-lg h-72 hover:bg-secondary hover:text-white transition ease-in-out delay-150 hover:-translate-y-8 duration-300 ... bg-content1">
            <FaLaptopMedical className="text-7xl" />
            <p className="py-2 text-2xl font-semibold">
              {ContentData.home.box.title2}
            </p>
            <p className="text-sm"> {ContentData.home.box.content2}</p>
          </div>
          <div className="relative px-10 py-7 cursor-pointer mx-auto w-full max-w-sm bg-white shadow-lg h-72 hover:bg-secondary hover:text-white transition ease-in-out delay-150 hover:-translate-y-8 duration-300 ... bg-content1">
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
        <div className="w-1/2 pt-64">
          <p className="text-lg font-ligt">OUR MEDICAL</p>
          <p className="text-3xl font-bold">
            We&apos;re setting Standards in Research what&apos;s more, Clinical
            Care.
          </p>
        </div>
      </div>
    </main>
  )
}
