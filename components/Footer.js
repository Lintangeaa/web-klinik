import React from "react"

const Footer = () => {
  return (
    <main>
      <div className="py-5 bg-secondary">
        <div className="flex justify-between max-w-6xl mx-auto font-semibold text-white">
          <p className="w-1/2">Copyright © 2023 Kelompok 4 Reserved.</p>
          <div className="w-1/2">
            <ul className="flex justify-end space-x-10 text-normal">
              <li>Privacy Policy</li>s<li>Contact</li>
              <li>Mbuhlah</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Footer
