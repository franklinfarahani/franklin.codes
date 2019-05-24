import React from 'react'
import styled from '@emotion/styled'

import BlogFeed from '../components/BlogFeed'
import BlogDescription from '../components/BlogDescription'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Search from '../components/Search'

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
        <BlogDescription />
        <Search indices={searchIndices} />
        <BlogFeed />
      </BlogFeedContainer>
    </Layout>
  )  
}

export default BlogIndex