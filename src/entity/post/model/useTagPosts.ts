import { useQuery } from "@tanstack/react-query"

import { useSelectedTag } from "../../../store/selectedTag"
import { getTagPosts } from "../api/getTagPosts"

export const useTagPosts = () => {
  const { selectedTag } = useSelectedTag()

  return useQuery({
    queryKey: ["tagPosts", selectedTag],
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

// // 태그별 게시물 가져오기
// const fetchPostsByTag = async (tag) => {
//     if (!tag || tag === "all") {
//       fetchPosts()
//       return
//     }
//     setLoading(true)
//     try {
//       const [postsResponse, usersResponse] = await Promise.all([
//         fetch(`/api/posts/tag/${tag}`),
//         fetch("/api/users?limit=0&select=username,image"),
//       ])
//       const postsData = await postsResponse.json()
//       const usersData = await usersResponse.json()

//       const postsWithUsers = postsData.posts.map((post) => ({
//         ...post,
//         author: usersData.users.find((user) => user.id === post.userId),
//       }))

//       setPosts(postsWithUsers)
//       setTotal(postsData.total)
//     } catch (error) {
//       console.error("태그별 게시물 가져오기 오류:", error)
//     }
//     setLoading(false)
//   }
