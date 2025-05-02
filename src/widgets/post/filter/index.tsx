import { TagSelect } from "@/features/tag/select"

import { SortBySelect } from "@/widgets/filter/sort-by-select"
import { SortOrderSelector } from "@/widgets/filter/sort-order-select"
import { SearchInput } from "@/features/search"

export const PostFilter = () => {
  return (
    <div className="flex gap-4">
      <SearchInput />
      <TagSelect />
      <SortBySelect />
      <SortOrderSelector />
    </div>
  )
}
