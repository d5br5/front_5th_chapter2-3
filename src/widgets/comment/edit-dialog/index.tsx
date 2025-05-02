import { useMutation, useQueryClient } from "@tanstack/react-query"

import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Textarea } from "@/shared/ui"
import { useDialogStore } from "@/features/dialog/model/store"
import { useSelectedComment } from "@/entity/comment/model/selectedComment"
import { useEditComment } from "@/features/comment/edit/model/useEditComment"
import { editComment } from "@/entity/comment/api/editComment"
import { GetCommentsResponse } from "@/entity/comment/model/types"

export const EDIT_COMMENT_DIALOG = "EDIT_COMMENT_DIALOG"

export const EditCommentDialog = () => {
  const queryClient = useQueryClient()
  const { isDialogOpen, setDialogOpen, closeDialog } = useDialogStore()
  const { selectedComment, setSelectedComment } = useSelectedComment()
  const { body, setBody } = useEditComment()

  const mutation = useMutation({
    mutationFn: (commentId: number) => {
      return editComment(commentId, body)
    },
    onSuccess: (data) => {
      setSelectedComment(null)
      closeDialog(EDIT_COMMENT_DIALOG)
      // 댓글 목록 수정
      queryClient.setQueryData(["comments", selectedComment?.postId], (old: GetCommentsResponse) => {
        if (!old) return
        return {
          ...old,
          comments: old.comments.map((c) => (c.id === data.id ? data : c)),
        }
      })
    },
    onError: (error) => {
      console.error("댓글 수정 오류:", error)
    },
  })

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
