import { NewComment } from "../model/types"
import { API_BASE_PATH } from "@/app/config/fetch"

export const addComment = async (comment: NewComment) => {
  const response = await fetch(`${API_BASE_PATH}/comments/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  })
  return await response.json()
}
