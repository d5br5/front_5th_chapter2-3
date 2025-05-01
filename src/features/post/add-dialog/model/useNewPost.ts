import { addPost } from "@/entity/post/api/addPost"
import { NewPost } from "@/entity/post/model/types"
import { useDialogStore } from "@/store/dialog"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { ADD_POST_DIALOG } from ".."

const initialPost: NewPost = {
  title: "",
  body: "",
  userId: 1,
}

export const useNewPost = () => {
  const [newPost, setNewPost] = useState<NewPost>(initialPost)
  const { setDialogOpen } = useDialogStore()

  const mutation = useMutation({
    mutationFn: () => addPost(newPost),
    onSuccess: (data) => {
      console.log(data)
      reset()
      setDialogOpen(ADD_POST_DIALOG, false)
      // 기존 게시물 목록에 추가
    },
    onError: (error) => {
      console.error("게시물 추가 오류:", error)
    },
  })

  const reset = () => {
    setNewPost(initialPost)
  }

  return { newPost, setNewPost, mutation }
}
