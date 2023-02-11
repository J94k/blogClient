declare namespace Store {
  const themeLight = 'light'
  const themeDark = 'dark'

  type Theme = typeof themeLight | typeof themeDark

  type PostPreview = {
    postId: string
    title: string
    description: string
    author: string
    date: string
    tags: string[]
  }

  type Post = PostPreview & {
    content: string
  }

  type Author = {
    nickname: string
    story?: string
  }

  type Blog = {
    isPending: boolean
    tags: string[]
    postPreviews: PostPreview[]
    posts?: Record<string, Post>
    postsList?: Post[]
    authors: Author[]
    pages: number
    currentPage?: number
  }

  type Extra = Record<string, unknown>

  interface View {
    theme: Theme
    blog: Blog
    extra: Extra

    setTheme: (theme: Store.Theme) => void
    setTags: (tags: string[]) => void
    setPostsPending: (status: boolean) => void
    setPostPreviews: (previews: PostPreview[]) => void
    setPosts: (posts: Blog.posts) => void
    setAuthors: (authors: Author[]) => void
    setCurrentPage: (page: number) => void
    getPost: (postId?: string) => Post | undefined
  }
}

export as namespace Store
