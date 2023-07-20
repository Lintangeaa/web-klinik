import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function deleteUser(req, res) {
  try {
    const { id } = req.query
    const { newUsername, newEmail } = req.body
    const updatedData = await prisma.User.update({
      where: {
        id: parseInt(id, 10),
      },
      data: {
        username: newUsername,
        newEmail: newEmail,
      },
    })
    console.log("succes")
    res
      .status(200)
      .json({
        success: true,
        message: "Data berhasil di update",
        data: updatedData,
      })
  } catch (error) {
    console.log(error)
    res.status(404).json({ success: false, error })
  }
}
