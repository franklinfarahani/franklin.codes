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

const { fontSizes } = config

const ArticleWrapper = styled.article`
  
`

const FeaturedImage = styled.div`
  margin: 0 -60px;
`

const ArticleBodyWrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 700px 1fr;
  grid-gap: 20px;
`

const LeftSidebar = styled.aside`
  grid-row-start: 2;
  grid-column-start: 1;
`

const ArticleHeader = styled.header`
  grid-row-start: 1;
  grid-column-start: 2;
  h1 {
    font-size: ${fontSizes.article.title}em;
    font-weight: 500;
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
  font-size: ${fontSizes.article.body}em;
  grid-row-start: 2;
  grid-column-start: 2;
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
        <FeaturedImage>
          {cover.childImageSharp && 
            <Img fluid={cover.childImageSharp.fluid} />
          }
        </FeaturedImage>
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
            fluid(maxWidth: 1920, maxHeight: 530, quality: 100) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    }
  }
`
