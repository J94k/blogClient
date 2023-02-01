import config from 'config'

const fetchAllPosts = async (): Promise<unknown> => {
  const posts = await fetch(`${config.BLOG_SERVICE_URL}/posts`, {
    method: 'GET',
  }).then((res) => res.json())

  return posts
}

const fetchAuthors = async (): Promise<Store.Author[]> => {
  const authors = await fetch(`${config.BLOG_SERVICE_URL}/authors`, {
    method: 'GET',
  }).then((res) => res.json())

  return authors
}

export default {
  fetchAllPosts,
  fetchAuthors,
}
