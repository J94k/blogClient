const getDomain = (): string => {
  return window.location.hostname || document.location.host || ''
}

export default {
  getDomain,
}
