import { Post } from "../model/types"

export const editPost = async (postId: number, post: Post) => {
  const response = await fetch(`/api/posts/${postId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  })
  return await response.json()
}
