import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { User } from "../entity/user/model/useUsers"

export interface Comment {
  body: string
  id: number
  likes: number
  postId: number
  user: User
}

interface CommentResponse {
  limit: number
  skip: number
  total: number
  comments: Comment[]
}

export const useComments = (postId: number) => {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: async () => {
      try {
        const res = await axios.get<CommentResponse>(`/api/comments/post/${postId}`)
        return res.data
      } catch (error) {
        console.error("댓글 가져오기 오류:", error)
        return { comments: [] }
      }
    },
  })
}
