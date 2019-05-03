import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

import mixins from '../utils/mixins'
import { config } from '../globals'
import Tag from '../components/Tag'
import Divider from '../components/Divider'

const BlogPreviewContainer = styled.section`
  margin: 10vh auto;
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

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`

const Post = styled.article`
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-height: 350px;
  background: ${props => props.theme.cardBg};
  border-radius: ${config.borderRadius};
  box-shadow: ${config.shadows.low};
`

const PostMeta = styled.header`
  * {
    display: inline;
    font-size: ${config.fontSizes.heading[0]}px;
    font-weight: 400;
    color: ${props => props.theme.text};
  }
`

const PostTitle = styled.h4`
  flex: 1;
  font-size: ${config.fontSizes.heading[1]}px;
  color: ${props => props.theme.text};
  font-weight: 700;
`

const ImgContainer = styled.div`
  padding: 20px 0;
  margin: 0 -20px;
`

const PostTags = styled.div`
  /* margin-bottom: 5px; */
`

type BlogPreviewProps = {
  data: Edges<Markdown>
}

const BlogPreview = ({data}: BlogPreviewProps) => {
  return (
    <BlogPreviewContainer id="blog">
      <h2>
        <span>
          {'# '}
        </span>
        Blog
      </h2>
      <PostGrid>
        {data.map(({node}) => {
          const { frontmatter, fields } = node
          const { slug } = fields
          const { title, date, tags, cover } = frontmatter
          return (
            <Post key={slug}>
              <PostMeta>
                <time>{date}</time>
                <Divider />
                <div>X mins read</div>
              </PostMeta>
              <PostTitle>{title}</PostTitle>
              <ImgContainer>
                {cover.childImageSharp && 
                  <Img fluid={cover.childImageSharp.fluid} />
                }
              </ImgContainer>
              
                <PostTags>
                  {tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
                </PostTags>
              
            </Post>
          )
        })}
      </PostGrid>
    </BlogPreviewContainer>
  )
}

export default BlogPreview