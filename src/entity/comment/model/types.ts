import { User } from "@/entity/user/model/types"

export interface NewComment {
  userId: number
  body: string
  postId: null
}

export interface Comment {
  body: string
  id: number
  likes: number
  postId: number
  user: User
}

export interface GetCommentsResponse {
  limit: number
  skip: number
  total: number
  comments: Comment[]
}
