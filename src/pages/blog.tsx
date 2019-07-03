import React from 'react'
import styled from '@emotion/styled'

import { BlogFeed, BlogDescription } from '../components/Blog'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Search from '../components/Search'
import { media } from '../globals'

const BlogFeedContainer = styled.section`
  margin: 0 auto;
  max-width: 1000px;
`

const BlogHeader = styled.header`
  width: 500px;
  padding: 3em 5px 5em;
  margin: 0 auto;
  ${media.phablet`
    width: inherit;
    padding: 2em 0 3em;
  `}
`

const BlogIndex = () => {
  const searchIndices = [
    { name: 'Posts', title: 'Blog Posts'},
  ]

  return (
    <Layout>
      <SEO
        title="All posts"
        keywords={['blog', 'gatsby', 'javascript', 'react']}
      />
      <BlogFeedContainer id="blog">
        <BlogHeader>
          <BlogDescription />
          <Search indices={searchIndices} />
        </BlogHeader>
        <BlogFeed />
      </BlogFeedContainer>
    </Layout>
  )  
}

export default BlogIndex