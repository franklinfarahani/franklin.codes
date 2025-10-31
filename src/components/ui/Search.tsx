'use client'
import type { CollectionEntry } from 'astro:content'
import Fuse from 'fuse.js'
import { useCallback, useEffect, useState } from 'react'
import { SearchIcon } from '../icons'

type BlogPost = CollectionEntry<'blog'>
type SearchablePost = Pick<BlogPost, 'slug'> & {
  data: Pick<BlogPost['data'], 'title' | 'description' | 'tags'>
}

interface SearchResult {
  item: SearchablePost
  refIndex: number
}

interface Props {
  posts: SearchablePost[]
}

const searchConfig = {
  keys: [
    { name: 'data.title', weight: 1.0 },
    { name: 'data.description', weight: 0.8 },
    { name: 'data.tags', weight: 0.5 },
  ] as const,
  threshold: 0.3,
  distance: 100,
  ignoreLocation: true,
} as const

export default function Search({ posts }: Props) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [fuse, setFuse] = useState<Fuse<SearchablePost>>()

  useEffect(() => {
    const fuseOptions = {
      ...searchConfig,
      keys: [...searchConfig.keys],
    }
    setFuse(new Fuse(posts, fuseOptions))
  }, [posts])

  const handleSearch = useCallback(
    (searchQuery: string) => {
      setQuery(searchQuery)
      if (!fuse || !searchQuery.trim()) {
        setResults([])
        return
      }
      setResults(fuse.search(searchQuery))
    },
    [fuse]
  )

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search posts..."
          className="w-full px-4 py-2 pr-10 text-base rounded-lg bg-white dark:bg-almost-black border-2 border-lighter-grey dark:border-darkest-grey focus:border-yellow dark:focus:border-yellow outline-none transition-colors"
          aria-label="Search posts"
        />
        <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-grey dark:text-darker-grey pointer-events-none" />
      </div>

      {query.length > 0 && (
        <div
          className="absolute z-10 w-full mt-2 bg-white dark:bg-almost-black rounded-lg shadow-lg border border-lighter-grey dark:border-darkest-grey max-h-[70vh] overflow-y-auto"
          role="listbox"
          aria-label="Search results"
        >
          {results.length > 0 ? (
            <ul className="py-2">
              {results.map(({ item: post, refIndex }) => (
                <li key={refIndex} role="option">
                  <a
                    href={`/blog/${post.slug}`}
                    className="block px-4 py-2 hover:bg-lighter-grey dark:hover:bg-darkest-grey transition-colors"
                  >
                    <h3 className="font-medium text-almost-black dark:text-white">
                      {post.data.title}
                    </h3>
                    {post.data.description && (
                      <p className="text-sm text-grey dark:text-darker-grey mt-1">
                        {post.data.description}
                      </p>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div
              className="px-4 py-6 text-center text-grey dark:text-darker-grey"
              role="status"
            >
              No posts found for &ldquo;{query}&rdquo;
            </div>
          )}
        </div>
      )}
    </div>
  )
}
