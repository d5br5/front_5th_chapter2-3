import { useUserPosts } from "../../hooks/useUserPosts"
import { Button } from "../../shared/ui"
import { useOptionStore } from "../../store/option"

export const Pagination = () => {
  const { limit, skip, setSkip } = useOptionStore()
  const { data } = useUserPosts()

  return (
    <div className="flex gap-2">
      <Button disabled={skip === 0} onClick={() => setSkip(Math.max(0, skip - limit))}>
        이전
      </Button>
      <Button disabled={!data || skip + limit >= data?.total} onClick={() => setSkip(skip + limit)}>
        다음
      </Button>
    </div>
  )
}
