import { ComponentProps } from "react"
import { Plus } from "lucide-react"

import { Button } from "@/shared/ui"

export const OpenPostAddDialogButton = (props: ComponentProps<typeof Button>) => {
  return (
    <Button {...props}>
      <Plus className="w-4 h-4 mr-2" />
      게시물 추가
    </Button>
  )
}
