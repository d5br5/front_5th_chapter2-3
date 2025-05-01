import { LimitSelector } from "@/components/selector/LimitSelector"
import { GoNextPageButton } from "@/features/GoNextPage"
import { GoPrevPageButton } from "@/features/GoPrevPage"

export const AdminNav = () => {
  return (
    <div className="flex justify-between items-center">
      <LimitSelector />
      <div className="flex gap-2">
        <GoPrevPageButton />
        <GoNextPageButton />
      </div>
    </div>
  )
}
