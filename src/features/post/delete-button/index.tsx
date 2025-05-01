import { UserPost } from "@/entity/post/model/useUserPosts"
import { Button } from "@/shared/ui"
import { Trash2 } from "lucide-react"

export const PostDeleteButton = ({ post }: { post: UserPost }) => {
  // // 게시물 삭제
  const deletePost = async (id: number) => {
    console.log(id)
    //     try {
    //       await fetch(`/api/posts/${id}`, {
    //         method: "DELETE",
    //       })
    //       setPosts(posts.filter((post) => post.id !== id))
    //     } catch (error) {
    //       console.error("게시물 삭제 오류:", error)
    //     }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        deletePost(post.id)
      }}
    >
      <Trash2 className="w-4 h-4" />
    </Button>
  )
}
