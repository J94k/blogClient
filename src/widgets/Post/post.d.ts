declare namespace Post {
  type ID = string
  type Title = string
  type Description = string
  type Content = string
  type Author = string
  type Date = string

  interface View {
    postId: ID
    title: Title
    description: Description
    content: Content
    author: Author
    date: Date
  }
}

export as namespace Post
