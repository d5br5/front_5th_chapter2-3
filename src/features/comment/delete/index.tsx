import { deleteComment } from "@/entity/comment/api/deleteComment"
import { Comment } from "@/entity/comment/model/types"
import { CommentDeleteButton } from "@/entity/comment/ui/DeleteButton"
import { useMutation } from "@tanstack/react-query"

export const CommentDelete = ({ comment, postId }: { comment: Comment; postId: number }) => {
  const { mutate } = useMutation({
    mutationFn: () => deleteComment(comment.id),
    onSuccess: () => {
      console.log(postId)
      // 기존 댓글 목록에서 제거
      //setComments((prev) => ({
      //       ...prev,
      //       [postId]: prev[postId].filter((comment) => comment.id !== id),
      //     }))
    },
    onError: (error) => {
      console.error("댓글 삭제 오류:", error)
    },
  })

  return <CommentDeleteButton onClick={() => mutate()} />
}
