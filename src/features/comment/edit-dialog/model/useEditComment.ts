import { useMutation } from "@tanstack/react-query"
import { editComment } from "@/entity/comment/api/editComment"
import { useSelectedComment } from "@/store/selectedComment"
import { useEffect, useState } from "react"
import { EDIT_COMMENT_DIALOG } from ".."
import { useDialogStore } from "@/store/dialog"

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
    onSuccess: () => {
      setSelectedComment(null)
      setDialogOpen(EDIT_COMMENT_DIALOG, false)
    },
    onError: (error) => {
      console.error("댓글 수정 오류:", error)
    },
  })

  return { body, setBody, mutation }
}
