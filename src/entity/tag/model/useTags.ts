import { useQuery } from "@tanstack/react-query"

import { getTagList } from "@/entity/tag/api/getTagList"

export const useTags = () => {
  return useQuery({
    queryKey: ["tags"],
    queryFn: getTagList,
  })
}
