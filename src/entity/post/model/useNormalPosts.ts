import { useQuery } from "@tanstack/react-query"
import { useOptionStore } from "@/features/filter/limit/model/option"
import { getPosts } from "../api/getPosts"

export const useNormalPosts = () => {
  const { limit, skip } = useOptionStore()
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
