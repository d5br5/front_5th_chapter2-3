import { Button } from "@/shared/ui"
import { Edit2 } from "lucide-react"
import { ComponentProps } from "react"

export const OpenEditDialogButton = (props: ComponentProps<typeof Button>) => {
  return (
    <Button variant="ghost" size="sm" {...props}>
      <Edit2 className="w-3 h-3" />
    </Button>
  )
}
