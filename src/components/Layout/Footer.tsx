import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import AnchorLink from '../AnchorLink'
import { Twitter, Github, LinkedinIn } from 'emotion-icons/fa-brands'
import { ChevronUp } from 'emotion-icons/fa-solid'

import { config, media } from '../../globals'
import mixins from '../../utils/mixins'

const FooterWrapper = styled.footer`
  max-width: 1000px;
  margin: auto;
  padding: 40px 0;
  ${mixins.flexBetween}
  font-size: ${config.fontSizes.footer}em;
  ${media.tabletLarge`
    min-width: inherit;
    margin: 0;
    padding: 40px ${config.paddings.horizontalSide}px;
  `}
  ${media.tablet`padding: 40px 30px;`}
  ${media.phablet`
    padding: 40px 20px;
    flex-direction: column;
    align-items: start;
    ul {
      margin: 16px 0;
    }
  `}
`

const Socials = styled.ul`
  ${mixins.flexBetween}
  flex-direction: row;
  
  li {
    margin-right: 30px;
    ${media.tablet`margin-right: 20px;`}
    a {
      margin-bottom: 0;

      &::after{  
        border-bottom: none;
      }
      &:hover {
        color: ${props => props.theme.text};
        transform: scale(1.1)
      }
    }
  }
`

const IconTwitter = styled(Twitter)`
  width: 22px;
`

const IconGithub = styled(Github)`
  width: 22px;
`

const IconLinkedin = styled(LinkedinIn)`
  width: 22px;
`

const IconChevronUp = styled(ChevronUp)`
  color: ${props => props.theme.text};
  width: 12px;
  margin-right: 8px;
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author
          social {
            twitter
            github
            linkedin
            email
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  const { twitter, github, linkedin } = data.site.siteMetadata.social

  return (
    <FooterWrapper>
      <span>Built with <a href="https://github.com/franklinfarahani/franklin.codes" target="_blank" rel="noopener">React + Gatsby</a></span>
      <span>© {new Date().getFullYear()} {author}. All Rights Reserved.</span>
      <Socials>
        <li>
          <a href={`https://twitter.com/${twitter}`} title={`Follow @${twitter} on Twitter`} target="_blank" rel="noopener">
            <IconTwitter />
          </a>
        </li>
        <li>
          <a href={`https://github.com/${github}`} title={`${author}'s Github Profile`} target="_blank" rel="noopener">
            <IconGithub />
          </a>
        </li>
        <li>
          <a href={`https://www.linkedin.com/in/${linkedin}`} title={`${author}'s Linkedin Profile`} target="_blank" rel="noopener">
            <IconLinkedin />
          </a>
        </li>
      </Socials>
      <AnchorLink href="#header">
        <IconChevronUp />
        Back to Top
      </AnchorLink>
    </FooterWrapper>
  )
}

export default Footer