import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Hero from '../components/Hero'
import Work from '../components/Work'


type HomeProps = {
  data: {
    projects: AllProjectsMarkdown
  }
}

const IndexPage = ({ data }: HomeProps) => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Hero />
    <Work data={data.projects.edges} />
  </Layout>
)
  


export default IndexPage

export const pageQuery = graphql`
  query {
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
  }
`
