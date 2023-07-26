import { useEffect } from "react"
import { useRouter } from "next/router"
import jwt from "jsonwebtoken"

const requireAdmin = (WrappedComponent) => {
  const ComponentWithAdminCheck = (props) => {
    const router = useRouter()

    useEffect(() => {
      // Retrieve the token from localStorage
      const user = localStorage.getItem("user")

      if (!user) {
        router.push("/login")
        return
      }
      // console.log(token)

      try {
        // const decodedToken = jwt.decode(token)
        // const adminRole = decodedToken.role

        if (user.role !== "admin") {
          router.push("/")
        }
      } catch (error) {
        router.push("/login")
      }
    }, [router])

    return <WrappedComponent {...props} />
  }

  return ComponentWithAdminCheck
}

export default requireAdmin
