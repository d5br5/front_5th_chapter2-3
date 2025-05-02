import { CommentAddButton } from "@/entity/comment/ui/AddButton"
import { useDialogStore } from "@/features/dialog/model/store"
import { ADD_COMMENT_DIALOG } from "@/widgets/comment/add-dialog"

export const OpenCommentAddDialog = () => {
  const { openDialog } = useDialogStore()
  return <CommentAddButton onClick={() => openDialog(ADD_COMMENT_DIALOG)} />
}
