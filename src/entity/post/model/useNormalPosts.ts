import { useQuery } from "@tanstack/react-query"

import { getPosts } from "../api/getPosts"
import { usePaginationStore } from "@/features/pagination/model/usePaginationStore"

export const useNormalPosts = () => {
  const { limit, skip } = usePaginationStore()

  return useQuery({
    queryKey: ["posts", { limit, skip }],
    queryFn: async () => {
      try {
        return await getPosts(limit, skip)
      } catch (e) {
        console.error("게시물 가져오기 오류:", e)
      }
    },
  })
}
