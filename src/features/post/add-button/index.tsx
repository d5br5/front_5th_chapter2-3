import { Plus } from "lucide-react"

import { Button } from "@/shared/ui"
import { useDialogStore } from "@/features/dialog/model/store"
import { ADD_POST_DIALOG } from "@/features/post/add-dialog"

export const PostAddButton = () => {
  const { setDialogOpen } = useDialogStore()

  return (
    <Button onClick={() => setDialogOpen(ADD_POST_DIALOG, true)}>
      <Plus className="w-4 h-4 mr-2" />
      게시물 추가
    </Button>
  )
}
