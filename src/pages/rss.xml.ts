import rss from '@astrojs/rss'
import { getCollection, type CollectionEntry } from 'astro:content'
import type { APIRoute } from 'astro'

export const GET: APIRoute = async ({ site }) => {
  const blog = await getCollection(
    'blog',
    ({ data }: CollectionEntry<'blog'>) => {
      return import.meta.env.PROD ? !('draft' in data && data.draft) : true
    }
  )

  return rss({
    title: 'Franklin Farahani - Blog',
    description:
      'Front-end engineer who builds things for the web. Writing about JavaScript, React, TypeScript, and web development.',
    site: site!.toString(),
    items: blog.map((post: CollectionEntry<'blog'>) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: '<language>en-us</language>',
  })
}
