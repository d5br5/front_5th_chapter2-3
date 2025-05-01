import { PostAddButton } from "@/components/PostAddButton"
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
