import { API_BASE_PATH } from "@/app/config/fetch"
import { NewPost } from "../model/types"

export const addPost = async (post: NewPost) => {
  const response = await fetch(`${API_BASE_PATH}/posts/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  })
  const data = await response.json()
  return data
}
