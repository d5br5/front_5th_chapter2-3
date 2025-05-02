import { useSelectedPost } from "@/entity/post/model/selectedPost"
import { UserPost } from "@/entity/post/model/useUserPosts"
import { useDialogStore } from "@/features/dialog/model/store"
import { EDIT_POST_DIALOG } from "../../../widgets/post/edit-dialog"
import { OpenPostEditDialogButton } from "@/entity/post/ui/OpenEditDialogButton"

export const PostEditButton = ({ post }: { post: UserPost }) => {
  const { openDialog } = useDialogStore()
  const { setSelectedPost } = useSelectedPost()

  return (
    <OpenPostEditDialogButton
      onClick={() => {
        setSelectedPost(post)
        openDialog(EDIT_POST_DIALOG)
      }}
    />
  )
}
