import { useState } from "react"
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Textarea } from "../../shared/ui"
import { useDialogStore } from "../../store/dialog"

export const ADD_COMMENT_DIALOG = "ADD_COMMENT_DIALOG"

export const AddCommentDialog = () => {
  const { isDialogOpen, setDialogOpen } = useDialogStore()
  const [newComment, setNewComment] = useState({ body: "", postId: null, userId: 1 })

  // 댓글 추가
  const addComment = async () => {
    try {
      const response = await fetch("/api/comments/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      })
      const data = await response.json()
      //   setComments((prev) => ({
      //     ...prev,
      //     [data.postId]: [...(prev[data.postId] || []), data],
      //   }))
      setDialogOpen(ADD_COMMENT_DIALOG, false)
      setNewComment({ body: "", postId: null, userId: 1 })
    } catch (error) {
      console.error("댓글 추가 오류:", error)
    }
  }

  return (
    <Dialog open={isDialogOpen(ADD_COMMENT_DIALOG)} onOpenChange={(open) => setDialogOpen(ADD_COMMENT_DIALOG, open)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 댓글 추가</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea
            placeholder="댓글 내용"
            value={newComment.body}
            onChange={(e) => setNewComment({ ...newComment, body: e.target.value })}
          />
          <Button onClick={addComment}>댓글 추가</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
