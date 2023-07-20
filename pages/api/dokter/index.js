import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function getDokter(req, res) {
  try {
    const user = await prisma.dokter.findMany()
    console.log("succes")
    res.status(200).json({ success: true, data: user })
  } catch (error) {
    console.log(error)
    res.status(404).json({ success: false, error })
  }
}
