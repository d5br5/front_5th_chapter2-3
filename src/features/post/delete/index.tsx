import { deletePost } from "@/entity/post/api/deletePost"
import { GetPostsResponse } from "@/entity/post/model/types"
import { PostDeleteButton } from "@/entity/post/ui/DeleteButton"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const PostDelete = ({ postId }: { postId: number }) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: () => deletePost(postId),
    onSuccess: () => {
      // 기존 포스트 목록에서 제거
      queryClient.setQueriesData({ queryKey: ["posts"] }, (old: GetPostsResponse) => {
        if (!old) return
        return {
          ...old,
          posts: old.posts.filter((post) => post.id !== postId),
        }
      })
    },
    onError: (error) => {
      console.error("게시물 삭제 오류:", error)
    },
  })

  return <PostDeleteButton onClick={() => mutate()} />
}
