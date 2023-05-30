import Image from "next/image"
import CarouselHome from "@/components/carousel/CarouselHome"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="w-full">
      <div className="relative mx-auto border-t-2 border-gray-200">
        <CarouselHome />
        <div className="absolute z-50 flex w-full container-fluid -bottom-40">
          <div className="cursor-pointer mx-auto w-full max-w-xs bg-white shadow-lg h-80 hover:bg-primary hover:text-white transition ease-in-out delay-150 hover:-translate-y-8 duration-300 ... bg-content1">
            a
          </div>
          <div className="cursor-pointer mx-auto w-full max-w-xs transform bg-white shadow-lg h-80 hover:bg-primary hover:text-white transition ease-in-out delay-150 hover:-translate-y-8 duration-300 ... bg-content1">
            a
          </div>
          <div className="cursor-pointer mx-auto w-full max-w-xs bg-white shadow-lg h-80 hover:bg-primary hover:text-white transition ease-in-out delay-150 hover:-translate-y-8 duration-300 ... bg-content1">
            a
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
