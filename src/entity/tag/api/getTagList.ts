import axios from "axios"
import { Tag } from "../model/types"
import { API_BASE_PATH } from "@/app/config/fetch"

export const getTagList = async () => {
  try {
    const res = await axios.get<Tag[]>(`${API_BASE_PATH}/posts/tags`)
    return res.data
  } catch (error) {
    console.error("태그 가져오기 오류:", error)
  }
}
