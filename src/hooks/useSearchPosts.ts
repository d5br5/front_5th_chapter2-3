import { useQuery } from "@tanstack/react-query"
import { useSearchQueryStore } from "../store/searchQuery"
import axios from "axios"
import { PostResponse } from "./usePosts"

export const useSearchPosts = () => {
  const { searchQuery } = useSearchQueryStore()

  return useQuery({
    queryKey: ["searchPosts", searchQuery],
    queryFn: async () => {
      try {
        const res = await axios.get<PostResponse>(`/api/posts/search?q=${searchQuery}`)
        return res.data
      } catch (e) {
        console.error("게시물 검색 오류:", e)
      }
    },
    enabled: !!searchQuery,
  })
}

//  // 게시물 검색
//  const searchPosts = async () => {
//     if (!searchQuery) {
//       fetchPosts()
//       return
//     }
//     setLoading(true)
//     try {
//       const response = await fetch(`/api/posts/search?q=${searchQuery}`)
//       const data = await response.json()
//       setPosts(data.posts)
//       setTotal(data.total)
//     } catch (error) {
//       console.error("게시물 검색 오류:", error)
//     }
//     setLoading(false)
//   }
