const set = <T>(key: string, value: T): void => {
  try {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value))
    }
  } catch (error) {
    console.error(error)
  }
}

const get = <T>(key: string): T | undefined => {
  try {
    const v = localStorage.getItem(key)

    if (v) return JSON.parse(v)
  } catch (error) {
    console.error(error)
  }
}

export default {
  set,
  get,
}
