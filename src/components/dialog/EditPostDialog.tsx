import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Input, Textarea } from "../../shared/ui"
import { useDialogStore } from "../../store/dialog"
import { useSelectedPost } from "../../store/selectedPost"

const EDIT_POST_DIALOG = "EDIT_POST_DIALOG"

export const EditPostDialog = () => {
  const { selectedPost, setSelectedPost } = useSelectedPost()
  const { isDialogOpen, setDialogOpen } = useDialogStore()

  // 게시물 업데이트
  const updatePost = async () => {
    if (!selectedPost) return
    try {
      //   const response = await fetch(`/api/posts/${selectedPost.id}`, {
      //     method: "PUT",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(selectedPost),
      //   })
      //   const data = await response.json()
      //   setPosts(posts.map((post) => (post.id === data.id ? data : post)))
      setDialogOpen(EDIT_POST_DIALOG, false)
    } catch (error) {
      console.error("게시물 업데이트 오류:", error)
    }
  }

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
          <Button onClick={updatePost}>게시물 업데이트</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
