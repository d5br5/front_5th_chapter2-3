import { useMemo } from "react"
import { Post, usePosts } from "./usePosts"
import { User, useUsers } from "./useUsers"

export interface UserPost extends Post {
  author: User
}

export const useUserPosts = () => {
  const users = useUsers()
  const posts = usePosts()

  const userPosts = useMemo(() => {
    if (!users.data || !posts.data) return []
    return posts.data.posts.map((post) => ({
      ...post,
      author: users.data.users.find((user) => user.id === post.userId),
    }))
  }, [users.data, posts.data])

  return {
    data: userPosts,
    isLoading: users.isLoading || posts.isLoading,
    isError: users.isError || posts.isError,
  }
}
