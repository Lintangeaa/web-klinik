import { useEffect } from "react"
import { useRouter } from "next/router"
import jwt from "jsonwebtoken"

const requireLogin = (WrappedComponent) => {
  const ComponentWithLogin = (props) => {
    const router = useRouter()

    useEffect(() => {
      // Retrieve the token from localStorage
      const token = localStorage.getItem("token")

      if (!token) {
        return router.push("/admin/login")
      }
    }, [router])

    return <WrappedComponent {...props} />
  }

  return ComponentWithLogin
}

export default requireLogin
