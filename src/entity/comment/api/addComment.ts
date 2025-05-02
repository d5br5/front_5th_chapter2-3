import { NewComment } from "../model/types"

export const addComment = async (comment: NewComment) => {
  const response = await fetch(`/api/comments/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  })
  return await response.json()
}
