import React from 'react'
import { Link, graphql } from 'gatsby'

import BlogFeed from '../components/BlogFeed'
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

  return (
    <Layout>
      <SEO
        title="All posts"
        keywords={['blog', 'gatsby', 'javascript', 'react']}
      />
      <BlogFeed data={data.postsPreview.edges} />
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