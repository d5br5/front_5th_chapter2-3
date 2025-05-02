import { Card, CardContent } from "@/shared/ui"

import { AddCommentDialog } from "../widgets/comment/add-dialog"
import { EditPostDialog } from "../widgets/post/edit-dialog"

import { AddPostDialog } from "../widgets/post/add-dialog"
import { PostDetailDialog } from "../widgets/post/detail-dialog"
import { useUpdateURL } from "../features/url/model/useUpdateURL"

import { PostTable } from "@/widgets/post/table/PostTable"
import { AdminHeader } from "@/widgets/post/header"
import { PostFilter } from "@/widgets/post/filter"
import { AdminNav } from "@/widgets/post/footer"
import { UserModal } from "@/features/user/detail-dialog"
import { EditCommentDialog } from "@/widgets/comment/edit-dialog"

const PostsManager = () => {
  useUpdateURL()

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <AdminHeader />
      <CardContent>
        <div className="flex flex-col gap-4">
          <PostFilter />
          <PostTable />
          <AdminNav />
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
