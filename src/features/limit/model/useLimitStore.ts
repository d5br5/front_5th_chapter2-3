import { create } from "zustand"

interface LimitStore {
  limit: number
  setLimit: (limit: number) => void
}

const DEFAULT_LIMIT = 10

// URL의 query parameter를 파싱하는 함수
const getQueryParams = () => {
  if (typeof window === "undefined") return DEFAULT_LIMIT
  const params = new URLSearchParams(window.location.search)
  return Number(params.get("limit")) || DEFAULT_LIMIT
}

export const useLimitStore = create<LimitStore>((set) => ({
  limit: getQueryParams(),
  setLimit: (limit) => set({ limit }),
}))
