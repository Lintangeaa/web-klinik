import axios from "axios"
const domain = "http://localhost:3000"
import { destroyCookie } from "next-cookies"

export const loginApi = async (email, password) => {
  const res = await axios({
    method: "POST",
    baseURL: `${domain}/api/login`,
    data: {
      email,
      password,
    },
    headers: {
      "Content-Type": "application/json",
    },
  })
  if (res.data.success == false) {
    return false
  }
  return res.data.data
}

export const getAllUser = async () => {
  const res = await axios({
    method: "GET",
    baseURL: `${domain}/api/users`,
    headers: {
      "Content-Type": "application/json",
    },
  })
  if (res.data.success == false) {
    return res.data.success
  }
  return res.data.data
}

export const deleteUser = async (id) => {
  const res = await axios({
    method: "DELETE",
    baseURL: `${domain}/users/delete?id=${id}`,
  })
  if (res.data.success == false) {
    return res.data.success
  }
  return res.data.data
}

export function logoutUser() {
  destroyCookie(null, "token", { path: "/" })
}

//appointment

export const getAllAppointment = async () => {
  const res = await axios({
    method: "GET",
    baseURL: `${domain}/api/appointment`,
    headers: {
      "Content-Type": "application/json",
    },
  })
  if (res.data.success == false) {
    return res.data.success
  }
  return res.data.data
}
