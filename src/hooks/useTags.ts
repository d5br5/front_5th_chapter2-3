import { useQuery } from "@tanstack/react-query"
import axios from "axios"
interface Tag {
  name: string
  slug: string
  url: string
}

export const useTags = () => {
  return useQuery({
    queryKey: ["tags"],
    queryFn: async () => {
      try {
        const res = await axios.get<Tag[]>("/api/posts/tags")
        return res.data
      } catch (error) {
        console.error("태그 가져오기 오류:", error)
        return []
      }
    },
  })
}
