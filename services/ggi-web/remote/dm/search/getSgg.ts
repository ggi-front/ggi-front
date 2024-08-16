import axios from "axios"

export default async function getSgg(sd: string) {
  try {
    const res = await axios.get(`/ggi/api/location/area/${sd}/sggs`)

    if (res.data.success) {
      return res.data.data 
    }
    return res
  } catch (error) {
    console.error(error)
  }
}