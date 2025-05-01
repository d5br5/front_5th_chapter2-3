export const deleteComment = async (commentId: number) => {
  const response = await fetch(`/api/comments/${commentId}`, {
    method: "DELETE",
  })
  return await response.json()
}
