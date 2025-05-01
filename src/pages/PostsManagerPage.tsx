import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../shared/ui"

import { UserModal } from "../components/UserModal"
import { UserPost, useUserPosts } from "../hooks/useUserPosts"
import { PostRow } from "../components/PostRow"
import { AddCommentDialog } from "../components/AddCommentDialog"
import { EditPostDialog } from "../components/dialog/EditPostDialog"
import { EditCommentDialog } from "../components/dialog/EditCommentDialog"
import { AddPostDialog } from "../components/dialog/AddPostDialog"
import { AddPostButton } from "../components/AddPostButton"
import { PostDetailDialog } from "../components/dialog/PostDetailDialog"
import { useUpdateURL } from "../hooks/useUpdateURL"
import { TagSelector } from "../components/selector/TagSelector"
import { SearchInput } from "../components/SearchInput"
import { LimitSelector } from "../components/selector/LimitSelector"
import { Pagination } from "../components/selector/Pagination"
import { SortBySelector } from "../components/selector/SortBySelector"
import { SortOrderSelector } from "../components/selector/SortOrderSelector"

const PostsManager = () => {
  // 상태 관리
  const { data, isLoading } = useUserPosts()

  useUpdateURL()

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>게시물 관리자</span>
          <AddPostButton />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {/* 검색 및 필터 컨트롤 */}
          <div className="flex gap-4">
            <SearchInput />
            <TagSelector />
            <SortBySelector />
            <SortOrderSelector />
          </div>

          {/* 게시물 테이블 */}
          {isLoading ? (
            <div className="flex justify-center p-4">로딩 중...</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">ID</TableHead>
                  <TableHead>제목</TableHead>
                  <TableHead className="w-[150px]">작성자</TableHead>
                  <TableHead className="w-[150px]">반응</TableHead>
                  <TableHead className="w-[150px]">작업</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>{data?.posts.map((post: UserPost) => <PostRow key={post.id} post={post} />)}</TableBody>
            </Table>
          )}

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
