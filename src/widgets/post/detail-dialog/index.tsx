import { useSelectedPost } from "@/entity/post/model/selectedPost"
import { useDialogStore } from "@/features/dialog/model/store"

import { highlightText } from "@/shared/lib/highlightText"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui"

import { CommentList } from "@/widgets/comment/list"
import { useSearchStore } from "@/features/search/model/useSearchStore"
export const POST_DETAIL_DIALOG = "POST_DETAIL_DIALOG"

export const PostDetailDialog = () => {
  const { isDialogOpen, setDialogOpen } = useDialogStore()
  const { selectedPost } = useSelectedPost()
  const { searchQuery } = useSearchStore()

  if (!selectedPost) return null

  return (
    <Dialog open={isDialogOpen(POST_DETAIL_DIALOG)} onOpenChange={(open) => setDialogOpen(POST_DETAIL_DIALOG, open)}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{highlightText(selectedPost.title, searchQuery)}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 w-full max-w-md">
          <p>{highlightText(selectedPost.body, searchQuery)}</p>
          <CommentList postId={selectedPost.id} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
