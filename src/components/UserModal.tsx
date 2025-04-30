import { useQuery } from "@tanstack/react-query"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../shared/ui"
import { useSelectedUser } from "../store/selectedUser"
import axios from "axios"
import { UserDetail } from "../hooks/useUsers"

export const UserModal = () => {
  const { selectedUser, setSelectedUser } = useSelectedUser()

  const { data } = useQuery({
    queryKey: ["user", selectedUser?.id],
    queryFn: async () => {
      try {
        const res = await axios.get<UserDetail>(`/api/users/${selectedUser?.id}`)
        return res.data
      } catch (error) {
        console.error("사용자 정보 가져오기 오류:", error)
        return null
      }
    },
    enabled: !!selectedUser?.id,
  })

  if (!data) return null

  return (
    <Dialog open={!!selectedUser} onOpenChange={() => setSelectedUser(null)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>사용자 정보</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <img src={data?.image} alt={data?.username} className="w-24 h-24 rounded-full mx-auto" />
          <h3 className="text-xl font-semibold text-center">{data?.username}</h3>
          <div className="space-y-2">
            <p>
              <strong>이름:</strong> {data?.firstName} {data?.lastName}
            </p>
            <p>
              <strong>나이:</strong> {data?.age}
            </p>
            <p>
              <strong>이메일:</strong> {data?.email}
            </p>
            <p>
              <strong>전화번호:</strong> {data?.phone}
            </p>
            <p>
              <strong>주소:</strong> {data?.address?.address}, {data?.address?.city}, {data?.address?.state}
            </p>
            <p>
              <strong>직장:</strong> {data?.company?.name} - {data?.company?.title}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
