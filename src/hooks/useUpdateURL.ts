import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export const useUpdateURL = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)

  // URL 업데이트 함수
  //   const updateURL = () => {
  //     const params = new URLSearchParams()
  //     if (skip) params.set("skip", skip.toString())
  //     if (limit) params.set("limit", limit.toString())
  //     if (searchQuery) params.set("search", searchQuery)
  //     if (sortBy) params.set("sortBy", sortBy)
  //     if (sortOrder) params.set("sortOrder", sortOrder)
  //     if (selectedTag) params.set("tag", selectedTag)
  //     navigate(`?${params.toString()}`)
  //   }

  //   useEffect(() => {
  //     if (selectedTag) {
  //       fetchPostsByTag(selectedTag)
  //     } else {
  //       fetchPosts()
  //     }
  //     updateURL()
  //   }, [skip, limit, sortBy, sortOrder, selectedTag])

  //   useEffect(() => {
  //     const params = new URLSearchParams(location.search)
  //     setSkip(parseInt(params.get("skip") || "0"))
  //     setLimit(parseInt(params.get("limit") || "10"))
  //     setSearchQuery(params.get("search") || "")
  //     setSortBy(params.get("sortBy") || "")
  //     setSortOrder(params.get("sortOrder") || "asc")
  //     setSelectedTag(params.get("tag") || "")
  //   }, [location.search])
}
