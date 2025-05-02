import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui"
import { useTags } from "@/entity/tag/model/useTags"
import { useSelectedTag } from "@/entity/tag/model/selectedTag"

export const TagSelect = () => {
  const { data: tags } = useTags()
  const { selectedTag, setSelectedTag } = useSelectedTag()

  return (
    <Select value={selectedTag} onValueChange={setSelectedTag}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="태그 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">모든 태그</SelectItem>
        {tags?.map((tag) => (
          <SelectItem key={tag.url} value={tag.slug}>
            {tag.slug}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
