import React from 'react'
import styled from '@emotion/styled'

import { BlogFeed } from '../Blog'

const BlogFeedContainer = styled.section`
  margin: 0 auto;
  max-width: 1000px;
  h2:first-of-type {
    font-weight: 700;
    margin-bottom: 5vh;
    span {
      font-weight: 500;
      color: ${props => props.theme.primary};
    }
  }
`

const BlogPreview = () => {
  return (
    <BlogFeedContainer id="blog">
      <h2>
        <span>{'# '}</span>Blog
      </h2>
      <BlogFeed quantity={4} />
    </BlogFeedContainer>
  )
}

export default BlogPreview