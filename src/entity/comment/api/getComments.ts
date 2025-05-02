import axios from "axios"
import { GetCommentsResponse } from "../model/types"
import { API_BASE_PATH } from "@/app/config/fetch"

export const getComments = async (postId: number) => {
  const res = await axios.get<GetCommentsResponse>(`${API_BASE_PATH}/comments/post/${postId}`)
  return res.data
}
