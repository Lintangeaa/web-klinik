"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Autoplay } from "swiper"
import Image from "next/image"
import ContentData from "@/store/ContentData"
import Button from "../button/Button"

const Banner = () => {
  return (
    <Swiper
      spaceBetween={10}
      loop
      pagination={{
        clickable: true,
        type: "bullets",
        clickableClass: "swiper-pagination",
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      slideClass="swiper-slide"
      slideActiveClass="swiper-slide-active"
      speed={800}
    >
      {ContentData.BannerImage.map((banner) => (
        <SwiperSlide key={banner}>
          <div className="absolute top-1/4 left-36 bg-transparant">
            <p className="text-lg font-semibold text-secondary">
              {ContentData.banner.title1}
            </p>
            <p className="py-3 text-5xl font-bold">
              {ContentData.banner.title2} <br /> {ContentData.banner.title3}
            </p>
            <p className="mt-2 font-semibold"> {ContentData.banner.title4}</p>
            <div className="flex items-center mt-10 space-x-4">
              <Button variant="primary" label="About Us" link="/" />
              <Button variant="secondary" label="Our Service" link="/" />
            </div>
          </div>
          <Image
            className="w-full -z-20"
            src={banner}
            width={1400}
            height={200}
            alt="banner"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Banner
