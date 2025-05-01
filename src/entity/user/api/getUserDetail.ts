import axios from "axios"
import { UserDetail } from "../model/types"

export const getUserDetail = async (userId: string) => {
  const res = await axios.get<UserDetail>(`/api/users/${userId}`)
  return res.data
}
