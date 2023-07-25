import React, { useEffect, useState } from "react"
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
import { apiGetAllDoctor } from "@/api/api"
import Card from "@/components/card/CardProfile"

const Doctor = () => {
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    apiGetAllDoctor().then((res) => {
      console.log(res)
      setDoctors(res)
    })
  }, [])

  return (
    <main>
      <Header />
      <section className="flex flex-col items-center justify-center bg-fixed h-72 bg-about">
        <h1 className="text-3xl font-bold text-secondary">Dokter</h1>
      </section>
      <article>
        <div className="grid grid-cols-4 gap-10 mx-20 mt-10 mb-5">
          {doctors.map((doctor) => (
            <Card
              key={doctor.id}
              name={doctor.name}
              spesialis={doctor.spesialis}
            />
          ))}
        </div>
      </article>

      <Footer />
    </main>
  )
}

export default Doctor
