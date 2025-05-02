import { API_BASE_PATH } from "@/app/config/fetch"

export const deletePost = async (id: number) => {
  const response = await fetch(`${API_BASE_PATH}/posts/${id}`, {
    method: "DELETE",
  })
  return await response.json()
}
