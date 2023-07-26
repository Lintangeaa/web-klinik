import { apiAddDoctor, apiGetAllDivision, apiGetAllScheudle } from "@/api/api"
import InputWithTitle from "@/components/input/InputWithTitle"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import PageAdmin from "@/components/admin/PageAdmin"
import { Alert } from "@mui/material"

const Add = () => {
  const [divisions, setDivisions] = useState([])
  const [scheudles, setScheudles] = useState([])

  const [name, setName] = useState("")
  const [divisionId, setDivisionId] = useState("")
  const [scheudleId, setScheudleId] = useState("")
  const [spesialis, setSpesialis] = useState("")
  const [status, setStatus] = useState("")

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    apiAddDoctor({ name, divisionId, scheudleId, spesialis })
      .then((res) => {
        console.log(res)
        setTimeout(() => {
          setStatus({
            type: "success",
            message: "Data berhasil ditambahkan!",
          })
          router.reload()
        }, 2000)
      })
      .catch((error) => {
        setName("")
        setDivisionId("")
        setScheudleId("")
        setSpesialis("")
        console.log(error)
      })
  }

  useEffect(() => {
    apiGetAllDivision().then((res) => {
      console.log(res)
      setDivisions(res)
    })
  }, [])

  useEffect(() => {
    apiGetAllScheudle().then((res) => {
      console.log(res)
      setScheudles(res)
    })
  }, [])

  return (
    <PageAdmin>
      <session className="flex flex-col items-center mt-20">
        <p className="text-3xl text-secondery">Form Tambah Dokter</p>
        <form
          className="w-1/2 p-5 shadow-xl bg-slate-100 rounded-xl"
          onSubmit={handleSubmit}
        >
          {status && (
            <Alert severity={status.type === "success" ? "success" : "danger"}>
              {status.message}
            </Alert>
          )}
          <InputWithTitle
            title="Nama"
            placeholder="Masukan nama dokter"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="block mt-2 mb-2 text-sm font-semibold lg:text-lg text-secondary">
            Pilih Divisi
          </p>
          <select
            className="rounded-md border-secondary"
            value={divisionId}
            onChange={(e) => setDivisionId(e.target.value)}
          >
            {divisions.map((division) => (
              <option key={division.id} value={division.id}>
                {division.name}
              </option>
            ))}
          </select>
          <p className="block mt-2 mb-2 text-sm font-semibold lg:text-lg text-secondary">
            Pilih Jadwal
          </p>
          <select
            className="rounded-md border-secondary"
            value={scheudleId}
            onChange={(e) => setScheudleId(e.target.value)}
          >
            {scheudles.map((scheudle) => (
              <option key={scheudle.id} value={scheudle.id}>
                {scheudle.timing}
              </option>
            ))}
          </select>
          <InputWithTitle
            title="Spesialis"
            placeholder="Masukan spesialis ..."
            value={spesialis}
            onChange={(e) => setSpesialis(e.target.value)}
          />
          <div className="flex justify-center mt-12 space-x-4">
            <button
              type="submit"
              className="w-4/12 py-3 text-white transition-all duration-300 bg-secondary rounded-xl hover:bg-primary "
            >
              Submit
            </button>
          </div>
        </form>
      </session>
    </PageAdmin>
  )
}

export default Add
