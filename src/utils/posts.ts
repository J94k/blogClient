import { SERVER_URL } from '../constants'

interface Post {
  author: string
  content: string
  date: string
  description: string
  title: string
}

const collectPosts = (data: {
  [name: string]: {
    [date: string]: {
      author: string
      date: string
      post: Post
    }
  }
}): Post[] => {
  const allPosts = []

  Object.values(data).forEach((dateObj) =>
    Object.values(dateObj).forEach(({ post }) => allPosts.push(post))
  )

  return allPosts
}

export enum FilterType {
  fromPresentToPast,
  fromPastToPresent,
  date,
  author,
  // @todo tags
  // @todo date range
}

type DateRange = {
  from: string
  to: string
}

type Tags = string[]

export interface Filter {
  type: FilterType
  value?: string | Tags | DateRange
}

export const filterPosts = (posts: Post[], filter: Filter): Post[] => {
  if (filter.type === FilterType.fromPresentToPast) {
    return posts.sort((p1, p2) => Number(p2.date) - Number(p1.date))
  }

  if (filter.type === FilterType.fromPastToPresent) {
    return posts.sort((p1, p2) => Number(p1.date) - Number(p2.date))
  }

  if (filter.type === FilterType.author) {
    return posts.filter(({ author }) => {
      author === filter.value
    })
  }

  return posts
}

export const fetchPosts = async (filter: Filter) => {
  try {
    const response = await fetch(`${SERVER_URL}/posts/all`).then((response) =>
      response.json()
    )

    return filterPosts(collectPosts(response.data), filter)
  } catch (error) {
    console.error(error)
    return []
  }
}

export const fetchPost = async (
  author: string,
  date: string
): Promise<Post | null> => {
  try {
    const response = await fetch(`${SERVER_URL}/posts/${author}/${date}`).then(
      (res) => res.json()
    )

    if (response?.msg === 'Not found') return null

    return response?.data?.post || null
  } catch (error) {
    console.error(error)
    return null
  }
}
