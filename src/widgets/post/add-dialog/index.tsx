import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Input, Textarea } from "@/shared/ui"
import { useDialogStore } from "@/features/dialog/model/store"
import { useNewPost } from "@/features/post/add/model/useNewPost"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addPost } from "@/entity/post/api/addPost"
import { GetPostsResponse } from "@/entity/post/model/types"

export const ADD_POST_DIALOG = "ADD_POST_DIALOG"

export const AddPostDialog = () => {
  const queryClient = useQueryClient()
  const { isDialogOpen, setDialogOpen, closeDialog } = useDialogStore()
  const { newPost, setNewPost, reset } = useNewPost()

  const mutation = useMutation({
    mutationFn: () => addPost(newPost),
    onSuccess: (data) => {
      closeDialog(ADD_POST_DIALOG)
      reset()
      // 기존 게시물 목록에 추가
      queryClient.setQueriesData({ queryKey: ["posts"] }, (old: GetPostsResponse) => {
        if (!old) return
        return {
          ...old,
          posts: [{ ...data, views: 0, tags: [], reactions: { likes: 0, dislikes: 0 } }, ...old.posts],
        }
      })
    },
    onError: (error) => {
      console.error("게시물 추가 오류:", error)
    },
  })

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
