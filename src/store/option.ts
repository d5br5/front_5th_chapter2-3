import { create } from "zustand"

interface OptionStore {
  limit: number
  skip: number
  sortBy: string
  sortOrder: string
  setLimit: (limit: number) => void
  setSkip: (skip: number) => void
  setSortBy: (sortBy: string) => void
  setSortOrder: (sortOrder: string) => void
}

const DEFAULT_PARAMS = {
  limit: 10,
  skip: 0,
  sortBy: "",
  sortOrder: "asc",
}

// URL의 query parameter를 파싱하는 함수
const getQueryParams = () => {
  if (typeof window === "undefined") return DEFAULT_PARAMS

  const params = new URLSearchParams(window.location.search)
  return {
    limit: Number(params.get("limit")) || DEFAULT_PARAMS.limit,
    skip: Number(params.get("skip")) || DEFAULT_PARAMS.skip,
    sortBy: params.get("sortBy") || DEFAULT_PARAMS.sortBy,
    sortOrder: params.get("sortOrder") || DEFAULT_PARAMS.sortOrder,
  }
}

export const useOptionStore = create<OptionStore>((set) => ({
  limit: getQueryParams().limit,
  skip: getQueryParams().skip,
  sortBy: getQueryParams().sortBy,
  sortOrder: getQueryParams().sortOrder,
  setLimit: (limit) => set({ limit }),
  setSkip: (skip) => set({ skip }),
  setSortBy: (sortBy) => set({ sortBy }),
  setSortOrder: (sortOrder) => set({ sortOrder }),
}))
