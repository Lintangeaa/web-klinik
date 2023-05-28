import Image from "next/image"
import CarouselHome from "@/components/carousel/CarouselHome"

export default function Home() {
  return (
    <main className="">
      <div className="w-full">
        <div className="border-t-4 border-gray-200">
          <CarouselHome />
          <div className="absolute z-50 w-full max-w-xs text-gray-600 bg-white cursor-pointer top-full right-3/4 h-80 rounded-xl hover:bg-primary hover:text-white">
            a
          </div>
          <div className="absolute z-50 w-full max-w-xs transform -translate-x-1/2 bg-white top-full left-1/2 h-80 rounded-xl">
            a
          </div>
          <div className="absolute z-50 w-full max-w-xs bg-white top-full left-3/4 h-80 rounded-xl">
            a
          </div>
        </div>
      </div>

      <div className="flex h-96"></div>
    </main>
  )
}
