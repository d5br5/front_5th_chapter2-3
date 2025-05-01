import { Comment } from "@/entity/comment/model/types"
import { Button } from "@/shared/ui"
import { Trash2 } from "lucide-react"

export const CommentDeleteButton = ({ comment }: { comment: Comment }) => {
  // // 댓글 삭제
  // const deleteComment = async (id, postId) => {
  //   try {
  //     await fetch(`/api/comments/${id}`, {
  //       method: "DELETE",
  //     })
  //     setComments((prev) => ({
  //       ...prev,
  //       [postId]: prev[postId].filter((comment) => comment.id !== id),
  //     }))
  //   } catch (error) {
  //     console.error("댓글 삭제 오류:", error)
  //   }
  // }

  return (
    <Button
      variant="ghost"
      size="sm"
      // onClick={() => deleteComment(comment.id, postId)}
    >
      <Trash2 className="w-3 h-3" />
    </Button>
  )
}
