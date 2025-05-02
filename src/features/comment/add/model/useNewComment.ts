import { useState } from "react"
import { NewComment } from "@/entity/comment/model/types"

const initialComment: NewComment = {
  userId: 1,
  body: "",
  postId: null,
}

export const useNewComment = () => {
  const [newComment, setNewComment] = useState<NewComment>(initialComment)

  const setBody = (body: string) => {
    setNewComment((prev) => ({ ...prev, body }))
  }

  const reset = () => {
    setNewComment(initialComment)
  }

  return { newComment, setBody, reset }
}
