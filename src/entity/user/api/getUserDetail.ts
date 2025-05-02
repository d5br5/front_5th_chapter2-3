import axios from "axios"
import { UserDetail } from "../model/types"

export const getUserDetail = async (userId: number) => {
  const res = await axios.get<UserDetail>(`/api/users/${userId}`)
  return res.data
}
