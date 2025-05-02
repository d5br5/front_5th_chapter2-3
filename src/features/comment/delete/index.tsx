import { deleteComment } from "@/entity/comment/api/deleteComment"
import { Comment, GetCommentsResponse } from "@/entity/comment/model/types"
import { CommentDeleteButton } from "@/entity/comment/ui/DeleteButton"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const CommentDelete = ({ comment }: { comment: Comment }) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: () => deleteComment(comment.id),
    onSuccess: () => {
      // 기존 댓글 목록에서 제거
      queryClient.setQueryData(["comments", comment.postId], (old: GetCommentsResponse) => {
        if (!old) return
        return {
          ...old,
          comments: old.comments.filter((c) => c.id !== comment.id),
        }
      })
    },
    onError: (error) => {
      console.error("댓글 삭제 오류:", error)
    },
  })

  return <CommentDeleteButton onClick={() => mutate()} />
}
