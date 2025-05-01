import { useState } from "react"
import { Search } from "lucide-react"

import { Input } from "@/shared/ui"
import { useSearchQueryStore } from "@/features/filter/search/model/store"

export const SearchInput = () => {
  const [input, setInput] = useState("")
  const { setSearchQuery } = useSearchQueryStore()

  return (
    <div className="flex-1">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="게시물 검색..."
          className="pl-8"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              setSearchQuery(input)
            }
          }}
        />
      </div>
    </div>
  )
}
