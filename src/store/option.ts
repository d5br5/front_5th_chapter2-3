import { create } from "zustand"

interface OptionStore {
  limit: number
  skip: number
  setLimit: (limit: number) => void
  setSkip: (skip: number) => void
}

// URL의 query parameter를 파싱하는 함수
const getQueryParams = () => {
  if (typeof window === "undefined") return { limit: 10, skip: 0 }

  const params = new URLSearchParams(window.location.search)
  return {
    limit: Number(params.get("limit")) || 10,
    skip: Number(params.get("skip")) || 0,
  }
}

export const useOptionStore = create<OptionStore>((set) => ({
  limit: getQueryParams().limit,
  skip: getQueryParams().skip,
  setLimit: (limit) => set({ limit }),
  setSkip: (skip) => set({ skip }),
}))
