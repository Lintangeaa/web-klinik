import { useRouter } from "next/navigation"
import jwt from "jsonwebtoken"
import { useState } from "react"
import { loginApi } from "@/api/api"

export default function AboutUs() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    loginApi(email, password)
      .then((res) => {
        if (res == false) {
          setTimeout(() => {
            setEmail("")
            setPassword("")
            alert("Login Unsuccess")
          }, 3000)
          alert("Login Succes")
        }
        const { token } = res
        console.log(token)

        // Decode the JWT token to get the admin role
        const decodedToken = jwt.decode(token)
        const adminRole = decodedToken.role
        localStorage.setItem("token", token)

        if (adminRole == "admin") {
          return router.push("/admin")
        } else {
          return router.push("/")
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <div className="w-full h-screen mt-10 bg-white">
        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="flex flex-col w-full max-w-sm gap-6 px-8 py-8 mx-auto my-10 shadow-xl font-poppins bg-secondary rounded-xl">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-semibold text-white">Sign In</h1>
              <p className="text-sm text-white">
                Sign in to access Admin Dashboard
              </p>
            </div>
            <div className="form-group">
              <div className="form-field">
                <label className="text-white form-label">Email</label>
                <div className="form-control">
                  <input
                    placeholder="Type here"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-2 rounded-xl border-primary input"
                  />
                </div>
              </div>
              <div className="mt-5 form-field">
                <label className="text-white form-label">Password</label>
                <div className="form-control">
                  <input
                    placeholder="Type here"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border-2 rounded-xl border-primary input"
                  />
                </div>
              </div>
              <div className="pt-5 form-field">
                <div className="justify-center text-center form-control">
                  <button
                    type="submit"
                    className="w-1/2 p-2 text-white rounded-lg bg-primary hover:bg-biru-dark"
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
