import React from 'react'
import { Location } from '@reach/router'
import styled from '@emotion/styled'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Twitter, Facebook, LinkedinIn } from 'emotion-icons/fa-brands'

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
    "......... title .."
    "......... image .."
    "left-side body  ..";
  grid-row-gap: 32px;
  grid-column-gap: 60px;
`

const LeftSidebar = styled.aside`
  grid-area: left-side;
`

const Tldr = styled.div`
  font-size: ${fontSizes.article.tldr}em;
  margin-bottom: 5em;

  header {
    font-weight: 700;
    color: ${props => props.theme.primary};
  }
  span {
    font-weight: 500;
    color: ${props => props.theme.link};    
  }
`

const Share = styled.div`
  position: sticky;
  top: 10em;
  ul {
    margin-top: 20px;
    li {
      margin: 12px 0;
    }
  }
`

const IconTwitter = styled(Twitter)`
  width: 22px;
  height: 100%;
`

const IconFacebook = styled(Facebook)`
  width: 21px;
  height: 100%;
`

const IconLinkedIn = styled(LinkedinIn)`
  width: 21px;
  height: 100%;
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
  ul, ol {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    ul, ol, p {
      margin: 0;
    }
  }
  ul {
    list-style-type: disc;
  }
  ol {
    list-style: none;
    counter-reset: custom-counter;
    li {
      counter-increment: custom-counter;
      &::before {
        content: counter(custom-counter) " .";
        position: relative;
        font-size: 12px;
        padding: 2px 8px 1px;
        margin-right: 8px;
        bottom: 3px;
        font-weight: 600;
      }
    }
  }
  blockquote {
    border-left: 3px solid ${props => props.theme.primary};
    margin: 30px 0;
    padding: 20px 30px;
    color: ${props => props.theme.link};
    font-size: ${fontSizes.article.blockquote}em;
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
  const { social } = data.site.siteMetadata
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
            <Tldr>
              <header>TL;DR</header>
              <span>{description}</span>
            </Tldr>
            <Share>
              Share:
              {/* Grab address from Location to be used in creating 'Share' links
              Also use first 2 article tags as hashtags for twitter sharing */}
              <Location>
                {({ location }) => {
                  return (
                    <ul>
                      <li>
                        <a
                          rel="noopener"
                          target="_blank"
                          href={'https://twitter.com/intent/tweet' +
                            `?text=${title}` +
                            `&via=${social.twitter}` +
                            `&hashtags=${tags.slice(0,2).map((tag) => tag+',')}` +
                            `&url=${location.href}`}>
                              <IconTwitter />
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener"
                          target="_blank"
                          href={'https://www.facebook.com/sharer/sharer.php' +
                            `?u=${location.href}`}>
                              <IconFacebook />
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener"
                          target="_blank"
                          href={'https://www.linkedin.com/sharing/share-offsite/' +
                            `?url=${location.href}`}>
                              <IconLinkedIn />
                        </a>
                      </li>
                    </ul>
                  )
                }}
              </Location>
            </Share>
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
        social {
          twitter
        }
      }
    }
    markdownRemark(
      fields: { slug: { eq: $slug } } ) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
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
