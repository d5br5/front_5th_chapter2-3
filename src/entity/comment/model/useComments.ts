import { useQuery } from "@tanstack/react-query"
import { getComments } from "@/entity/comment/api/getComments"

export const useComments = (postId: number) => {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: async () => {
      try {
        return await getComments(postId)
      } catch (error) {
        console.error("댓글 가져오기 오류:", error)
        return
      }
    },
  })
}
