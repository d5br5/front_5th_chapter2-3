import { API_BASE_PATH } from "@/app/config/fetch"

export const deleteComment = async (commentId: number) => {
  const response = await fetch(`${API_BASE_PATH}/comments/${commentId}`, {
    method: "DELETE",
  })
  return await response.json()
}
