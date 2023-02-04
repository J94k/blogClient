import config from 'config'

const fetchAllPostPreviews = async (): Promise<unknown> => {
  const previews = await fetch(`${config.BLOG_SERVICE_URL}/postPreviews`, {
    method: 'GET',
  }).then((res) => res.json())

  return previews
}

const fetchAllPosts = async (): Promise<unknown> => {
  const posts = await fetch(`${config.BLOG_SERVICE_URL}/posts`, {
    method: 'GET',
  }).then((res) => res.json())

  return posts
}

const fetchPost = async (
  id: string
): Promise<{
  postId: string
  title: string
  description: string
  author: string
  date: string
  content: string
}> => {
  const post = await fetch(`${config.BLOG_SERVICE_URL}/post/${id}`, {
    method: 'GET',
  }).then((res) => res.json())

  return post
}

const fetchAuthors = async (): Promise<Store.Author[]> => {
  const authors = await fetch(`${config.BLOG_SERVICE_URL}/authors`, {
    method: 'GET',
  }).then((res) => res.json())

  return authors
}

const fetchTags = async (): Promise<Store.Author[]> => {
  const authors = await fetch(`${config.BLOG_SERVICE_URL}/tags`, {
    method: 'GET',
  }).then((res) => res.json())

  return authors
}

export default {
  fetchAllPostPreviews,
  fetchAllPosts,
  fetchPost,
  fetchAuthors,
  fetchTags,
}
