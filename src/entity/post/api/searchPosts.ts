import axios from "axios"
import { GetPostsResponse } from "../model/types"

export const searchPosts = async (query: string) => {
  const res = await axios.get<GetPostsResponse>(`/api/posts/search?q=${query}`)
  return res.data
}
