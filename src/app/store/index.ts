import { makeAutoObservable } from 'mobx'
import config from 'config'

const defaultStore: Store.View = {
  theme: window.localStorage.colorScheme || 'light',
  banner: {
    isActive: false,
    messageId: '',
  },
  blog: {
    isPending: false,
    tags: [],
    postPreviews: [],
    posts: undefined,
    postsList: undefined,
    authors: [],
    pages: 0,
    currentPage: 0,
  },
  extra: {},

  setTheme(theme) {
    this.theme = theme
  },
  setActiveBanner({ isActive, messageId }) {
    this.banner.isActive = isActive
    this.banner.messageId = messageId
  },
  setTags(tags) {
    this.blog.tags = tags
  },
  setPostsPending(status) {
    this.blog.isPending = status
  },
  setPostPreviews(previews) {
    this.blog.postPreviews = previews

    const pages = Math.ceil(
      this.blog.postPreviews.length / config.POSTS_PER_PAGE
    )

    this.blog.pages = pages
    if (pages > 0) this.blog.currentPage = 1
  },
  setPosts(posts: Record<string, Store.Post>) {
    this.blog.posts = posts

    const postsList = [...Object.values(posts)]
    const authors: string[] = []

    this.blog.postsList = postsList.sort((p1, p2) => {
      if (!authors.includes(p1.author)) authors.push(p1.author)
      if (!authors.includes(p2.author)) authors.push(p2.author)

      return Number(p2.date) - Number(p1.date)
    })
    this.blog.pages = Math.ceil(
      this.blog.postsList.length / config.POSTS_PER_PAGE
    )
  },
  setAuthors(authors) {
    this.blog.authors = authors
  },
  setCurrentPage(page) {
    this.blog.currentPage = page
  },
  getPost(id = '') {
    if (!(this.blog?.posts && id)) return

    return Object.values(this.blog?.posts).find(({ postId }) => postId === id)
  },
}

export default makeAutoObservable(defaultStore)
