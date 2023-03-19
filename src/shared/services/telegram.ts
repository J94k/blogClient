import config from 'config'

const sendMessage = async (message: string): Promise<boolean> => {
  if (!(config.TELEGRAM_TARGET && config.TELEGRAM_TARGET_GROUP)) return false

  try {
    await fetch(
      `${config.TELEGRAM_TARGET}/sendMessage?chat_id=${config.TELEGRAM_TARGET_GROUP}&text=${message}`
    )

    return true
  } catch {
    return false
  }
}

export default {
  sendMessage,
}
