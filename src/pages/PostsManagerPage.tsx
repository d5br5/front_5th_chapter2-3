import { Card, CardContent } from "@/shared/ui"

import { UserModal } from "../components/UserModal"
import { AddCommentDialog } from "../components/AddCommentDialog"
import { EditPostDialog } from "../components/dialog/EditPostDialog"
import { EditCommentDialog } from "../components/dialog/EditCommentDialog"
import { AddPostDialog } from "../components/dialog/AddPostDialog"
import { PostDetailDialog } from "../components/dialog/PostDetailDialog"
import { useUpdateURL } from "../hooks/useUpdateURL"
import { LimitSelector } from "../components/selector/LimitSelector"
import { Pagination } from "../components/selector/Pagination"

import { PostTable } from "@/components/PostTable"
import { AdminHeader } from "@/widgets/admin/ui/Header"
import { PostFilter } from "@/widgets/admin/ui/PostFilter"

const PostsManager = () => {
  useUpdateURL()

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <AdminHeader />
      <CardContent>
        <div className="flex flex-col gap-4">
          <PostFilter />
          <PostTable />

          {/* 페이지네이션 */}
          <div className="flex justify-between items-center">
            <LimitSelector />
            <Pagination />
          </div>
        </div>
      </CardContent>

      {/* 게시물 추가 대화상자 */}
      <AddPostDialog />
      {/* 게시물 수정 대화상자 */}
      <EditPostDialog />
      {/* 댓글 추가 대화상자 */}
      <AddCommentDialog />
      {/* 댓글 수정 대화상자 */}
      <EditCommentDialog />
      {/* 게시물 상세 대화상자 */}
      <PostDetailDialog />
      <UserModal />
    </Card>
  )
}

export default PostsManager
