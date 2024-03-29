const PROJECT_NAME = 'Ratcloud'
const POSTS_PER_PAGE = 7

export default {
  PROJECT_NAME,
  POSTS_PER_PAGE,
  BLOG_SERVICE_URL: import.meta.env.VITE_BLOG_SERVICE_URL,
  CONNECTION_EMAIL: import.meta.env.VITE_CONNECTION_EMAIL,
  TELEGRAM_TARGET: import.meta.env.VITE_TELEGRAM_TARGET,
  TELEGRAM_TARGET_GROUP: import.meta.env.VITE_TELEGRAM_TARGET_GROUP,
}
