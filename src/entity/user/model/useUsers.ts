import { useQuery } from "@tanstack/react-query"
import { getUsers } from "@/entity/user/api/getUsers"

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  })
}
