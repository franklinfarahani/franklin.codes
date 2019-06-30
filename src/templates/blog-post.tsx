import React from 'react'
import styled from '@emotion/styled'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { BlogDescription } from '../components/Blog'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Tag from '../components/Tag'
import Divider from '../components/Divider'

import { config } from '../globals'

const { fontSizes, lineHeights } = config

const ArticleWrapper = styled.article`
  
`

const FeaturedImage = styled.div`
  margin: 0 -60px;
  grid-area: image;
`

const ArticleBodyWrapper = styled.section`
  max-width: 1100px;
  margin: 40px auto;
  display: grid;
  grid-template-columns: 1fr 700px 1fr;
  grid-template-areas:
    "..... title .."
    "..... image .."
    "tldr  body  .."
    "share body  ..";
  grid-row-gap: 32px;
  grid-column-gap: 60px;
`

const LeftSidebar = styled.aside`
  grid-area: tldr;
`

const ArticleHeader = styled.header`
  grid-area: title;

  h1 {
    font-size: ${fontSizes.article.title}em;
    font-weight: 500;
    line-height: ${lineHeights[1]};
    margin: 14px 0;
  }
`

const ArticleMeta = styled.div`
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

const ArticleBody = styled.div`
  grid-area: body;
  font-size: ${fontSizes.article.body}em;
  line-height: ${lineHeights[4]};
  
  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.33em;
  }
  h3 {
    font-size: 1.17em;
  }
  p {
    margin-bottom: 16px;
  }
  blockquote {
    border-left: 3px solid ${props => props.theme.primary};
    margin: 30px 0;
    padding: 20px 30px;
    color: ${props => props.theme.link};
    font-size: 25px;
    p {
      margin: 0;
    }
  }

`

type BlogPostProps = {
  data: {
    site: Site
    markdownRemark: Markdown
  },
  pageContext: any
}

const BlogPostTemplate = ({data, pageContext} : BlogPostProps) => {
  const siteTitle = data.site.siteMetadata.title
  const { html, excerpt, fields } = data.markdownRemark
  const { readingTime } = fields
  const { title, description, tags, date, cover } = data.markdownRemark.frontmatter
  const { previous, next } = pageContext

  return (
    <Layout title={siteTitle}>
      <SEO
        title={title}
        description={description || excerpt}
      />
      <ArticleWrapper>
        <ArticleBodyWrapper>
          <LeftSidebar>
            <div>
              TLDR:
              {description}
            </div>
            <div>
              Share:
              <ul>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Linkedin</li>
              </ul>
            </div>
          </LeftSidebar>
          <ArticleHeader>
            <ArticleMeta>
              <time>{date}</time>
              <Divider />
              <div>{readingTime.text}</div>
            </ArticleMeta>
            <h1>{title}</h1>
            {tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
          </ArticleHeader>
          <FeaturedImage>
            {cover.childImageSharp && 
              <Img fluid={cover.childImageSharp.fluid} />
            }
          </FeaturedImage>
          <ArticleBody>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <hr/>
            <BlogDescription />

            <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                listStyle: 'none',
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={'/blog' + previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={'/blog' + next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </ArticleBody>        
        </ArticleBodyWrapper>
      </ArticleWrapper>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(
      fields: { slug: { eq: $slug } } ) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        title
        date(formatString: "D MMMM YYYY")
        description
        tags
        cover {
          childImageSharp{
            fluid(maxWidth: 820, maxHeight: 350, quality: 100) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    }
  }
`
