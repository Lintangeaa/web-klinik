import React from "react"
import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => {
  return (
    <main className="z-50 py-5 bg-secondary">
      <div className="flex justify-between max-w-6xl mx-auto font-semibold text-white">
        <p className="w-1/2">Copyright © 2023 Kelompok 4 Reserved.</p>
        <div className="w-1/3">
          <div class="flex justify-center items-center space-x-4">
            <a href="https://twitter.com/" target="_blank">
              <i className="fab fa-twitter text-2xl"></i>
            </a>

            <a href="https://www.facebook.com/" target="_blank">
              <i className="fab fa-facebook text-2xl"></i>
            </a>

            <a href="https://www.youtube.com/" target="_blank">
              <i className="fab fa-youtube text-2xl"></i>
            </a>

            <a href="https://www.instagram.com/" target="_blank">
              <i className="fab fa-instagram text-2xl"></i>
            </a>

          </div>
        </div>
        <div className="w-1/2">
          <ul className="flex justify-end space-x-10 text-normal">
            <li>Privacy Policy</li>
            <li>Contact</li>
            <li>Term of Use</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Footer
