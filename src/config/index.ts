const PROJECT_NAME = 'Ratcloud'
const POSTS_PER_PAGE = 7

export default {
  PROJECT_NAME,
  POSTS_PER_PAGE,
  BLOG_SERVICE_URL: import.meta.env.VITE_BLOG_SERVICE_URL,
  CONNECTION_EMAIL: import.meta.env.VITE_CONNECTION_EMAIL,
}
