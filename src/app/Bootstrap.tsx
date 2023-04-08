import { FC, useEffect } from 'react'
import { log } from 'shared/utils/log'
import blogService from 'shared/services/blogService'
import store from './store'

const Bootstrap: FC = () => {
  useEffect(() => {
    const fetchMainData = async () => {
      store.setPostsPending(true)

      try {
        const postPreviews = await blogService.fetchAllPostPreviews()
        // @ts-ignore
        store.setPostPreviews(postPreviews)
      } catch (error) {
        log('Error while fetching posts', error)
      }

      try {
        const tags = await blogService.fetchTags()

        store.setTags(tags)
      } catch (error) {
        log('Error while fetching tags', error)
      }

      try {
        const authors = await blogService.fetchAuthors()

        store.setAuthors(authors)
      } catch (error) {
        log('Error while fetching authors', error)
      }

      store.setPostsPending(false)
    }

    fetchMainData()
  }, [])

  return null
}

export default Bootstrap
