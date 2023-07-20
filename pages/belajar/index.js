import { set } from "mongoose"
import React, { useState } from "react"

const Belajar = () => {
  const [count, setCount] = useState("")

  const handlePlus = () => {
    setCount(count + 1)
  }

  const handleMin = () => {
    setCount(count - 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <section className="flex flex-col items-center justify-center mt-10">
      <div className="flex space-x-3">
        <button
          onClick={handleMin}
          className="px-6 text-3xl font-bold border rounded-md"
        >
          -
        </button>
        <div className="w-20">
          <p className="text-4xl text-center">{count}</p>
        </div>
        <button
          onClick={handlePlus}
          className="px-6 text-3xl font-bold border rounded-md"
        >
          +
        </button>
      </div>
      <div className="flex justify-center mt-2">
        <button
          onClick={handleReset}
          className="px-6 text-3xl font-bold border rounded-md"
        >
          RESET
        </button>
      </div>
    </section>
  )
}

export default Belajar
