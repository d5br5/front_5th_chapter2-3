import { Comment } from "@/entity/comment/model/types"
import { useDialogStore } from "@/features/dialog/model/store"
import { EDIT_COMMENT_DIALOG } from "@/widgets/comment/edit-dialog"
import { useSelectedComment } from "@/entity/comment/model/selectedComment"
import { OpenEditDialogButton } from "@/entity/comment/ui/OpenEditDialogButton"

export const OpenCommentEditDialog = ({ comment }: { comment: Comment }) => {
  const { openDialog } = useDialogStore()
  const { setSelectedComment } = useSelectedComment()

  return (
    <OpenEditDialogButton
      onClick={() => {
        setSelectedComment(comment)
        openDialog(EDIT_COMMENT_DIALOG)
      }}
    />
  )
}
