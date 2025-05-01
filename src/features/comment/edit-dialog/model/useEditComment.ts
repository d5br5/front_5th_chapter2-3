import { useMutation } from "@tanstack/react-query"
import { editComment } from "@/entity/comment/api/editComment"
import { useSelectedComment } from "@/entity/comment/model/selectedComment"
import { useEffect, useState } from "react"
import { EDIT_COMMENT_DIALOG } from ".."
import { useDialogStore } from "@/features/dialog/model/store"

export const useEditComment = () => {
  const { setDialogOpen } = useDialogStore()
  const { selectedComment, setSelectedComment } = useSelectedComment()
  const [body, setBody] = useState("")

  useEffect(() => {
    setBody(selectedComment?.body || "")
  }, [selectedComment])

  const mutation = useMutation({
    mutationFn: (commentId: number) => {
      return editComment(commentId, body)
    },
    onSuccess: (data) => {
      setSelectedComment(null)
      setDialogOpen(EDIT_COMMENT_DIALOG, false)
      console.log(data)
      // 댓글 목록 수정
    },
    onError: (error) => {
      console.error("댓글 수정 오류:", error)
    },
  })

  return { body, setBody, mutation }
}
