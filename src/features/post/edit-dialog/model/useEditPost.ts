import { useMutation } from "@tanstack/react-query"
import { editPost } from "@/entity/post/api/editPost"
import { useSelectedPost } from "@/entity/post/model/selectedPost"
import { EDIT_POST_DIALOG } from "../EditPostDialog"
import { useDialogStore } from "@/features/dialog/model/store"

export const useEditPost = () => {
  const { selectedPost } = useSelectedPost()
  const { setDialogOpen } = useDialogStore()

  const mutation = useMutation({
    mutationFn: (postId: number) => {
      return editPost(postId, selectedPost)
    },
    onSuccess: (data) => {
      setDialogOpen(EDIT_POST_DIALOG, false)
      console.log(data)
    },
    onError: (error) => {
      console.error("게시물 수정 오류:", error)
    },
  })

  return { mutation }
}
