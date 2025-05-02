import { API_BASE_PATH } from "@/app/config/fetch"
import { Post } from "../model/types"

export const editPost = async (postId: number, post: Post) => {
  const response = await fetch(`${API_BASE_PATH}/posts/${postId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  })
  return await response.json()
}
