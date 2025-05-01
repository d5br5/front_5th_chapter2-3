import { useQuery } from "@tanstack/react-query"
import { useOptionStore } from "../../../store/option"
import axios from "axios"
import { PostResponse } from "./usePosts"

export const useNormalPosts = () => {
  const { limit, skip } = useOptionStore()
  return useQuery({
    queryKey: ["posts", { limit, skip }],
    queryFn: async () => {
      try {
        const res = await axios.get<PostResponse>(`/api/posts?limit=${limit}&skip=${skip}`)
        return res.data
      } catch (e) {
        console.error("게시물 가져오기 오류:", e)
      }
    },
  })
}

// 게시물 가져오기
// const fetchPosts = () => {
//   setLoading(true)
//   let postsData
//   let usersData

//   fetch(`/api/posts?limit=${limit}&skip=${skip}`)
//     .then((response) => response.json())
//     .then((data) => {
//       postsData = data
//       return fetch("/api/users?limit=0&select=username,image")
//     })
//     .then((response) => response.json())
//     .then((users) => {
//       usersData = users.users
//       const postsWithUsers = postsData.posts.map((post) => ({
//         ...post,
//         author: usersData.find((user) => user.id === post.userId),
//       }))
//       setPosts(postsWithUsers)
//       setTotal(postsData.total)
//     })
//     .catch((error) => {
//       console.error("게시물 가져오기 오류:", error)
//     })
//     .finally(() => {
//       setLoading(false)
//     })
// }
