import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addComment } from "@/entity/comment/api/addComment"
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Textarea } from "@/shared/ui"
import { useDialogStore } from "@/features/dialog/model/store"
import { useNewComment } from "@/features/comment/add/model/useNewComment"
import { GetCommentsResponse } from "@/entity/comment/model/types"
import { useSelectedPost } from "@/entity/post/model/selectedPost"

export const ADD_COMMENT_DIALOG = "ADD_COMMENT_DIALOG"

export const AddCommentDialog = () => {
  const queryClient = useQueryClient()
  const { selectedPost } = useSelectedPost()
  const { isDialogOpen, setDialogOpen, closeDialog } = useDialogStore()
  const { newComment, setBody, reset } = useNewComment()

  const mutation = useMutation({
    mutationFn: () => addComment({ ...newComment, postId: selectedPost?.id ?? 1 }),
    onSuccess: (data) => {
      reset()
      closeDialog(ADD_COMMENT_DIALOG)
      queryClient.setQueryData(["comments", data.postId], (old: GetCommentsResponse) => {
        if (!old) return
        return {
          ...old,
          comments: [data, ...old.comments],
        }
      })
    },
    onError: (error) => {
      console.error("댓글 추가 오류:", error)
    },
  })

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
