import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const addUser = async (username, email, password, role) => {
  const data = await prisma.user.create({
    data: {
      username,
      email,
      password,
      role,
    },
  })

  return data
}

export const login = async (email, password) => {
  const data = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })

  return data
}

export const getAllUser = async () => {
  const users = await prisma.user.findMany()

  return users
}

export const deleteUser = async (id) => {
  await prisma.User.delete({
    where: {
      id: parseInt(id),
    },
  })
}

export const getAllAppointment = async () => {
  const data = await prisma.appointment.findMany()

  return data
}
