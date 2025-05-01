import { LimitSelect } from "@/features/LimitSelect"
import { GoNextPageButton } from "@/features/GoNextPage"
import { GoPrevPageButton } from "@/features/GoPrevPage"

export const AdminNav = () => {
  return (
    <div className="flex justify-between items-center">
      <LimitSelect />
      <div className="flex gap-2">
        <GoPrevPageButton />
        <GoNextPageButton />
      </div>
    </div>
  )
}
