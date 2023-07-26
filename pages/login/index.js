import { useRouter } from "next/navigation"
import jwt from "jsonwebtoken"
import { useEffect, useState } from "react"
import { apiWhoami, loginApi } from "@/api/api"
import { Alert } from "@mui/material"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginStatus, setLoginStatus] = useState(null)
  const [loggedUser, setLoggedUser] = useState(null)

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    loginApi(email, password)
      .then((res) => {
        const { token } = res
        console.log(token)
        setLoginStatus({ type: "success", message: "Login successful!" })

        // Decode the JWT token to get the admin role
        const decodedToken = jwt.decode(token)
        const adminRole = decodedToken.role
        apiWhoami(token).then((res) => {
          setLoggedUser(res)
        })

        setTimeout(() => {
          if (adminRole == "admin") {
            router.push("/admin")
          } else {
            router.push("/")
          }
        }, 500)
      })
      .catch((error) => {
        setEmail("")
        setPassword("")
        console.log(error)
      })
  }

  console.log(loggedUser)

  return (
    <>
      <div className="w-full h-screen mt-10 bg-white">
        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="flex flex-col w-full max-w-sm gap-6 px-8 py-8 mx-auto my-10 shadow-xl font-poppins bg-secondary rounded-xl">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-semibold text-white">Sign In</h1>
              <p className="text-sm text-white">
                Sign in untuk dapat mengakses website
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
            {loginStatus && (
              <Alert
                severity={loginStatus.type === "success" ? "success" : "danger"}
              >
                {loginStatus.message}
              </Alert>
            )}
          </div>
        </form>
      </div>
    </>
  )
}
