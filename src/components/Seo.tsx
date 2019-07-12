/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type SeoProps = {
  description?: string,
  lang?: string,
  meta?: Array<{
    name?: string,
    property?: string,
    content: any,
  }>,
  /** meta keywords for the page */
  keywords?: string[],
  title?: string,
  image?: {
    src: string,
    height: string,
    width: string,
  }
} & typeof defaultProps

const defaultProps = {
  keywords: [''],
  lang: 'en',
  meta: [],
}

function Seo({ description, lang, meta, keywords, title, image }: SeoProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            keywords
            author
            social {
              twitter
            }
          }
        }
      }
    `,
  )

  const metaDescription = description || site.siteMetadata.description
  const metaImage = image && image.src ? `${site.siteMetadata.siteUrl}${image.src}` : null

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          content: metaDescription,
          name: 'description',
        },
        {
          content: site.siteMetadata.keywords.join(','),
          name: 'keywords',
        },
        {
          content: title,
          property: 'og:title',
        },
        {
          content: metaDescription,
          property: 'og:description',
        },
        {
          content: 'website',
          property: 'og:type',
        },
        {
          content: site.siteMetadata.social.twitter,
          name: 'twitter:creator',
        },
        {
          content: title,
          name: 'twitter:title',
        },
        {
          content: metaDescription,
          name: 'twitter:description',
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                content: keywords.join(', '),
                name: 'keywords',
              }
            : [],
        )
        .concat(
          image
            ? [
                {
                  property: 'og:image',
                  content: metaImage
                },
                {
                  property: 'og:image:width',
                  content: image.width
                },
                {
                  property: 'og:image:height',
                  content: image.height
                },
                {
                  name: 'twitter:card',
                  content: 'summary_large_image'
                }
              ]
            : [
                {
                  name: 'twitter:card',
                  content: 'summary'
                }
              ]
        )
        .concat(meta)}
    />
  )
}

Seo.defaultProps = defaultProps

export default Seo
