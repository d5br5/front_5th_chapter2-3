import { useQuery } from "@tanstack/react-query"

export interface User {
  id: number
  image: string
  username: string
}

interface UserResponse {
  limit: number
  skip: number
  total: number
  users: User[]
}

export interface UserDetail extends User {
  firstName: string
  lastName: string
  age: number
  phone: string
  email: string
  address: Address
  company: Company
}

interface Address {
  address: string
  city: string
  state: string
  postalCode: string
  coordinates: {
    lat: number
    lng: number
  }
}

interface Company {
  name: string
  title: string
  department: string
  address: Address
}

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`/api/users?limit=0&select=username,image`)
      const data: UserResponse = await res.json()
      return data
    },
  })
}
