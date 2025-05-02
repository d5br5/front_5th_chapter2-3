import { NewPost } from "@/entity/post/model/types"
import { useState } from "react"

const initialPost: NewPost = {
  title: "",
  body: "",
  userId: 1,
}

export const useNewPost = () => {
  const [newPost, setNewPost] = useState<NewPost>(initialPost)

  const reset = () => {
    setNewPost(initialPost)
  }

  return { newPost, setNewPost, reset }
}
