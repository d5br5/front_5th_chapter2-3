import { Button } from "@/shared/ui"
import { ThumbsUp } from "lucide-react"
import { ComponentProps } from "react"

interface CommentLikeButtonProps extends ComponentProps<typeof Button> {
  likes: number
}

export const CommentLikeButton = ({ likes, ...props }: CommentLikeButtonProps) => {
  return (
    <Button variant="ghost" size="sm" {...props}>
      <ThumbsUp className="w-3 h-3" />
      <span className="ml-1 text-xs">{likes}</span>
    </Button>
  )
}
