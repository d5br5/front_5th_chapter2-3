import axios from "axios"
import { GetPostsResponse } from "../model/types"
import { API_BASE_PATH } from "@/app/config/fetch"

export const getTagPosts = async (tag: string) => {
  const res = await axios.get<GetPostsResponse>(`${API_BASE_PATH}/posts/tag/${tag}`)
  return res.data
}
