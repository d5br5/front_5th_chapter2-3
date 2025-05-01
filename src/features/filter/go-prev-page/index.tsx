import { Button } from "@/shared/ui"
import { useOptionStore } from "@/store/option"

export const GoPrevPageButton = () => {
  const { limit, skip, setSkip } = useOptionStore()

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
