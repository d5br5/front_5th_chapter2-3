import { useUserPosts } from "../entity/post/model/useUserPosts"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "../shared/ui"
import { PostRow } from "./PostRow"

export const PostTable = () => {
  const { data, isLoading } = useUserPosts()

  return isLoading ? (
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
      <TableBody>{data?.posts.map((post) => <PostRow key={post.id} post={post} />)}</TableBody>
    </Table>
  )
}
