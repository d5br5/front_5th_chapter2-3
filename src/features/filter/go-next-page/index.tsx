import { useUserPosts } from "@/entity/post/model/useUserPosts"
import { Button } from "@/shared/ui"
import { useOptionStore } from "@/features/filter/limit/model/option"

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
