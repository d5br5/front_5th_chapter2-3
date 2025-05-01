import { create } from "zustand"
import { Comment } from "@/entity/comment/model/types"

interface SelectedCommentStore {
  selectedComment: Comment | null
  setSelectedComment: (comment: Comment | null) => void
}

export const useSelectedComment = create<SelectedCommentStore>((set) => ({
  selectedComment: null,
  setSelectedComment: (comment) => set({ selectedComment: comment }),
}))
