import { useQuery } from "@tanstack/react-query"
import { useOptionStore } from "../store/option"

export interface Post {
  id: number
  body: string
  reactions: {
    dislikes: number
    likes: number
  }
  tags: string[]
  title: string
  userId: number
  views: number
}

interface PostResponse {
  limit: number
  skip: number
  total: number
  posts: Post[]
}

export const usePosts = () => {
  const { limit, skip } = useOptionStore()
  return useQuery({
    queryKey: ["posts", { limit, skip }],
    queryFn: async () => {
      const res = await fetch(`/api/posts?limit=${limit}&skip=${skip}`)
      const data: PostResponse = await res.json()
      return data
    },
  })
}
