import { Comment } from "@/entity/comment/model/types"
import { Button } from "@/shared/ui"
import { ThumbsUp } from "lucide-react"

export const CommentLikeButton = ({ comment }: { comment: Comment }) => {
  // // 댓글 좋아요
  // const likeComment = async (id, postId) => {
  //   try {
  //     const response = await fetch(`/api/comments/${id}`, {
  //       method: "PATCH",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ likes: comments[postId].find((c) => c.id === id).likes + 1 }),
  //     })
  //     const data = await response.json()
  //     setComments((prev) => ({
  //       ...prev,
  //       [postId]: prev[postId].map((comment) =>
  //         comment.id === data.id ? { ...data, likes: comment.likes + 1 } : comment,
  //       ),
  //     }))
  //   } catch (error) {
  //     console.error("댓글 좋아요 오류:", error)
  //   }
  // }

  return (
    <Button
      variant="ghost"
      size="sm"
      // onClick={() => likeComment(comment.id, postId)}
    >
      <ThumbsUp className="w-3 h-3" />
      <span className="ml-1 text-xs">{comment.likes}</span>
    </Button>
  )
}
