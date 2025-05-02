import { TagSelect } from "@/features/tag/select"

import { SortBySelect } from "@/features/filter/sort-by"
import { SortOrderSelector } from "@/features/filter/sort-order"
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
