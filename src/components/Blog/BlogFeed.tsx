import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

import { config, media } from '../../globals'
import Tag from '../Tag'
import Divider from '../Divider'

const { fontSizes, borderRadius, shadows } = config

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
  grid-gap: 20px;
  ${media.phablet`
    grid-gap: 1px;
    margin: 0 -20px;
  `}
`

const Post = styled.article`
  display: grid;
  grid-template:
    "image image image" 50%
    "..... ..... ....." 20px
    "..... meta  ....." auto
    "..... title ....." 1fr
    "..... tags  ....." auto
    "..... ..... ....." 20px / 20px auto 20px;
  height: 350px;
  background: ${props => props.theme.cardBg};
  border-radius: ${borderRadius.round};
  box-shadow: ${shadows.low};
  overflow: hidden;
  ${media.phablet`
    grid-template:
      "..... ..... ..... ....." 20px
      "..... meta  ..... ....." auto
      "..... title image ....." 80px
      "..... tags  ..... ....." auto
      "..... ..... ..... ....." 20px / 20px 1fr 80px 20px;
      height: 160px;
      border-radius: 0;
  `}
`

const PostMeta = styled.header`
  grid-area: meta;
  * {
    display: inline;
    font-size: ${fontSizes.meta}em;
    font-weight: 400;
    color: ${props => props.theme.link};
  }
  span {
    font-weight: 700;
    font-size: unset;
  }
`

const PostLink = styled(Link)`
  grid-area: title;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const PostTitle = styled.h4`
  font-size: ${fontSizes.blogCardTitle}em;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 6px;
  margin-bottom: 0;
`

const ImgContainer = styled.div`
  grid-area: image;
  .gatsby-image-wrapper {
    height: 100%;
  }
  ${media.phablet`
    .gatsby-image-wrapper {
      border-radius: ${borderRadius.round};
    }
  `}
`

const PostTags = styled.div`
  grid-area: tags;
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
            <ImgContainer>
              {cover.childImageSharp && 
                <Img fluid={cover.childImageSharp.fluid} />
              }
            </ImgContainer>
            <PostMeta>
              <time>{date}</time>
              <Divider />
              <div>{readingTime.text}</div>
            </PostMeta>
            <PostLink to={`/blog${slug}`}>
              <PostTitle>{title}</PostTitle>
            </PostLink>
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
                  fluid(maxWidth: 276, quality: 100) {
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