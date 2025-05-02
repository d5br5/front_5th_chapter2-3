import axios from "axios"
import { GetPostsResponse } from "../model/types"
import { API_BASE_PATH } from "@/app/config/fetch"

export const searchPosts = async (query: string) => {
  const res = await axios.get<GetPostsResponse>(`${API_BASE_PATH}/posts/search?q=${query}`)
  return res.data
}
