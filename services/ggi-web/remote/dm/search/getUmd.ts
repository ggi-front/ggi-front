import axios from "axios"

export default async function getUmd(sd: string, sgg: string) {
  try {
    const res = await axios.get(`/ggi/api/location/area/${sd}/${sgg}/umds`)

    if (res.data.success) {
      return res.data.data 
    }
    return res
  } catch (error) {
    console.error(error)
  }
}