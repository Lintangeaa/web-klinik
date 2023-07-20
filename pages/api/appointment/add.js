import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function addAppointment(req, res) {
  if (req.method === "POST") {
    const { fullName, gender, birthday, phone, address, medicalHistory } =
      req.body

    try {
      const data = await prisma.appointment.create({
        data: {
          fullName,
          gender,
          birthday,
          phone,
          address,
          medicalHistory,
        },
      })

      res.status(201).json({
        status: "success",
        message: "Success to reservation",
        data,
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
