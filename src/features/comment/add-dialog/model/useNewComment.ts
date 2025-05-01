import { useState } from "react"
import { NewComment } from "@/entity/comment/model/types"
import { addComment } from "@/entity/comment/api/addComment"
import { useMutation } from "@tanstack/react-query"
import { useDialogStore } from "@/store/dialog"
import { ADD_COMMENT_DIALOG } from "../ui/CommentAddDialog"

const initialComment: NewComment = {
  userId: 1,
  body: "",
  postId: null,
}

export const useNewComment = () => {
  const [newComment, setNewComment] = useState<NewComment>(initialComment)
  const { setDialogOpen } = useDialogStore()

  const mutation = useMutation({
    mutationFn: () => addComment(newComment),
    onSuccess: (data) => {
      console.log(data)
      reset()
      setDialogOpen(ADD_COMMENT_DIALOG, false)
      // 기존 코멘트 목록에 추가
      //   setComments((prev) => ({
      //     ...prev,
      //     [data.postId]: [...(prev[data.postId] || []), data],
      //   }))
    },
    onError: (error) => {
      console.error("댓글 추가 오류:", error)
    },
  })

  const setBody = (body: string) => {
    setNewComment((prev) => ({ ...prev, body }))
  }

  const reset = () => {
    setNewComment(initialComment)
  }

  return { newComment, setBody, reset, mutation }
}
