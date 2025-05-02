import { useQuery } from "@tanstack/react-query"
import { useSearchStore } from "@/features/search/model/useSearchStore"
import { searchPosts } from "../api/searchPosts"

export const useSearchPosts = () => {
  const { searchQuery } = useSearchStore()

  return useQuery({
    queryKey: ["searchPosts", searchQuery],
    queryFn: async () => {
      try {
        return await searchPosts(searchQuery)
      } catch (e) {
        console.error("게시물 검색 오류:", e)
      }
    },
    enabled: !!searchQuery,
  })
}
