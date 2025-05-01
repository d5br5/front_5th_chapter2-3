import { LimitSelector } from "@/components/selector/LimitSelector"
import { Pagination } from "@/components/selector/Pagination"

export const AdminNav = () => {
  return (
    <div className="flex justify-between items-center">
      <LimitSelector />
      <Pagination />
    </div>
  )
}
