import React, { useState } from "react"
import CarouselAbout from "@/components/carousel/CaroselAbout"
import Card from "@/components/card/CardCollapse"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const FAQ = () => {
  return (
    <main>
      <Header />
      <section className="flex flex-col items-center justify-center bg-fixed h-72 bg-about">
        <h1 className="text-3xl font-bold text-secondary leading-loose">FAQ</h1>
        <p className="text-base">
          Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes
        </p>
      </section>
      <section className="h-auto px-20 py-10">
        <div className="flex space-x-10">
          <div className="w-1/2 space-y-5">
            <Card
              title="Cek"
              content="Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes"
            />
            <Card
              title="Cek"
              content="Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes"
            />
            <Card
              title="Cek"
              content="Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes"
            />
            <Card
              title="Cek"
              content="Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes"
            />
          </div>
          <div className="w-1/2 space-y-5">
            <Card
              title="Cek"
              content="Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes"
            />
            <Card
              title="Cek"
              content="Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes"
            />
            <Card
              title="Cek"
              content="Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes"
            />
            <Card
              title="Cek"
              content="Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default FAQ
