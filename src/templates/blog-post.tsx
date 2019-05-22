import React from 'react'
import { Link, graphql } from 'gatsby'

import BlogDescription from '../components/BlogDescription'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Tag from '../components/Tag'

// TODO: fix 'any' types

type BlogPostProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        author: string,
      },
    }
    markdownRemark: {
      id: number
      excerpt: string
      html: any
      frontmatter: {
        title: string
        date: string
        description: string
        tags: string[],
      },
    },
  }
  pageContext: any
}

const BlogPostTemplate = ({data, pageContext} : BlogPostProps) => {
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata.title
    const { previous, next } = pageContext

    return (
      <Layout title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1>{post.frontmatter.title}</h1>
        {post.frontmatter.tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
        <p>
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr/>
        <BlogDescription />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={'/blog' + previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={'/blog' + next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`
