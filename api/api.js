import axios from "axios"
const domain = "http://localhost:8080"
import { destroyCookie } from "next-cookies"

export const loginApi = async (email, password) => {
  const res = await axios({
    method: "POST",
    baseURL: `${domain}/users`,
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

export const apiWhoami = async (token) => {
  const res = await axios({
    method: "GET",
    baseURL: `${domain}/users/whoami?token=${token}`,
  })
  localStorage.setItem("user", JSON.stringify(res.data.data))
  return res.data.data
}

export const getAllUser = async () => {
  const res = await axios({
    method: "GET",
    baseURL: `${domain}/users`,
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
    baseURL: `${domain}/api/users?id=${id}`,
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
    baseURL: `${domain}/appointment`,
    headers: {
      "Content-Type": "application/json",
    },
  })
  if (res.data.success == false) {
    return res.data.success
  }
  return res.data.data
}

export const addAppointmentApi = async (
  name,
  gender,
  birthday,
  phone,
  address,
  medicalHistory
) => {
  const res = await axios({
    method: "POST",
    baseURL: `${domain}/appointment`,
    data: {
      name,
      gender,
      birthday,
      phone,
      address,
      medicalHistory,
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

export const apiAddAppoinment = async ({
  name,
  gender,
  birthday,
  phone,
  address,
  medicalHistory,
  docterId,
  userId,
}) => {
  try {
    const data = {
      name,
      gender,
      birthday,
      phone,
      address,
      medicalHistory,
      docterId,
      userId,
    }
    const res = await axios({
      baseURL: `${domain}/appointment`,
      method: "POST",
      data,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    return res.data
  } catch (error) {
    return error.response.data
  }
}

export const apiDeleteAppointment = async (id) => {
  const res = await axios({
    method: "DELETE",
    baseURL: `${domain}/appointment/${id}`,
  })
  if (res.data.success == false) {
    return res.data.success
  }
  return res.data.data
}

//doctor
export const apiGetAllDoctor = async () => {
  const res = await axios({
    method: "GET",
    baseURL: `${domain}/doctor`,
    headers: {
      "Content-Type": "application/json",
    },
  })
  if (res.data.success == false) {
    return res.data.success
  }
  return res.data.data
}

export const apiAddDoctor = async ({
  name,
  divisionId,
  scheudleId,
  spesialis,
}) => {
  try {
    const data = { name, divisionId, scheudleId, spesialis }
    const res = await axios({
      method: "POST",
      baseURL: `${domain}/doctor`,
      data,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    return res.data
  } catch (error) {
    return error.response.data
  }
}

export const apiDeleteDoctor = async (id) => {
  const res = await axios({
    method: "DELETE",
    baseURL: `${domain}/doctor/${id}`,
  })
  if (res.data.success == false) {
    return res.data.success
  }
  return res.data.data
}

export const apiGetAllDivision = async () => {
  const res = await axios({
    method: "GET",
    baseURL: `${domain}/doctor/division`,
    headers: {
      "Content-Type": "application/json",
    },
  })
  if (res.data.success == false) {
    return res.data.success
  }
  return res.data.data
}

export const apiGetAllScheudle = async () => {
  const res = await axios({
    method: "GET",
    baseURL: `${domain}/doctor/scheudle`,
    headers: {
      "Content-Type": "application/json",
    },
  })
  if (res.data.success == false) {
    return res.data.success
  }
  return res.data.data
}
