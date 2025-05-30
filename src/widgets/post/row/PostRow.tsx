import { MessageSquare, ThumbsDown, ThumbsUp } from "lucide-react"
import { Button, TableCell, TableRow } from "@/shared/ui"

import { useSearchStore } from "@/features/search/model/useSearchStore"
import { highlightText } from "@/shared/lib/highlightText"

import { useDialogStore } from "@/features/dialog/model/store"

import { POST_DETAIL_DIALOG } from "@/widgets/post/detail-dialog"
import { UserPost } from "@/entity/post/model/useUserPosts"
import { useSelectedPost } from "@/entity/post/model/selectedPost"
import { useSelectedUser } from "@/entity/user/model/selectedUser"
import { PostEditButton } from "@/features/post/open-edit-dialog"
import { TagBadge } from "@/features/tag/badge"
import { PostDelete } from "@/features/post/delete"

interface PostRowProps {
  post: UserPost
}

export const PostRow = ({ post }: PostRowProps) => {
  const { searchQuery } = useSearchStore()
  const { setSelectedPost } = useSelectedPost()
  const { setDialogOpen } = useDialogStore()
  const { setSelectedUser } = useSelectedUser()

  // 게시물 상세 보기
  const openPostDetail = () => {
    setSelectedPost(post)
    setDialogOpen(POST_DETAIL_DIALOG, true)
  }

  return (
    <TableRow key={post.id}>
      <TableCell>{post.id}</TableCell>
      <TableCell>
        <div className="space-y-1">
          <div>{highlightText(post.title, searchQuery)}</div>
          <div className="flex flex-wrap gap-1">{post.tags?.map((tag) => <TagBadge key={tag} tag={tag} />)}</div>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setSelectedUser(post.author)}>
          <img src={post.author?.image} alt={post.author?.username} className="w-8 h-8 rounded-full" />
          <span>{post.author?.username}</span>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <ThumbsUp className="w-4 h-4" />
          <span>{post.reactions?.likes || 0}</span>
          <ThumbsDown className="w-4 h-4" />
          <span>{post.reactions?.dislikes || 0}</span>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={openPostDetail}>
            <MessageSquare className="w-4 h-4" />
          </Button>
          <PostEditButton post={post} />
          <PostDelete postId={post.id} />
        </div>
      </TableCell>
    </TableRow>
  )
}
