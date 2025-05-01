import { Edit2 } from "lucide-react"

import { Comment } from "@/entity/comment/model/types"
import { Button } from "@/shared/ui"

export const CommentEditButton = ({ comment }: { comment: Comment }) => {
  return (
    <Button
      variant="ghost"
      size="sm"
      // onClick={() => {
      //   setSelectedComment(comment)
      //   setShowEditCommentDialog(true)
      // }}
    >
      <Edit2 className="w-3 h-3" />
    </Button>
  )
}
