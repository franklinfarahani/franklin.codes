import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Hero from '../components/Hero'
import Work from '../components/Work'
import BlogPreview from '../components/BlogPreview'
import Contact from '../components/Contact'

import inspect from '../utils/inspect'


type HomeProps = {
  data: {
    socials: Site
    projects: AllProjectsMarkdown
    blogPreview: AllMarkdown
  }
}

const IndexPage = ({ data }: HomeProps) => {

  inspect()

  return (
    <Layout>
      <SEO title="Front-end Engineer" keywords={['gatsby', 'application', 'react']} />
      <Hero data={data.socials}/>
      <Work data={data.projects.edges} />
      <BlogPreview data={data.blogPreview.edges} />
      <Contact data={data.socials} isBusy={false} />
  </Layout>
  )
}
  


export default IndexPage

export const pageQuery = graphql`
  query {
    socials: site {
      siteMetadata {
        author
        social {
          twitter
          github
          linkedin
          email
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            id
            title
            tags
            repo
            external
            media {
              childImageSharp{
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                  presentationWidth
                }
              }
            }
          }
        }
      }
    }
    blogPreview: allMarkdownRemark(
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
