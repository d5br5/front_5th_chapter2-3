import { create } from "zustand"
import { User } from "../hooks/useUsers"

interface SelectedUserStore {
  selectedUser: User | null
  setSelectedUser: (user: User | null) => void
}

export const useSelectedUser = create<SelectedUserStore>((set) => ({
  selectedUser: null,
  setSelectedUser: (user) => set({ selectedUser: user }),
}))
