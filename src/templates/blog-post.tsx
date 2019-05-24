import React from 'react'
import { Link, graphql } from 'gatsby'

import { BlogDescription } from '../components/Blog'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Tag from '../components/Tag'

type BlogPostProps = {
  data: {
    site: Site
    markdownRemark: Markdown
  },
  pageContext: any
}

const BlogPostTemplate = ({data, pageContext} : BlogPostProps) => {
  const siteTitle = data.site.siteMetadata.title
  const { html, excerpt } = data.markdownRemark
  const { title, description, tags, date } = data.markdownRemark.frontmatter
  const { previous, next } = pageContext

  return (
    <Layout title={siteTitle}>
      <SEO
        title={title}
        description={description || excerpt}
      />
      <h1>{title}</h1>
      {tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
      <p>
        {date}
      </p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
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
