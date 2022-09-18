declare namespace Blog {
  export interface Post {
    id: number
    attributes: {
      title: string
      content: string
      createdAt: string
      date: string
      locale: string
      publishedAt: string
      updatedAt: string
    }
  }

  export type Posts = Post[]
}
