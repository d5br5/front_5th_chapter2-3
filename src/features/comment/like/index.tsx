import { likeComment } from "@/entity/comment/api/likeComment"
import { Comment } from "@/entity/comment/model/types"
import { CommentLikeButton } from "@/entity/comment/ui/LikeButton"
import { useMutation } from "@tanstack/react-query"

export const CommentLike = ({ comment }: { comment: Comment }) => {
  const { mutate } = useMutation({
    mutationFn: () => likeComment(comment.id, comment.likes + 1),
    onSuccess: (data) => {
      // TODO: 댓글 좋아요 업데이트
      console.log(data)
      //     setComments((prev) => ({
      //       ...prev,
      //       [postId]: prev[postId].map((comment) =>
      //         comment.id === data.id ? { ...data, likes: comment.likes + 1 } : comment,
      //       ),
      //     }))
    },
    onError: (error) => {
      console.error("댓글 좋아요 오류:", error)
    },
  })

  return <CommentLikeButton likes={comment.likes} onClick={() => mutate()} />
}
