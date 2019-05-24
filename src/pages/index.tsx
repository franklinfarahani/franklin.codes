import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { Hero, Work, BlogPreview, Contact } from '../components/Home'

import inspect from '../utils/inspect'


type HomeProps = {
  data: {
    socials: Site
    projects: AllProjectsMarkdown
  }
}

const IndexPage = ({ data }: HomeProps) => {

  inspect()

  return (
    <Layout>
      <SEO title="Front-end Engineer" keywords={['gatsby', 'application', 'react']} />
      <Hero data={data.socials}/>
      <Work data={data.projects.edges} />
      <BlogPreview />
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
  }
`
