import axios from "axios"
import { GetUserListResponse } from "../model/types"
import { API_BASE_PATH } from "@/app/config/fetch"

export const getUsers = async () => {
  const res = await axios.get<GetUserListResponse>(`${API_BASE_PATH}/users?limit=0&select=username,image`)
  return res.data
}
