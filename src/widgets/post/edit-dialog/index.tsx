import { useSelectedPost } from "@/entity/post/model/selectedPost"
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Input, Textarea } from "@/shared/ui"
import { useDialogStore } from "@/features/dialog/model/store"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { editPost } from "@/entity/post/api/editPost"
import { GetPostsResponse } from "@/entity/post/model/types"

export const EDIT_POST_DIALOG = "EDIT_POST_DIALOG"

export const EditPostDialog = () => {
  const queryClient = useQueryClient()
  const { selectedPost, setSelectedPost } = useSelectedPost()
  const { isDialogOpen, setDialogOpen, closeDialog } = useDialogStore()

  const mutation = useMutation({
    mutationFn: (postId: number) => {
      return editPost(postId, selectedPost)
    },
    onSuccess: (data) => {
      closeDialog(EDIT_POST_DIALOG)
      // 기존 게시물 목록 수정
      queryClient.setQueriesData({ queryKey: ["posts"] }, (old: GetPostsResponse) => {
        if (!old) return
        return {
          ...old,
          posts: old.posts.map((post) => (post.id === data.id ? data : post)),
        }
      })
    },
    onError: (error) => {
      console.error("게시물 수정 오류:", error)
    },
  })

  if (!selectedPost) return null

  return (
    <Dialog open={isDialogOpen(EDIT_POST_DIALOG)} onOpenChange={(open) => setDialogOpen(EDIT_POST_DIALOG, open)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>게시물 수정</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="제목"
            value={selectedPost?.title || ""}
            onChange={(e) => setSelectedPost({ ...selectedPost, title: e.target.value })}
          />
          <Textarea
            rows={15}
            placeholder="내용"
            value={selectedPost?.body || ""}
            onChange={(e) => setSelectedPost({ ...selectedPost, body: e.target.value })}
          />
          <Button onClick={() => mutation.mutate(selectedPost.id)}>게시물 업데이트</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
