import { OpenPostAddDialog } from "@/features/post/open-add-dialog"
import { CardHeader, CardTitle } from "@/shared/ui"

export const AdminHeader = () => {
  return (
    <CardHeader>
      <CardTitle className="flex items-center justify-between">
        <span>게시물 관리자</span>
        <OpenPostAddDialog />
      </CardTitle>
    </CardHeader>
  )
}
