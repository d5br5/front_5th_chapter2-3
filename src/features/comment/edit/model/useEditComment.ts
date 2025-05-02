import { useSelectedComment } from "@/entity/comment/model/selectedComment"
import { useEffect, useState } from "react"

export const useEditComment = () => {
  const { selectedComment } = useSelectedComment()
  const [body, setBody] = useState("")

  useEffect(() => {
    setBody(selectedComment?.body || "")
  }, [selectedComment])

  return { body, setBody }
}
