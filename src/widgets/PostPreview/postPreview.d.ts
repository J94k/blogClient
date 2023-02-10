declare namespace PostPreview {
  type ID = string
  type Title = string
  type Description = string
  type Author = string
  type Date = string
  type OnContinue = (id: string) => void
  type Tag = string

  interface View {
    postId: ID
    title: Title
    description: Description
    author: Author
    date: Date
    onContinue: OnContinue
    tags: Tag[]
  }
}

export as namespace PostPreview
