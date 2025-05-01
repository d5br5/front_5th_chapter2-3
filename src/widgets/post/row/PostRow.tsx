import { Edit2, MessageSquare, ThumbsDown, ThumbsUp, Trash2 } from "lucide-react"
import { Button, TableCell, TableRow } from "@/shared/ui"
import { useSelectedPost } from "@/store/selectedPost"
import { useSearchQueryStore } from "@/store/searchQuery"
import { highlightText } from "@/shared/lib/highlightText"

import { useDialogStore } from "@/store/dialog"

import { useSelectedTag } from "@/store/selectedTag"
import { useSelectedUser } from "@/store/selectedUser"
import { POST_DETAIL_DIALOG } from "@/widgets/post/detail-dialog"
import { UserPost } from "@/entity/post/model/useUserPosts"

interface PostRowProps {
  post: UserPost
}

export const PostRow = ({ post }: PostRowProps) => {
  const { searchQuery } = useSearchQueryStore()
  const { setSelectedPost } = useSelectedPost()
  const { setDialogOpen } = useDialogStore()
  const { selectedTag, setSelectedTag } = useSelectedTag()
  const { setSelectedUser } = useSelectedUser()

  // 게시물 상세 보기
  const openPostDetail = () => {
    setSelectedPost(post)
    setDialogOpen(POST_DETAIL_DIALOG, true)
  }

  // // 게시물 삭제
  // const deletePost = async (id) => {
  //     try {
  //       await fetch(`/api/posts/${id}`, {
  //         method: "DELETE",
  //       })
  //       setPosts(posts.filter((post) => post.id !== id))
  //     } catch (error) {
  //       console.error("게시물 삭제 오류:", error)
  //     }
  //   }

  return (
    <TableRow key={post.id}>
      <TableCell>{post.id}</TableCell>
      <TableCell>
        <div className="space-y-1">
          <div>{highlightText(post.title, searchQuery)}</div>

          <div className="flex flex-wrap gap-1">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className={`px-1 text-[9px] font-semibold rounded-[4px] cursor-pointer ${
                  selectedTag === tag
                    ? "text-white bg-blue-500 hover:bg-blue-600"
                    : "text-blue-800 bg-blue-100 hover:bg-blue-200"
                }`}
                onClick={() => {
                  setSelectedTag(tag)
                  //   updateURL()
                }}
              >
                {tag}
              </span>
            ))}
          </div>
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
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSelectedPost(post)
              //   setShowEditDialog(true)
            }}
          >
            <Edit2 className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              //   deletePost(post.id)
            }}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  )
}
