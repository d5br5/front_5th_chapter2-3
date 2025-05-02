import axios from "axios"
import { GetPostsResponse } from "../model/types"
import { API_BASE_PATH } from "@/app/config/fetch"

export const getPosts = async (limit: number, skip: number) => {
  const res = await axios.get<GetPostsResponse>(`${API_BASE_PATH}/posts?limit=${limit}&skip=${skip}`)
  return res.data
}
