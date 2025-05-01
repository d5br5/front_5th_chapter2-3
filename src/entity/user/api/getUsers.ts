import axios from "axios"
import { GetUserListResponse } from "../model/types"

export const getUsers = async () => {
  const res = await axios.get<GetUserListResponse>(`/api/users?limit=0&select=username,image`)
  return res.data
}
