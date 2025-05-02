import { create } from "zustand"

interface SearchQueryStore {
  searchQuery: string
  setSearchQuery: (searchQuery: string) => void
}

const DEFAULT_SEARCH_QUERY = ""

// URL의 query parameter를 파싱하는 함수
const getQueryParams = () => {
  if (typeof window === "undefined") return DEFAULT_SEARCH_QUERY
  const params = new URLSearchParams(window.location.search)
  return params.get("search") || DEFAULT_SEARCH_QUERY
}

export const useSearchStore = create<SearchQueryStore>((set) => ({
  searchQuery: getQueryParams(),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
}))
