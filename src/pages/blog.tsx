import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

// interface Props {
//   data: {
//     site: {
//       siteMetadata: {
//         title: string
//       }
//     }
//     allMarkdownRemark: {
//       edges: {
//         node: {
//           excerpt: string
//           fields: {
//             slug: string
//           }
//           frontmatter: {
//             date: string
//             title: string
//             description: string
//           }
//         }
//       }[]
//     }
//   }
// }

type BlogIndexProps = {
  data: {
    site: Site
    allMarkdownRemark: AllMarkdown,
  },
}

class BlogIndex extends React.Component<BlogIndexProps> {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout title={siteTitle}>
        <SEO
          title="All posts"
          keywords={['blog', 'gatsby', 'javascript', 'react']}
        />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3>
                <Link to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p>{node.frontmatter.description}</p>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
