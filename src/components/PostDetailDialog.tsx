import { Edit2, Plus, ThumbsUp, Trash2 } from "lucide-react"
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle } from "../shared/ui"
import { useDialogStore } from "../store/dialog"
import { highlightText } from "../utils"
import { useSelectedPost } from "../store/selectedPost"
import { useSearchQueryStore } from "../store/searchQuery"
import { useComments } from "../hooks/useComments"

export const POST_DETAIL_DIALOG = "POST_DETAIL_DIALOG"

export const PostDetailDialog = () => {
  const { isDialogOpen, setDialogOpen } = useDialogStore()
  const { selectedPost } = useSelectedPost()
  const { searchQuery } = useSearchQueryStore()

  if (!selectedPost) return null

  return (
    <Dialog open={isDialogOpen(POST_DETAIL_DIALOG)} onOpenChange={(open) => setDialogOpen(POST_DETAIL_DIALOG, open)}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{highlightText(selectedPost.title, searchQuery)}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>{highlightText(selectedPost.body, searchQuery)}</p>
          <CommentList postId={selectedPost.id} />
        </div>
      </DialogContent>
    </Dialog>
  )
}

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
        <Button
          size="sm"
          // onClick={() => {
          //   setNewComment((prev) => ({ ...prev, postId }))
          //   setShowAddCommentDialog(true)
          // }}
        >
          <Plus className="w-3 h-3 mr-1" />
          댓글 추가
        </Button>
      </div>
      <div className="space-y-1">
        {comments.comments.map((comment) => (
          <div key={comment.id} className="flex items-center justify-between text-sm border-b pb-1">
            <div className="flex items-center space-x-2 overflow-hidden">
              <span className="font-medium truncate">{comment.user.username}:</span>
              <span className="truncate">{highlightText(comment.body, searchQuery)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                // onClick={() => likeComment(comment.id, postId)}
              >
                <ThumbsUp className="w-3 h-3" />
                <span className="ml-1 text-xs">{comment.likes}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                // onClick={() => {
                //   setSelectedComment(comment)
                //   setShowEditCommentDialog(true)
                // }}
              >
                <Edit2 className="w-3 h-3" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                // onClick={() => deleteComment(comment.id, postId)}
              >
                <Trash2 className="w-3 h-3" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
