import { TagSelect } from "@/features/TagSelect"
import { SearchInput } from "@/features/SearchInput"
import { SortBySelect } from "@/features/SortBySelect"
import { SortOrderSelector } from "@/features/SortOrderSelect"

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
