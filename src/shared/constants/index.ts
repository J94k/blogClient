import { name, description, socialLinks, server } from '../../config.json'

export const SERVER_URL = server || ''
export const NAME: string = name || ''
export const DESCRIPTION: string = description || ''
export const SOCIAL_LINKS: { name: string; source: string }[] =
  socialLinks || []
