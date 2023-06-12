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
      className="h-full"
    >
      {ContentData.BannerImage.map((banner) => (
        <SwiperSlide key={banner}>
          <Image
            className="w-full -z-20 rounded-2xl"
            src={banner}
            width={1000}
            height={200}
            alt="banner"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Banner
