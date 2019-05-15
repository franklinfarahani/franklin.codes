import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

type BlogIndexProps = {
  data: {
    metadata: Site
    postsPreview: AllMarkdown,
  },
}

const BlogIndex = ({data}: BlogIndexProps) => {

  const siteTitle = data.metadata.siteMetadata.title
  const posts = data.postsPreview.edges

  return (
    <Layout title={siteTitle}>
      <SEO
        title="All posts"
        keywords={['blog', 'gatsby', 'javascript', 'react']}
      />
      {posts.map(({ node }) => {
        const { frontmatter, fields } = node
        const { slug, readingTime } = fields
        const { title, date, tags, cover, description } = frontmatter
        
        return (
          <div key={slug}>
            <h3>
              <Link to={'/blog' + slug}>
                {title}
              </Link>
            </h3>
            <small>{date}</small>
            <p>{description}</p>
          </div>
        )
      })}
    </Layout>
  )  
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    
    metadata: site {
      siteMetadata {
        title
      }
    }

    postsPreview: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date(formatString: "D MMMM YYYY")
            title
            description
            tags
            cover {
              childImageSharp{
                fluid(maxWidth: 250, maxHeight: 140, quality: 100) {
                  ...GatsbyImageSharpFluid
                  presentationWidth
                }
              }
            }
          }
        }
      }
    }
  }
`