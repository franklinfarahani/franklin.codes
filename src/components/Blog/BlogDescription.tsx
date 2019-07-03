import React from 'react'
import styled from '@emotion/styled'

import { config, media } from '../../globals'

const { fontSizes } = config

const BlogDescriptionContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  ${media.phablet`width: inherit;`}
`

const BlogDescriptionText = styled.div`
  margin: 0 auto;
  font-size: ${fontSizes.blogDescription}em;
  font-weight: 500;
  text-align: center;
  ${media.phablet`
    br {
      display: none;
    }
  `}
`
/**
 * Blog description component that describes the blog(!!!) and
 * acts as a header for the blog posts page
 * 
 */
const BlogDescription = () => {
  
  return (
    <BlogDescriptionContainer>
      <BlogDescriptionText>
        My coding blog about JavaScript, <br/>Web Development, and related topics.
      </BlogDescriptionText>
    </BlogDescriptionContainer>
  )
}

export default BlogDescription
