import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Input, Textarea } from "@/shared/ui"
import { useDialogStore } from "@/store/dialog"
import { useNewPost } from "./model/useNewPost"

export const ADD_POST_DIALOG = "ADD_POST_DIALOG"

export const AddPostDialog = () => {
  const { isDialogOpen, setDialogOpen } = useDialogStore()
  const { newPost, setNewPost, mutation } = useNewPost()

  return (
    <Dialog open={isDialogOpen(ADD_POST_DIALOG)} onOpenChange={(open) => setDialogOpen(ADD_POST_DIALOG, open)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 게시물 추가</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="제목"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <Textarea
            rows={30}
            placeholder="내용"
            value={newPost.body}
            onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          />
          <Input
            type="number"
            placeholder="사용자 ID"
            value={newPost.userId}
            onChange={(e) => setNewPost({ ...newPost, userId: Number(e.target.value) })}
          />
          <Button onClick={() => mutation.mutate()}>게시물 추가</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
