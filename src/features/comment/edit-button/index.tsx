import { Edit2 } from "lucide-react"

import { Comment } from "@/entity/comment/model/types"
import { Button } from "@/shared/ui"
import { useDialogStore } from "@/features/dialog/model/store"
import { EDIT_COMMENT_DIALOG } from "../edit-dialog"
import { useSelectedComment } from "@/entity/comment/model/selectedComment"

export const CommentEditButton = ({ comment }: { comment: Comment }) => {
  const { setDialogOpen } = useDialogStore()
  const { setSelectedComment } = useSelectedComment()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        setSelectedComment(comment)
        setDialogOpen(EDIT_COMMENT_DIALOG, true)
      }}
    >
      <Edit2 className="w-3 h-3" />
    </Button>
  )
}
