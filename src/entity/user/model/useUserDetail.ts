import { useQuery } from "@tanstack/react-query"
import { getUserDetail } from "../api/getUserDetail"

export const useUserDetail = (userId?: string) => {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      if (!userId) return
      try {
        const res = await getUserDetail(userId)
        return res
      } catch (error) {
        console.error("사용자 정보 가져오기 오류:", error)
      }
    },
    enabled: !!userId,
  })
}
