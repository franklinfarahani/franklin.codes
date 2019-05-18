/**
 * Blog description component that queries for data
 * with Gatsby's useStaticQuery hook
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

import { config } from '../globals'

const { fontSizes } = config

const BioContainer = styled.div`
  width: 500px;
  padding: 100px 5px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`

const Image = styled(Img)`
  display: block;
  border-radius: 50%;
  margin-right: 20px;
`

const BioText = styled.p`
  font-size: ${fontSizes.text[1]}px;
`

const Bio = () => {
  const data = useStaticQuery(bioQuery)
  const { author, social } = data.site.siteMetadata
  
  return (
    <BioContainer>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
      />
      <BioText>
        A coding blog written by{' '} 
        <a href={`https://twitter.com/${social.twitter}`}>
          @{social.twitter}
        </a>
        <br />
        about web development, and related topics
      </BioText>
    </BioContainer>
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 56, height: 56, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
