import { create } from "zustand"

interface SearchQueryStore {
  searchQuery: string
  setSearchQuery: (searchQuery: string) => void
}

export const useSearchQueryStore = create<SearchQueryStore>((set) => ({
  searchQuery: "",
  setSearchQuery: (searchQuery) => set({ searchQuery }),
}))
