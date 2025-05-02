import { API_BASE_PATH } from "@/app/config/fetch"

export const editComment = async (commentId: number, body: string) => {
  const response = await fetch(`${API_BASE_PATH}/comments/${commentId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ body }),
  })
  return await response.json()
}
