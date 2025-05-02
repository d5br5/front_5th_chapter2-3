import { deletePost } from "@/entity/post/api/deletePost"
import { PostDeleteButton } from "@/entity/post/ui/DeleteButton"
import { useMutation } from "@tanstack/react-query"

export const PostDelete = ({ postId }: { postId: number }) => {
  const { mutate } = useMutation({
    mutationFn: () => deletePost(postId),
    onSuccess: () => {
      // 기존 포스트 목록에서 제거
    },
    onError: (error) => {
      console.error("게시물 삭제 오류:", error)
    },
  })

  return <PostDeleteButton onClick={() => mutate()} />
}
