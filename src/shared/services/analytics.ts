import mixpanel from 'mixpanel-browser'
import config from 'config'

const init = () => {
  mixpanel.init(config.ANALYTICS_TOKEN, {
    debug: import.meta.env.DEV,
  })
}

const track = (event: string, data: Record<string, unknown>) => {
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
