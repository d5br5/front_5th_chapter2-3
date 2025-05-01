import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Textarea } from "@/shared/ui"
import { useDialogStore } from "@/store/dialog"
import { useNewComment } from "../model/useNewComment"

export const ADD_COMMENT_DIALOG = "ADD_COMMENT_DIALOG"

export const AddCommentDialog = () => {
  const { isDialogOpen, setDialogOpen } = useDialogStore()
  const { newComment, setBody, mutation } = useNewComment()

  return (
    <Dialog open={isDialogOpen(ADD_COMMENT_DIALOG)} onOpenChange={(open) => setDialogOpen(ADD_COMMENT_DIALOG, open)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 댓글 추가</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea placeholder="댓글 내용" value={newComment.body} onChange={(e) => setBody(e.target.value)} />
          <Button onClick={() => mutation.mutate()}>댓글 추가</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
