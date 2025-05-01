import { create } from "zustand"
import { Post } from "../hooks/useNormalPosts"

interface SelectedPostStore {
  selectedPost: Post | null
  setSelectedPost: (post: Post | null) => void
}

export const useSelectedPost = create<SelectedPostStore>((set) => ({
  selectedPost: null,
  setSelectedPost: (post) => set({ selectedPost: post }),
}))
