import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

export default async function addUser(req, res) {
  if (req.method === "POST") {
    const { nama, spesialis } = req.body

    try {
      const dokter = await prisma.dokter.create({
        data: {
          nama,
          spesialis,
        },
      })

      res.status(201).json({
        status: "success",
        message: "Successfuly insert data",
        dokter,
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
