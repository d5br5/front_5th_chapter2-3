import { TagSelect } from "@/features/tag/select"
import { SearchInput } from "@/features/filter/search"
import { SortBySelect } from "@/features/filter/sort-by"
import { SortOrderSelector } from "@/features/filter/sort-order"

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
