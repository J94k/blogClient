import config from 'config'
import authors from '../../blogData/authors.json'
import blog from '../../blogData/blog.json'

// @todo fix server side
const isLocal = true

const fetchLocalAllPostPreviews = async (): Promise<unknown> => {
  let allPostPreviews: Record<string, unknown> = {}

  Object.values(authors).forEach(({ postPreviews }) => {
    allPostPreviews = { ...allPostPreviews, ...postPreviews }
  })

  return Object.values(allPostPreviews)
}

const fetchLocalPost = async (id: string): Promise<string> => {
  return await fetch(`blogData/posts/${id}.md`).then((response) =>
    response.text()
  )
}

const fetchLocalAuthors = async (): Promise<Store.Author[]> => {
  const result: Record<string, unknown>[] = []

  Object.keys(authors).forEach((nickname) => {
    result.push({
      nickname,
      story: authors[nickname as keyof typeof authors].story,
    })
  })

  return result as Store.Author[]
}

const fetchLocalTags = async (): Promise<string[]> => {
  return blog.tags
}

// ============

const fetchAllPostPreviews = async (): Promise<unknown> => {
  const previews = await fetch(`${config.BLOG_SERVICE_URL}/postPreviews`, {
    method: 'GET',
  }).then((res) => res.json())

  return previews
}

const fetchPost = async (id: string): Promise<string> => {
  const post = await fetch(`${config.BLOG_SERVICE_URL}/post/${id}`, {
    method: 'GET',
  }).then((res) => res.text())

  return post
}

const fetchAuthors = async (): Promise<Store.Author[]> => {
  const result = await fetch(`${config.BLOG_SERVICE_URL}/authors`, {
    method: 'GET',
  }).then((res) => res.json())

  return result as Store.Author[]
}

const fetchTags = async (): Promise<string[]> => {
  const tags = await fetch(`${config.BLOG_SERVICE_URL}/tags`, {
    method: 'GET',
  }).then((res) => res.json())

  return tags as string[]
}

const serverService = {
  fetchAllPostPreviews,
  fetchPost,
  fetchAuthors,
  fetchTags,
}

const localService = {
  fetchAllPostPreviews: fetchLocalAllPostPreviews,
  fetchPost: fetchLocalPost,
  fetchAuthors: fetchLocalAuthors,
  fetchTags: fetchLocalTags,
}

export default isLocal ? localService : serverService
