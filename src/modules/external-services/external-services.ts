// LLAMADAS AXIOS A  SERVICIOS DE AUTH
import axios from "axios"

export const loging = async (data: any) => {
  try {
    const response = await axios.post('/login', data)
    return response
  } catch (error) {
    console.error("🚀 ~ file: external-services.ts:8 ~ loging ~ error", error)
    return null
  }
}