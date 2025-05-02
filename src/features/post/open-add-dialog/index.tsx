import { useDialogStore } from "@/features/dialog/model/store"
import { ADD_POST_DIALOG } from "../add-dialog"
import { OpenPostAddDialogButton } from "@/entity/post/ui/OpenAddDialogButton"

export const OpenPostAddDialog = () => {
  const { openDialog } = useDialogStore()

  return <OpenPostAddDialogButton onClick={() => openDialog(ADD_POST_DIALOG)} />
}
