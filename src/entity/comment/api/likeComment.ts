import { API_BASE_PATH } from "@/app/config/fetch"

export const likeComment = async (commentId: number, likes: number) => {
  const response = await fetch(`${API_BASE_PATH}/comments/${commentId}`, {
    method: "PATCH",
    body: JSON.stringify({ likes }),
  })
  return response.json()
}
