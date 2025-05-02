import { Button } from "@/shared/ui"
import { Trash2 } from "lucide-react"
import { ComponentProps } from "react"

export const PostDeleteButton = (props: ComponentProps<typeof Button>) => {
  return (
    <Button variant="ghost" size="sm" {...props}>
      <Trash2 className="w-4 h-4" />
    </Button>
  )
}
