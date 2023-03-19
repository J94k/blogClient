import mixpanel from 'mixpanel-browser'
import config from 'config'
import localData from 'shared/utils/localData'

const domain = localData.getDomain()

const init = () => {
  mixpanel.init(config.ANALYTICS_TOKEN, {
    debug: import.meta.env.DEV,
  })
}

const track = (event: string, data: Record<string, unknown>) => {
  if (domain === 'localhost') return

  try {
    mixpanel.track(event, data)
  } catch (error) {
    console.error('On track', error)
  }
}

init()

export default {
  track,
}
