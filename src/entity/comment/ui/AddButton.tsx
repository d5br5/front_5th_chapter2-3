import { Button } from "@/shared/ui"
import { Plus } from "lucide-react"
import { ComponentProps } from "react"

export const CommentAddButton = (props: ComponentProps<typeof Button>) => {
  return (
    <Button size="sm" {...props}>
      <Plus className="w-3 h-3 mr-1" />
      댓글 추가
    </Button>
  )
}
