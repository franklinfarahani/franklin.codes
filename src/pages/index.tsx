import React from 'react'
import AnchorLink from '../components/AnchorLink'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import mixins from '../utils/mixins'
import { config } from '../globals'
import { sizes } from '../globals/media'

import { Twitter, Github, LinkedinIn } from 'emotion-icons/fa-brands'
import { CommentAlt } from 'emotion-icons/fa-solid'

const { phone, large } = sizes

const HeroContainer = styled.section`
  min-height: calc(100vh - 113px);
  position: relative;
  padding-top: calc(17vh + 30 * ((100vw - ${phone}px) / ${large - phone}));

  h1 {
    font-size: 7.5vw;
    line-height: 1;
  }

  h2 {
    max-width: 39.5ch;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 4vh;
    margin-bottom: 10vh;
  }
`

const ContactFloat = styled.div`
  ${mixins.flexBetween}
  flex-direction: column;
  position: absolute;
  height: 55vh;
  right: 0;
  bottom: 50px;
`

const Socials = styled.ul`
  ${mixins.flexBetween}
  flex-direction: column;
  height: calc(100px + 30 * ((100vw - ${phone}px) / ${large - phone}));

  li a {
    margin-bottom: 0;

    &::after{  
      border-bottom: none;
    }
    &:hover {
      color: ${props => props.theme.text};
      transform: scale(1.1)
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

const ComposeEmail = styled.a`
  ${mixins.flexBetween}
  flex-direction: column;
  position: relative;

  &:hover {
    &>div:first-child {
      transform: rotate(-90deg) translate(103px,-10px);
    }
  }
`

const SayHello = styled.div`
  ${mixins.flexCenter}
  position: absolute;
  transform: rotate(-90deg) translate(88px,-10px);
  transform-origin: 50% 0;
  white-space: nowrap;
  transition: transform ${config.transition};
  p {
    padding-left: 15px;
    display: inline-block;
    font-size: 14px;
    margin-bottom: 0;
  }

  span {
    position: relative;
    width: 100px;
    height: 1px;
    background-color: ${props=>props.theme.info};
    position: relative;
    transition: transform ${config.transition}
  }
`

const IconCommentWrapper = styled.div`
  ${mixins.flexCenter}
  background-color: ${props => props.theme.text};
  width: calc(52px + 2 * ((100vw - ${phone}px) / ${large - phone}));
  height: calc(52px + 2 * ((100vw - ${phone}px) / ${large - phone}));
  outline: 15px solid ${props => props.theme.bg};
  border-radius: 50%;
  z-index:10;
`

const IconComment = styled(CommentAlt)`
  color: ${props => props.theme.bg};
  width: 33%;
  margin-bottom: -1px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <HeroContainer>
      <ContactFloat>
        <Socials>
          <li>
            <a href="https://twitter.com/frankfarahani" title="Follow @frankfarahani on Twitter" target="_blank">
              <IconTwitter />
            </a>
          </li>
          <li>
            <a href="https://github.com/franklinfarahani" title="Franklin Farahani's Github Profile" target="_blank">
              <IconGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/franklin-farahani" title="Franklin Farahani's Linkedin Profile" target="_blank">
              <IconLinkedin />
            </a>
          </li>
        </Socials>
        <ComposeEmail href="mailto:me@franklinfarahani.ca">
          <SayHello>
            <span />
            <p>Say Hello!</p>
          </SayHello>
          <IconCommentWrapper>
            <IconComment />
          </IconCommentWrapper>          
        </ComposeEmail>

      </ContactFloat>

      <h1>Hey, I'm Franklin.</h1>
      <h1>I build digital products.</h1>
      <h2>I help brands connect with their customers through good design, engaging user experience, and clean code.</h2>
      <AnchorLink href="#work">
        <span>Learn More</span>
        <span>{' '}→</span>
      </AnchorLink>
    </HeroContainer>
  </Layout>
)
  


export default IndexPage
