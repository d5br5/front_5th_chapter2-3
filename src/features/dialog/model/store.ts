import { create } from "zustand"

interface DialogStore {
  dialogs: Record<string, boolean>
  setDialogOpen: (dialog: string, open: boolean) => void
  isDialogOpen: (dialog: string) => boolean
  openDialog: (dialog: string) => void
  closeDialog: (dialog: string) => void
}

export const useDialogStore = create<DialogStore>((set, get) => ({
  dialogs: {},
  setDialogOpen: (dialog: string, open: boolean) => set((state) => ({ dialogs: { ...state.dialogs, [dialog]: open } })),
  isDialogOpen: (dialog: string) => get().dialogs[dialog],
  openDialog: (dialog: string) => set((state) => ({ dialogs: { ...state.dialogs, [dialog]: true } })),
  closeDialog: (dialog: string) => set((state) => ({ dialogs: { ...state.dialogs, [dialog]: false } })),
}))
