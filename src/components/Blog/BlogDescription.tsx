import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'
import styled from '@emotion/styled'

import { config } from '../../globals'

const { fontSizes } = config

const BlogDescriptionContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`

// const Image = styled(Img)`
//   display: block;
//   border-radius: 50%;
//   border: 1px solid ${props=>props.theme.info};
//   margin-right: 20px;
// `

const BlogDescriptionText = styled.div`
  margin: 0 auto;
  font-size: ${fontSizes.blogDescription}em;
  font-weight: 500;
  text-align: center;
`
/**
 * Blog description component that queries for author
 * name, twitter handle, and profile pic with 
 * Gatsby's useStaticQuery hook.
 * 
 */
const BlogDescription = () => {
  // const data = useStaticQuery(blogDescriptionQuery)
  // const { author, social } = data.site.siteMetadata
  
  return (
    <BlogDescriptionContainer>
      <BlogDescriptionText>
        My coding blog about JavaScript, <br/>Web Development, and related topics.
      </BlogDescriptionText>
    </BlogDescriptionContainer>
  )
}

// const blogDescriptionQuery = graphql`
//   query blogDescriptionQuery {
//     avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
//       childImageSharp {
//         fixed(width: 56, height: 56, quality: 100) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//     site {
//       siteMetadata {
//         author
//         social {
//           twitter
//         }
//       }
//     }
//   }
// `

export default BlogDescription
