export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body

    // Perform your authentication logic here
    // Check if the provided username and password are valid
    if (username === "admin" && password === "password") {
      res.status(200).json({ message: "Login successful" })
    } else {
      res.status(401).json({ message: "Invalid username or password" })
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" })
  }
}
