import axios from "axios"
import { GetPostsResponse } from "../model/types"

export const getTagPosts = async (tag: string) => {
  const res = await axios.get<GetPostsResponse>(`/api/posts/tag/${tag}`)
  return res.data
}
