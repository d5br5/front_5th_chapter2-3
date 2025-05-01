import { useComments } from "@/entity/comment/model/useComments"
import { CommentAddButton } from "@/features/comment/add-button"
import { CommentDeleteButton } from "@/features/comment/delete-button"
import { CommentEditButton } from "@/features/comment/edit-button"
import { CommentLikeButton } from "@/features/comment/like-button"
import { highlightText } from "@/shared/lib/highlightText"
import { useSearchQueryStore } from "@/features/filter/search/model/store"

interface CommentListProps {
  postId: number
}

export const CommentList = ({ postId }: CommentListProps) => {
  const { data: comments } = useComments(postId)
  const { searchQuery } = useSearchQueryStore()

  if (!comments) return null

  return (
    <div className="mt-2">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">댓글</h3>
        <CommentAddButton />
      </div>
      <div className="space-y-1">
        {comments.comments.map((comment) => (
          <div key={comment.id} className="flex items-center justify-between text-sm border-b pb-1">
            <div className="flex items-center space-x-2 overflow-hidden">
              <span className="font-medium truncate">{comment.user.username}:</span>
              <span className="truncate">{highlightText(comment.body, searchQuery)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <CommentLikeButton comment={comment} />
              <CommentEditButton comment={comment} />
              <CommentDeleteButton comment={comment} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
