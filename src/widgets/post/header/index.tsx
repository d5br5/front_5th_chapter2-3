import { PostAddButton } from "@/features/post/add-button"
import { CardHeader, CardTitle } from "@/shared/ui"

export const AdminHeader = () => {
  return (
    <CardHeader>
      <CardTitle className="flex items-center justify-between">
        <span>게시물 관리자</span>
        <PostAddButton />
      </CardTitle>
    </CardHeader>
  )
}
