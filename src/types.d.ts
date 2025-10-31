/// <reference path="../.astro/types.d.ts" />

// Image imports
declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.webp' {
  const content: string
  export default content
}

// Font imports
declare module '*.woff' {
  const content: string
  export default content
}

declare module '*.woff2' {
  const content: string
  export default content
}

// Utility types
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

// Site metadata types
interface SiteMetadata {
  title: string
  description: string
  siteUrl: string
  author: {
    name: string
    bio: string
    avatar: string
  }
  social: {
    twitter: string
    github: string
    linkedin: string
    email: string
  }
}

// Blog post types
interface BlogPost {
  title: string
  description: string
  date: Date
  updatedDate?: Date
  draft?: boolean
  featured?: boolean
  image?: string
  tags?: string[]
  readingTime?: string
}

// Project types
interface Project {
  title: string
  description: string
  date: Date
  tags?: string[]
  link?: string
  repo?: string
  image?: string
  featured?: boolean
}

// Theme types
type Theme = 'light' | 'dark'

// Global window extensions

// Environment variables
interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string
  readonly PUBLIC_SITE_TITLE: string
  readonly PUBLIC_SITE_DESCRIPTION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Global window extensions
declare global {
  interface Window {
    __INITIAL_THEME__?: 'light' | 'dark'
  }
}

export {}
