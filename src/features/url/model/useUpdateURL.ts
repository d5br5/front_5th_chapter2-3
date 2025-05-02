import { useSelectedTag } from "@/entity/tag/model/selectedTag"
import { usePaginationStore } from "@/features/pagination/model/usePaginationStore"
import { useSearchStore } from "@/features/search/model/useSearchStore"
import { useSortStore } from "@/features/sort/model/useSortStore"
import { useCallback, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export const useUpdateURL = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // Store에서 상태와 setter 함수들을 가져옵니다
  const { skip, limit, setSkip, setLimit } = usePaginationStore()
  const { sortBy, sortOrder, setSortBy, setSortOrder } = useSortStore()
  const { searchQuery, setSearchQuery } = useSearchStore()
  const { selectedTag, setSelectedTag } = useSelectedTag()

  // URL 업데이트 함수
  const updateURL = useCallback(() => {
    const params = new URLSearchParams()
    if (skip) params.set("skip", skip.toString())
    if (limit) params.set("limit", limit.toString())
    if (searchQuery) params.set("search", searchQuery)
    if (sortBy) params.set("sortBy", sortBy)
    if (sortOrder) params.set("sortOrder", sortOrder)
    if (selectedTag) params.set("tag", selectedTag)
    navigate(`?${params.toString()}`)
  }, [navigate, skip, limit, searchQuery, sortBy, sortOrder, selectedTag])

  // 상태가 변경될 때마다 URL을 업데이트
  useEffect(() => {
    updateURL()
  }, [updateURL])

  // URL이 변경될 때마다 상태를 업데이트
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    setSkip(parseInt(params.get("skip") || "0"))
    setLimit(parseInt(params.get("limit") || "10"))
    setSearchQuery(params.get("search") || "")
    setSortBy(params.get("sortBy") || "")
    setSortOrder(params.get("sortOrder") || "asc")
    setSelectedTag(params.get("tag") || "")
  }, [location.search, setSkip, setLimit, setSearchQuery, setSortBy, setSortOrder, setSelectedTag])

  return { updateURL }
}
