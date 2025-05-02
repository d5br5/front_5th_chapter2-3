import { highlightText } from "@/shared/lib/highlightText"

import { useComments } from "@/entity/comment/model/useComments"
import { CommentDelete } from "@/features/comment/delete"
import { useSearchStore } from "@/features/search/model/useSearchStore"
import { OpenCommentEditDialog } from "@/features/comment/open-edit-dialog"
import { CommentLike } from "@/features/comment/like"
import { OpenCommentAddDialog } from "@/features/comment/open-add-dialog"

interface CommentListProps {
  postId: number
}

export const CommentList = ({ postId }: CommentListProps) => {
  const { data: comments } = useComments(postId)
  const { searchQuery } = useSearchStore()

  if (!comments) return null

  return (
    <div className="mt-2">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">댓글</h3>
        <OpenCommentAddDialog />
      </div>
      <div className="space-y-1">
        {comments.comments.map((comment) => (
          <div key={comment.id} className="flex items-center justify-between text-sm border-b pb-1">
            <div className="flex items-center space-x-2 overflow-hidden">
              <span className="font-medium truncate min-w-16">{comment.user.username}:</span>
              <span className="truncate">{highlightText(comment.body, searchQuery)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <CommentLike comment={comment} />
              <OpenCommentEditDialog comment={comment} />
              <CommentDelete comment={comment} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
