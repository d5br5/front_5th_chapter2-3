import { create } from "zustand"

interface PaginationStore {
  limit: number
  skip: number
  setLimit: (limit: number) => void
  setSkip: (skip: number) => void
}

const DEFAULT_PARAMS = {
  limit: 10,
  skip: 0,
}

// URL의 query parameter를 파싱하는 함수
const getQueryParams = () => {
  if (typeof window === "undefined") return DEFAULT_PARAMS
  const params = new URLSearchParams(window.location.search)
  return {
    limit: Number(params.get("limit")) || DEFAULT_PARAMS.limit,
    skip: Number(params.get("skip")) || DEFAULT_PARAMS.skip,
  }
}

export const usePaginationStore = create<PaginationStore>((set) => ({
  limit: getQueryParams().limit,
  skip: getQueryParams().skip,

  setLimit: (limit) => set({ limit }),
  setSkip: (skip) => set({ skip }),
}))
