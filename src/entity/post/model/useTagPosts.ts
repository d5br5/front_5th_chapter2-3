import { useQuery } from "@tanstack/react-query"

import { useSelectedTag } from "@/entity/tag/model/selectedTag"
import { getTagPosts } from "@/entity/post/api/getTagPosts"

export const useTagPosts = () => {
  const { selectedTag } = useSelectedTag()

  return useQuery({
    queryKey: ["posts", { tag: selectedTag }],
    queryFn: async () => {
      try {
        return await getTagPosts(selectedTag)
      } catch (error) {
        console.error("태그별 게시물 가져오기 오류:", error)
      }
    },
    enabled: !!selectedTag && selectedTag !== "all",
  })
}
