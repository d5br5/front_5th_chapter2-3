import { TagSelector } from "@/components/selector/TagSelector"
import { SearchInput } from "@/components/SearchInput"
import { SortBySelector } from "@/components/selector/SortBySelector"
import { SortOrderSelector } from "@/components/selector/SortOrderSelector"

export const PostFilter = () => {
  return (
    <div className="flex gap-4">
      <SearchInput />
      <TagSelector />
      <SortBySelector />
      <SortOrderSelector />
    </div>
  )
}
