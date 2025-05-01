import { useMemo } from "react"

import { User, useUsers } from "../entity/user/model/useUsers"
import { Post, usePosts } from "./usePosts"

export interface UserPost extends Post {
  author: User | null
}

export type UserPostData =
  | {
      limit: number
      skip: number
      total: number
      posts: UserPost[]
    }
  | undefined

export const useUserPosts = () => {
  const users = useUsers()
  const posts = usePosts()

  const userPostsData: UserPostData = useMemo(() => {
    if (!users.data || !posts.data) return

    const userPosts = posts.data.posts.map((post) => {
      const author = users.data.users.find((user) => user.id === post.userId) || null
      return { ...post, author }
    })

    return { ...posts.data, posts: userPosts }
  }, [users.data, posts.data])

  return {
    data: userPostsData,
    isLoading: users.isLoading || posts.isLoading,
  }
}
