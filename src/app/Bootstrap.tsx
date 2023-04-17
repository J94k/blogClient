import { FC, useEffect, useState } from 'react'
import { log } from 'shared/utils/log'
import blogService from 'shared/services/blogService'
import store from './store'

const borderOfDevErrors = 3

const Bootstrap: FC = () => {
  const [amountOfErrors, setAmountOfErrors] = useState(0)

  const increaseAmountOfErrors = (n = 1) =>
    setAmountOfErrors((prevAmount) => (prevAmount += n))

  useEffect(() => {
    const fetchMainData = async () => {
      store.setPostsPending(true)

      try {
        const postPreviews = await blogService.fetchAllPostPreviews()
        // @ts-ignore
        store.setPostPreviews(postPreviews)
      } catch (error) {
        log('Error while fetching posts', error)
        increaseAmountOfErrors()
      }

      try {
        const tags = await blogService.fetchTags()

        store.setTags(tags)
      } catch (error) {
        log('Error while fetching tags', error)
        increaseAmountOfErrors()
      }

      try {
        const authors = await blogService.fetchAuthors()

        store.setAuthors(authors)
      } catch (error) {
        log('Error while fetching authors', error)
        increaseAmountOfErrors()
      }

      store.setPostsPending(false)
    }

    fetchMainData()
  }, [])

  useEffect(() => {
    if (amountOfErrors > borderOfDevErrors) {
      store.setActiveBanner({
        isActive: true,
        messageId: 'underConstruction',
      })
    }
  }, [amountOfErrors])

  return null
}

export default Bootstrap
