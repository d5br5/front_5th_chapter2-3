import { create } from "zustand"

interface SelectedTagStore {
  selectedTag: string
  setSelectedTag: (tag: string) => void
}
const getQueryParams = () => {
  if (typeof window === "undefined") return { selectedTag: "" }

  const params = new URLSearchParams(window.location.search)
  return {
    selectedTag: params.get("tag") || "",
  }
}

export const useSelectedTag = create<SelectedTagStore>((set) => ({
  selectedTag: getQueryParams().selectedTag,
  setSelectedTag: (tag) => set({ selectedTag: tag }),
}))
