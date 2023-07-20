import React, { useState } from "react"
import InputWithTitle from "../input/InputWithTitle"

const PopUpForm = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Perform form submission logic here
    // ...

    // Close the modal after form submission
    setIsOpen(false)
  }

  return (
    <div className="flex items-center justify-end">
      <button
        className="absolute z-50 px-10 font-bold text-white rounded-lg h-14 bg-secondary top-[64px] right-20 hover:bg-white hover:border-2 border-secondary focus:outline-none focus:shadow-outline hover:text-secondary"
        onClick={toggleModal}
      >
        Appointment
      </button>

      {isOpen && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="p-8 bg-white rounded shadow">
            <h2 className="mb-4 text-xl font-bold">Form Modal</h2>
            <form onSubmit={handleSubmit}>
              {/* Add your form fields here */}
              {/* Example input field */}
              <InputWithTitle />

              <div className="flex justify-end">
                <button
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
                <button
                  className="px-4 py-2 ml-4 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={toggleModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default PopUpForm
