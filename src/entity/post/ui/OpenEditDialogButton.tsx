import { ComponentProps } from "react"
import { Button } from "@/shared/ui"
import { Edit2 } from "lucide-react"

export const OpenPostEditDialogButton = (props: ComponentProps<typeof Button>) => {
  return (
    <Button variant="ghost" size="sm" {...props}>
      <Edit2 className="w-4 h-4" />
    </Button>
  )
}
