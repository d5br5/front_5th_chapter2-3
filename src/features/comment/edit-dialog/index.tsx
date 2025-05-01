import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Textarea } from "@/shared/ui"
import { useDialogStore } from "@/features/dialog/model/store"
import { useSelectedComment } from "@/entity/comment/model/selectedComment"
import { useEditComment } from "./model/useEditComment"

export const EDIT_COMMENT_DIALOG = "EDIT_COMMENT_DIALOG"

export const EditCommentDialog = () => {
  const { isDialogOpen, setDialogOpen } = useDialogStore()
  const { selectedComment } = useSelectedComment()
  const { body, setBody, mutation } = useEditComment()

  if (!selectedComment) return null

  return (
    <Dialog open={isDialogOpen(EDIT_COMMENT_DIALOG)} onOpenChange={(open) => setDialogOpen(EDIT_COMMENT_DIALOG, open)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>댓글 수정</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea placeholder="댓글 내용" value={body} onChange={(e) => setBody(e.target.value)} />
          <Button onClick={() => mutation.mutate(selectedComment.id)}>댓글 업데이트</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
