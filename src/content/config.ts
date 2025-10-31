import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content', // 'content' is the default
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      image: z.string().optional(),
      cover: image().optional(), // Featured image for blog posts
      tags: z.array(z.string()).optional(),
      // readingTime is often added by a remark plugin, so let's not define it in the base schema
      // It can be added later if needed.
    }),
})

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      image: image().optional(), // Project image
      tags: z.array(z.string()).optional(),
      link: z.string().url().optional(),
      repo: z.string().url().optional(),
    }),
})

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
}
