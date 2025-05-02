import { GoNextPageButton } from "@/widgets/filter/go-next-page"
import { GoPrevPageButton } from "@/widgets/filter/go-prev-page"
import { LimitSelect } from "@/features/pagination"

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
