declare namespace Store {
  const themeLight = 'light'
  const themeDark = 'dark'

  type Theme = typeof themeLight | typeof themeDark

  type Post = {
    postId: string
    title: string
    description: string
    content: string
    author: string
    date: string
  }

  type Author = {
    nickname: string
    story?: string
  }

  type Blog = {
    isPending: boolean
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
    setPostsPending: (status: boolean) => void
    setPosts: (posts: Blog.posts) => void
    setAuthors: (authors: Author[]) => void
    setCurrentPage: (page: number) => void
    getPost: (postId?: string) => Post | undefined
  }
}

export as namespace Store
