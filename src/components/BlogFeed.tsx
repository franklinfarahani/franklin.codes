import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

import { config } from '../globals'
import Tag from '../components/Tag'
import Divider from '../components/Divider'

const { fontSizes, borderRadius, shadows } = config

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
  grid-gap: 20px;
`

const Post = styled.article`
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 20px;
  min-height: 350px;
  background: ${props => props.theme.cardBg};
  border-radius: ${borderRadius.round};
  box-shadow: ${shadows.low};
`

const PostMeta = styled.header`
  * {
    display: inline;
    font-size: ${fontSizes.meta}em;
    font-weight: 400;
    color: ${props => props.theme.text};
  }
  span {
    font-weight: 700;
    font-size: unset;
  }
`

const PostContent = styled(Link)`
  display: flex;
  flex-direction: column;
`

const PostTitle = styled.h4`
  flex: 1;
  font-size: ${fontSizes.blogCardTitle}em;
  color: ${props => props.theme.text};
  font-weight: 600;
  margin-top: 6px;
  margin-bottom: 0;
`

const ImgContainer = styled.div`
  padding: 20px 0;
  margin: 0 -20px;
`

const PostTags = styled.div`
  /* margin-bottom: 5px; */
`

type BlogFeedProps = {
  quantity?: number
}

/**
 * Displays the given number of last blog posts
 * 
 * @param {number} quantity Number of posts to be displayed.
 * Will default to **all posts** if no number is specified.
 */
const BlogFeed = ({quantity}: BlogFeedProps) => {

  const data = useStaticQuery(blogQuery).postsPreview.edges

  // Set index for number of posts to be displayed based on array length or manual amount
  const previewIndex = quantity ? quantity : data.length
  return (
    <PostGrid>
      {data.slice(0, previewIndex).map(({node}: Edge<Markdown>) => {
        const { frontmatter, fields } = node
        const { slug, readingTime } = fields
        const { title, date, tags, cover } = frontmatter
        return (
          <Post key={slug}>
            <PostMeta>
              <time>{date}</time>
              <Divider />
              <div>{readingTime.text}</div>
            </PostMeta>
            <PostContent to={`/blog${slug}`}>
              <PostTitle>{title}</PostTitle>
              <ImgContainer>
                {cover.childImageSharp && 
                  <Img fluid={cover.childImageSharp.fluid} />
                }
              </ImgContainer>
            </PostContent>
              <PostTags>
                {tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
              </PostTags>
            
          </Post>
        )
      })}
    </PostGrid>
  )
}

const blogQuery = graphql`
    query {
      postsPreview: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blog/" } }
        sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
              readingTime {
                text
              }
            }
            frontmatter {
              date(formatString: "D MMMM YYYY")
              title
              description
              tags
              cover {
                childImageSharp{
                  fluid(maxWidth: 250, maxHeight: 140, quality: 100) {
                    ...GatsbyImageSharpFluid
                    presentationWidth
                  }
                }
              }
            }
          }
        }
      }
    }
  `

export default BlogFeed