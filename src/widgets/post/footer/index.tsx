import { LimitSelect } from "@/features/filter/limit"
import { GoNextPageButton } from "@/features/filter/go-next-page"
import { GoPrevPageButton } from "@/features/filter/go-prev-page"

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
