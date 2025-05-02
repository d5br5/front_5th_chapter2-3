import { useUserPosts } from "@/entity/post/model/useUserPosts"
import { usePaginationStore } from "@/features/pagination/model/usePaginationStore"
import { Button } from "@/shared/ui"

export const GoNextPageButton = () => {
  const { limit, skip, setSkip } = usePaginationStore()
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
