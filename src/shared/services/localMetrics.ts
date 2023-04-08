/* eslint-disable indent */
import { Perfume } from 'perfume.js'
import { log } from 'shared/utils/log'
import telegram from 'shared/services/telegram'
import localData from 'shared/utils/localData'
import browserStore from 'shared/utils/browserStore'
import constants from 'shared/constants'

const domain = localData.getDomain()

type TrackInformation = {
  name: string
  data: unknown
  rating?: unknown
}

const track = ({ name, data, rating }: TrackInformation) => {
  try {
    telegram.sendMessage(
      JSON.stringify({
        metricName: name,
        data,
        rating,
      })
    )
  } catch (error) {
    log('Error on sending data', error)
  }
}

const localDataKey = 'analytics_data'

const trackWithLimits = (info: TrackInformation) => {
  if (domain === 'localhost') return

  const d = browserStore.get<{ deadline: number }>(localDataKey)
  const now = Date.now()

  if (d?.deadline && d.deadline < now) {
    browserStore.set(localDataKey, {
      deadline: now + constants.DAY_IN_MS,
    })
    track(info)
  }
}

export default new Perfume({
  analyticsTracker(options) {
    const { metricName, data, rating } = options

    switch (metricName) {
      case 'navigationTiming':
        trackWithLimits({ name: 'navigationTiming', data, rating })
        break
      case 'FCP':
        trackWithLimits({
          name: 'firstContentfulPaint',
          data: { duration: data },
          rating,
        })
        break
      case 'FID':
        trackWithLimits({
          name: 'firstInputDelay',
          data: { duration: data },
          rating,
        })
        break
      case 'LCP':
        trackWithLimits({
          name: 'largestContentfulPaint',
          data: { duration: data },
          rating,
        })
        break
      case 'TBT':
        trackWithLimits({
          name: 'totalBlockingTime',
          data: { duration: data },
          rating,
        })
        break
    }
  },
})
