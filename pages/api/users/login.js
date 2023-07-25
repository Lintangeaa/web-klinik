import { login } from "@/prisma/user"

const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body
      const data = await login(email, password)
      if (!data) {
        return res.status(404).json({
          message: "Data not found",
        })
      }

      const isPasswordValid = bcrypt.compareSync(password, data.password)

      if (!isPasswordValid) {
        return res.status(404).json({
          message: "Email or Password incorect",
        })
      }

      const payload = {
        username: data.username,
        email: data.email,
        password: data.password,
        role: data.role,
      }

      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: "1h",
      })

      res.status(200).json({
        status: true,
        message: "success",
        data: {
          token: token,
        },
      })
      return res.status(200).json(data)
    } catch (error) {
      return res.status(400).json({ message: error })
    }
  } else {
    return res.status(405).json({ messsage: "Method not allowed" })
  }
}
