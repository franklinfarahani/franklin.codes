import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import AnchorLink from './AnchorLink'
import { Twitter, Github, LinkedinIn } from 'emotion-icons/fa-brands'

import { config } from '../globals'
import mixins from '../utils/mixins'

const FooterWrapper = styled.footer`
  padding: 40px 60px;
  ${mixins.flexBetween}
  font-size: ${config.fontSizes.heading[0]}px;
  background: ${props => props.theme.bg};
  color: ${props => props.theme.text};
`

const Socials = styled.ul`
  ${mixins.flexBetween}
  flex-direction: row;
  
  li {
    margin-right: 20px;
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
  ${mixins.icon}
`

const IconGithub = styled(Github)`
  ${mixins.icon}
`

const IconLinkedin = styled(LinkedinIn)`
  ${mixins.icon}
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
  const { twitter, github, linkedin, email } = data.site.siteMetadata.social

  return (
    <FooterWrapper>
      <span>Built with <a href="https://github.com/franklinfarahani/franklin.codes">React + Gatsby</a></span>
      <span>© {new Date().getFullYear()} {author}. All Rights Reserved.</span>
      <Socials>
        <li>
          <a href={`https://twitter.com/${twitter}`} title={`Follow @${twitter} on Twitter`} target="_blank">
            <IconTwitter />
          </a>
        </li>
        <li>
          <a href={`https://github.com/${github}`} title={`${author}'s Github Profile`} target="_blank">
            <IconGithub />
          </a>
        </li>
        <li>
          <a href={`https://www.linkedin.com/in/${linkedin}`} title={`${author}'s Linkedin Profile`} target="_blank">
            <IconLinkedin />
          </a>
        </li>
      </Socials>
      <AnchorLink href="#header">Back to Top</AnchorLink>
    </FooterWrapper>
  )
}

export default Footer