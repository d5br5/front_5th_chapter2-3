import { useSelectedTag } from "@/entity/tag/model/selectedTag"
import { cn } from "@/shared/lib/cn"

export const TagBadge = ({ tag }: { tag: string }) => {
  const { selectedTag, setSelectedTag } = useSelectedTag()

  return (
    <span
      onClick={() => setSelectedTag(tag)}
      className={cn(
        "px-1 text-[9px] font-semibold rounded-[4px] cursor-pointer",
        selectedTag === tag
          ? "text-white bg-blue-500 hover:bg-blue-600"
          : "text-blue-800 bg-blue-100 hover:bg-blue-200",
      )}
    >
      {tag}
    </span>
  )
}
