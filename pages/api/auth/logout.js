import { destroyCookie } from "nookies"

export default async function Logout(req, res) {
  try {
    // Clear the session by destroying the session cookie
    destroyCookie({ res }, "session") // Replace 'session' with your session cookie name

    res.status(200).json({ message: "Logout successful" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal Server Error" })
  }
}
