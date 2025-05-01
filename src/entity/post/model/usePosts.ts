import { useMemo } from "react"
import { useNormalPosts } from "./useNormalPosts"
import { useSearchPosts } from "./useSearchPosts"
import { useTagPosts } from "./useTagPosts"

export const usePosts = () => {
  const { data: normalPosts, isLoading: normalPostsLoading } = useNormalPosts()
  const { data: tagPosts, isLoading: tagPostsLoading } = useTagPosts()
  const { data: searchPosts, isLoading: searchPostsLoading } = useSearchPosts()

  const posts = useMemo(() => {
    if (searchPosts) {
      return searchPosts
    }
    if (tagPosts) {
      return tagPosts
    }
    if (normalPosts) {
      return normalPosts
    }
  }, [normalPosts, tagPosts, searchPosts])

  const isLoading = normalPostsLoading || tagPostsLoading || searchPostsLoading

  return { data: posts, isLoading }
}
