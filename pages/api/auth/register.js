import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

export default async function addUser(req, res) {
  if (req.method === "POST") {
    const { username, password, email, role } = req.body

    try {
      const hashedPassword = await bcrypt.hash(password, 10)

      const user = await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
          role,
        },
      })

      res.status(201).json({
        status: "success",
        message: "Successfuly insert data",
        user,
      })
    } catch (error) {
      res.status(400).json({
        message: error.message,
      })
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" })
  }
}
