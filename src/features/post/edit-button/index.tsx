import { useSelectedPost } from "@/entity/post/model/selectedPost"
import { UserPost } from "@/entity/post/model/useUserPosts"
import { useDialogStore } from "@/features/dialog/model/store"
import { Button } from "@/shared/ui"
import { Edit2 } from "lucide-react"
import { EDIT_POST_DIALOG } from "../edit-dialog/EditPostDialog"

export const PostEditButton = ({ post }: { post: UserPost }) => {
  const { setDialogOpen } = useDialogStore()
  const { setSelectedPost } = useSelectedPost()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        setSelectedPost(post)
        setDialogOpen(EDIT_POST_DIALOG, true)
      }}
    >
      <Edit2 className="w-4 h-4" />
    </Button>
  )
}
