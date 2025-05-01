import { Button } from "../shared/ui"
import { Plus } from "lucide-react"
import { useDialogStore } from "../store/dialog"
import { ADD_POST_DIALOG } from "./dialog/AddPostDialog"

export const PostAddButton = () => {
  const { setDialogOpen } = useDialogStore()

  return (
    <Button onClick={() => setDialogOpen(ADD_POST_DIALOG, true)}>
      <Plus className="w-4 h-4 mr-2" />
      게시물 추가
    </Button>
  )
}
