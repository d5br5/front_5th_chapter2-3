import axios from "axios"
import { Tag } from "../model/types"

export const getTagList = async () => {
  try {
    const res = await axios.get<Tag[]>("/api/posts/tags")
    return res.data
  } catch (error) {
    console.error("태그 가져오기 오류:", error)
  }
}
