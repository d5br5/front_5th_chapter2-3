import { likeComment } from "@/entity/comment/api/likeComment"
import { Comment, GetCommentsResponse } from "@/entity/comment/model/types"
import { CommentLikeButton } from "@/entity/comment/ui/LikeButton"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const CommentLike = ({ comment }: { comment: Comment }) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: () => likeComment(comment.id, comment.likes + 1),
    onSuccess: (data) => {
      // 댓글 좋아요 업데이트
      queryClient.setQueryData(["comments", comment.postId], (old: GetCommentsResponse) => {
        if (!old) return
        return {
          ...old,
          comments: old.comments.map((c) => (c.id === data.id ? { ...data, likes: comment.likes + 1 } : c)),
        }
      })
    },
    onError: (error) => {
      console.error("댓글 좋아요 오류:", error)
    },
  })

  return <CommentLikeButton likes={comment.likes} onClick={() => mutate()} />
}
