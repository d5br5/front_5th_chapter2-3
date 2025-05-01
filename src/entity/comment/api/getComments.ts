import axios from "axios"
import { GetCommentsResponse } from "../model/types"

export const getComments = async (postId: number) => {
  const res = await axios.get<GetCommentsResponse>(`/api/comments/post/${postId}`)
  return res.data
}
