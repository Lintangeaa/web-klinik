import { PrismaClient } from "@prisma/client"

export default async function getAppointment(req, res) {
  const prisma = new PrismaClient()
  if (req.method === "GET") {
    try {
      const user = await prisma.appointment.findMany()
      console.log("succes")
      res.status(200).json({ success: true, data: user })
    } catch (error) {
      console.log(error)
      res.status(404).json({ success: false, error })
    }
  } else {
    res.status(400).json({
      message: "Method Not Allowed",
    })
  }
}
