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

const BlogDescriptionContainer = styled.div`
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

const BlogDescriptionText = styled.p`
  font-size: ${fontSizes.text[1]}px;
`

const BlogDescription = () => {
  const data = useStaticQuery(blogDescriptionQuery)
  const { author, social } = data.site.siteMetadata
  
  return (
    <BlogDescriptionContainer>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
      />
      <BlogDescriptionText>
        A coding blog written by{' '} 
        <a href={`https://twitter.com/${social.twitter}`}>
          @{social.twitter}
        </a>
        <br />
        about web development, and related topics
      </BlogDescriptionText>
    </BlogDescriptionContainer>
  )
}

const blogDescriptionQuery = graphql`
  query blogDescriptionQuery {
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

export default BlogDescription
