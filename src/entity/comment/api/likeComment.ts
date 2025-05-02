export const likeComment = async (commentId: number, likes: number) => {
  const response = await fetch(`/api/comments/${commentId}`, {
    method: "PATCH",
    body: JSON.stringify({ likes }),
  })
  return response.json()
}
