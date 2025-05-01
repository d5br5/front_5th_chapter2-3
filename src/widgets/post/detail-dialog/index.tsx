import { useDialogStore } from "@/store/dialog"
import { useSelectedPost } from "@/store/selectedPost"
import { useSearchQueryStore } from "@/store/searchQuery"
import { highlightText } from "@/shared/lib/highlightText"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui"

import { CommentList } from "@/widgets/comment/list"

export const POST_DETAIL_DIALOG = "POST_DETAIL_DIALOG"

export const PostDetailDialog = () => {
  const { isDialogOpen, setDialogOpen } = useDialogStore()
  const { selectedPost } = useSelectedPost()
  const { searchQuery } = useSearchQueryStore()

  if (!selectedPost) return null

  return (
    <Dialog open={isDialogOpen(POST_DETAIL_DIALOG)} onOpenChange={(open) => setDialogOpen(POST_DETAIL_DIALOG, open)}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{highlightText(selectedPost.title, searchQuery)}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>{highlightText(selectedPost.body, searchQuery)}</p>
          <CommentList postId={selectedPost.id} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
