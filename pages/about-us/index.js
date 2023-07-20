import React from "react"
import CarouselAbout from "@/components/carousel/CaroselAbout"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const blog = () => {
  return (
    <main>
      <Header />
      <section className="relative bg-fixed h-72 bg-about">
        <h1 className="absolute text-3xl font-bold right-10 top-1/3 text-secondary">
          About US
        </h1>
      </section>
      <section className="h-screen px-20">
        <div className="w-full py-5 mt-10 border-b-4 border-double border-secondary">
          <h1 className="text-3xl text-secondary">
            Who <span className="font-bold">We Are</span>
          </h1>
        </div>
        <div className="flex space-x-5 py-5 mt-2">
          <p className="w-2/3">
            Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes
            nemo minima rerums unsers sadips amets. Sed ut perspiciatis unde
            omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sedgnciunt. Sed ut perspiciatis unde omnis accusantium
            doloremque laudantium ab illo inventore.
          </p>
          <div className="w-1/3 rounded-2xl">
            <CarouselAbout />
          </div>
        </div>
        <div className="py-10 text-center bg-slate-100 rounded-xl">
          <h1 className="text-3xl text-secondary leading-loose">
            MEET THE <span className="font-bold">PERFECT SPECIALIST</span> TEAM
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat nibh euismod tincidunt ut laoreet dolore magna.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default blog
