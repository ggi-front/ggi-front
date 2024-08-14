import axios from "axios"

export default async function getSido() {
  try {
    const res = await axios.get(`/ggi/api/location/area/sds`)

    if (res.data.success) {
      return res.data.data 
    }
    return res
  } catch (error) {
    console.error(error)
  }
}