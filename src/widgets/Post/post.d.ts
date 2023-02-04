declare namespace Post {
  type ID = string
  type Title = string
  type Description = string
  type Content = string
  type Author = string
  type Date = string

  interface Preview {
    postId: string
    title: string
    description: string
    author: string
    date: string
  }

  interface View extends Preview {
    content: Content
  }
}

export as namespace Post
