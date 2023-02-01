import { FC, useEffect } from 'react'
import { log } from 'shared/utils/log'
import blogService from 'shared/services/blogService'
import store from './store'

const Bootstrap: FC = () => {
  useEffect(() => {
    const fetchMainData = async () => {
      store.setPostsPending(true)

      try {
        const posts = await blogService.fetchAllPosts()

        store.setPosts(posts)
      } catch (error) {
        log('Loading posts', error)
      }

      try {
        const authors = await blogService.fetchAuthors()

        store.setAuthors(authors)
      } catch (error) {
        log('Loading authors', error)
      }

      store.setPostsPending(false)
    }

    fetchMainData()
  }, [])

  return null
}

export default Bootstrap
