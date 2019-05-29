import React from 'react'
import styled from '@emotion/styled'

import { BlogFeed, BlogDescription } from '../components/Blog'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Search from '../components/Search'

const BlogFeedContainer = styled.section`
  margin: 0 auto;
  max-width: 1000px;
`

const BlogHeader = styled.header`
  width: 500px;
  padding: 4em 5px;
  margin: 0 auto;
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