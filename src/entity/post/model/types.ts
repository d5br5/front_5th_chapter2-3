export interface Post {
  id: number
  body: string
  reactions: {
    dislikes: number
    likes: number
  }
  tags: string[]
  title: string
  userId: number
  views: number
}

export interface GetPostsResponse {
  limit: number
  skip: number
  total: number
  posts: Post[]
}

export interface NewPost {
  title: string
  body: string
  userId: number
}
