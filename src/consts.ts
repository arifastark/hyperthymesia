import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'arifa.stark',
  description: 'arifa.stark',
  href: 'https://arifastark.github.io',
  author: 'Arifa',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/about',
    label: 'about',
  },
]
export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/arifastark',
    label: 'GitHub',
  },
  {
    href: 'mailto:arifa.humbatova@tutamail.com',
    label: 'Email',
  },
  {
    href: 'https://linkedin.com/in/arifa-humbatova-25a9b33b4/',
    label: 'LinkedIn',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}