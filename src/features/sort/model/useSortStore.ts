import { create } from "zustand"

interface SortStore {
  sortBy: string
  sortOrder: string
  setSortBy: (sortBy: string) => void
  setSortOrder: (sortOrder: string) => void
}

const DEFAULT_PARAMS = {
  sortBy: "",
  sortOrder: "asc",
}

// URL의 query parameter를 파싱하는 함수
const getQueryParams = () => {
  if (typeof window === "undefined") return DEFAULT_PARAMS
  const params = new URLSearchParams(window.location.search)
  return {
    sortBy: params.get("sortBy") || DEFAULT_PARAMS.sortBy,
    sortOrder: params.get("sortOrder") || DEFAULT_PARAMS.sortOrder,
  }
}

export const useSortStore = create<SortStore>((set) => ({
  sortBy: getQueryParams().sortBy,
  sortOrder: getQueryParams().sortOrder,
  setSortBy: (sortBy) => set({ sortBy }),
  setSortOrder: (sortOrder) => set({ sortOrder }),
}))
