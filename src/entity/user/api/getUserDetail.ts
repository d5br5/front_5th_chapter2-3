import axios from "axios"
import { UserDetail } from "../model/types"
import { API_BASE_PATH } from "@/app/config/fetch"

export const getUserDetail = async (userId: number) => {
  const res = await axios.get<UserDetail>(`${API_BASE_PATH}/users/${userId}`)
  return res.data
}
