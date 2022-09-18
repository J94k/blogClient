import { SERVER_URL } from '../../constants'
import { parseDate } from '../../utils'

const collectPosts = (data: Blog.Posts): Blog.Posts => {
  return data
}

export enum FilterType {
  fromPresentToPast,
  fromPastToPresent,
  date,
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

export const filterPosts = (posts: Blog.Posts, filter: Filter): Blog.Posts => {
  if (filter.type === FilterType.fromPresentToPast) {
    return posts.sort((p1, p2) => {
      return parseDate(p1.attributes.date) - parseDate(p2.attributes.date)
    })
  }

  if (filter.type === FilterType.fromPastToPresent) {
    return posts.sort((p1, p2) => {
      return parseDate(p2.attributes.date) - parseDate(p1.attributes.date)
    })
  }

  return posts
}

export const fetchPosts = async (filter: Filter) => {
  try {
    const response: { data: Blog.Posts; meta: unknown } = await fetch(
      `${SERVER_URL}/api/posts`
    ).then((res) => res.json())

    return filterPosts(collectPosts(response.data), filter)
  } catch (error) {
    console.error(error)
    return []
  }
}

export const fetchPost = async (id: number): Promise<Blog.Post | null> => {
  try {
    const response = await fetch(`${SERVER_URL}/api/posts/${id}`).then((res) => res.json())

    return response?.data || null
  } catch (error) {
    console.error(error)
    return null
  }
}
