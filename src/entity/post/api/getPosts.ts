import axios from "axios"
import { GetPostsResponse } from "../model/types"

export const getPosts = async (limit: number, skip: number) => {
  const res = await axios.get<GetPostsResponse>(`/api/posts?limit=${limit}&skip=${skip}`)
  return res.data
}
