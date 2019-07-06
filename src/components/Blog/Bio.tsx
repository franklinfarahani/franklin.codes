import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

import { config, media } from '../../globals'

const { fontSizes } = config

const BioWrapper = styled.div`
  margin: 3em auto;
  display: flex;
  align-items: center;
  ${media.phablet`
    margin: 2em auto;
    align-items: start;
  `}
`

const Image = styled(Img)`
  display: block;
  border-radius: 50%;
  margin-right: 20px;
  min-width: 100px;
  ${media.phablet`
    min-width: 56px;
    width: 56px !important;
    height: 56px !important;
    margin-right: 12px;
  `}
`

const BioText = styled.div`
  margin: 0 auto;
  font-size: ${fontSizes.bio}em;
  font-weight: 500;
  a {
    display: block;
    color: ${props => props.theme.link};
    margin-bottom: 2px;
    strong {
      color: ${props => props.theme.text};
    }
  }
  p {
    font-weight: 400;
  }
`
/**
 * Bio component that queries for author
 * name, twitter handle, and profile pic with 
 * Gatsby's useStaticQuery hook.
 * 
 */
const Bio = () => {
  const data = useStaticQuery(blogDescriptionQuery)
  const { author, social } = data.site.siteMetadata
  
  return (
    <BioWrapper>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
      />
      <BioText>
        
        <a href={`https://twitter.com/${social.twitter}`} title={`Follow @${social.twitter} on Twitter`} target="_blank">
          <strong>{author}</strong> @{social.twitter}
        </a>
        <p>A front-end engineer, React enthusiast, and occasional designer based in Vancouver, BC.
        When not doing any of the above, he's either reading, listening to podcasts, or dungeon mastering.</p>        
      </BioText>
    </BioWrapper>
  )
}

const blogDescriptionQuery = graphql`
  query blogDescriptionQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 100, height: 100, quality: 100) {
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
