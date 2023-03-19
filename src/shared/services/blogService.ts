import config from 'config'

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
  const authors = await fetch(`${config.BLOG_SERVICE_URL}/authors`, {
    method: 'GET',
  }).then((res) => res.json())

  return authors as Store.Author[]
}

const fetchTags = async (): Promise<string[]> => {
  const tags = await fetch(`${config.BLOG_SERVICE_URL}/tags`, {
    method: 'GET',
  }).then((res) => res.json())

  return tags as string[]
}

export default {
  fetchAllPostPreviews,
  fetchPost,
  fetchAuthors,
  fetchTags,
}
