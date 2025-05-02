import { Button } from "@/shared/ui"
import { usePaginationStore } from "@/features/pagination/model/usePaginationStore"

export const GoPrevPageButton = () => {
  const { limit, skip, setSkip } = usePaginationStore()

  const isDisabled = skip === 0

  const handleClick = () => {
    if (isDisabled) return
    setSkip(Math.max(0, skip - limit))
  }

  return (
    <Button disabled={isDisabled} onClick={handleClick}>
      이전
    </Button>
  )
}
