import { name, description, socialLinks, server, blogToken } from '../../config.json'

export const BLOG_TOKEN = blogToken || ''
export const SERVER_URL = server || ''
export const NAME: string = name || ''
export const DESCRIPTION: string = description || ''
export const SOCIAL_LINKS: { name: string; source: string }[] = socialLinks || []
