import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

export default async function Login(req, res) {
  if (req.method === "POST") {
    const { user, password } = req.body

    try {
      const data = await prisma.User.findOne({
        email,
      })

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
    } catch (error) {
      res.status(500).json({
        message: error.message,
      })
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" })
  }
}
