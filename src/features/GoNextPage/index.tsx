import { useUserPosts } from "@/hooks/useUserPosts"
import { Button } from "@/shared/ui"
import { useOptionStore } from "@/store/option"

export const GoNextPageButton = () => {
  const { limit, skip, setSkip } = useOptionStore()
  const { data } = useUserPosts()

  const isDisabled = !data || skip + limit >= data?.total

  const handleClick = () => {
    if (isDisabled) return
    setSkip(skip + limit)
  }

  return (
    <Button disabled={isDisabled} onClick={handleClick}>
      다음
    </Button>
  )
}
