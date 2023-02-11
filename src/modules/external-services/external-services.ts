// LLAMADAS AXIOS A  SERVICIOS DE AUTH
import axios from "axios"

export const userRecordController = async (user: any) => {
  try {
    const response = await axios.post('/users/create', user)
    return response
  } catch (error) {
    console.error("🚀 ~ file: external-services.ts:10 ~ userRecordController ~ error", error)
    return null
  }
}

export const loging = async (data: any) => {
  try {
    const response = await axios.post('/users/login', data)
    //    console.error("🚀 ~ file: external-services.ts:8 ~ loging ~ response", response)
    return response
  } catch (error) {
    console.error("🚀 ~ file: external-services.ts:21 ~ loging ~ error", error)
    return null
  }
}

export const getUsers = async () => {
  try {
    const response = await axios.get('/users/')
    return response
  } catch (error) {
    console.error("🚀 ~ file: external-services.ts:31 ~ getUsers ~ error", error)
    return null
  }
}

export const getUserById = async (id: string) => {
  try {
    const response = await axios.get(`/users/${id}`)
    return response
  } catch (error) {
    console.error("🚀 ~ file: external-services.ts:41 ~ getUserById ~ error", error)
    return null
  }
}

export const updateUserById = async (user: any) => {
  try {
    const { id, account_name, firstName, lastName, email } = user;
    const response = await axios.put(`/users/${id}`, { account_name, firstName, lastName, email })
    return response
  } catch (error) {
    console.error("🚀 ~ file: external-services.ts:52 ~ updateUserById ~ error", error)
    return null
  }
}

//-------------------- status = "PENDING" | "ACTIVE" | "INACTIVE"
export const changeStateByAccountName = async (account_name: string, status: string) => {
  try {
    const response = await axios.put(`/users/state/${account_name}`, { status })
    return response
  } catch (error) {
    console.error("🚀 ~ file: external-services.ts:63 ~ changeStateByAccountName ~ error", error)
    return null
  }
}

//  ----------------- access =  "SUDO" | "ADMIN" | "EDITOR" | "USER" | "VISITOR"
export const changeRoleByAccountName = async (account_name: string, access: string) => {
  try {
    const response = await axios.put(`/users/role/${account_name}`, { access })
    return response
  } catch (error) {
    console.error("🚀 ~ file: external-services.ts:74 ~ changeRoleByAccountName ~ error", error)
    return null
  }
}

export const deleteUserById = async (id: string) => {
  try {
    const response = await axios.delete(`/users/${id}`) 
    return response
  } catch (error) {
    console.error("🚀 ~ file: external-services.ts:84 ~ deleteUserById ~ error", error)
    return null
  }
}

/*    ----funcion anonima para agilizar---

export const xxxxxx = async (XXX:any) => {
  try {
    const response = await axios 
    return response
  } catch (error) {
    return null
  }
}

*/