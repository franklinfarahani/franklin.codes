import React, { Fragment, useState, useEffect } from 'react'
import styled from '@emotion/styled'

import AnchorLink from '../components/AnchorLink'
import SlideReveal from '../components/SlideReveal'
import FadeReveal from '../components/FadeReveal'
import LastTrack from '../components/LastTrack'

import mixins from '../utils/mixins'
import { config } from '../globals'
import { sizes } from '../globals/media'

import { Twitter, Github, LinkedinIn } from 'emotion-icons/fa-brands'
import { CommentAlt } from 'emotion-icons/fa-solid'

const { phone, large } = sizes

const HeroContainer = styled.section`
  min-height: calc(100vh - 113px);
  position: relative;
  display: flex;
  align-items: center;
`

const HeroContent = styled.div`
  h1 {
    font-size: 7.5vw;
    line-height: 1;
    margin: 0;
  }

  h2 {
    max-width: 39.5ch;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 3vh;
    margin-bottom: 4vh;
  }
`

const LearnMore = styled(AnchorLink)`
  ${mixins.button}
  color: ${props => props.theme.bg};
  background: linear-gradient(${props => props.theme.primary}, ${props => props.theme.secondary});
  transform: translateY(2vh);
  &:hover {
    transform: translateY(calc(2vh - 3px));
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
    div:first-of-type {
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
  width: calc(48px + 2 * ((100vw - ${phone}px) / ${large - phone}));
  height: calc(48px + 2 * ((100vw - ${phone}px) / ${large - phone}));
  outline: 15px solid ${props => props.theme.bg};
  border-radius: 50%;
  z-index:10;
`

const IconComment = styled(CommentAlt)`
  color: ${props => props.theme.bg};
  width: 33%;
  margin-bottom: -1px;
`

type HeroProps = {
  data: Site
}

const Hero = ({data}: HeroProps) => {
  const { author } = data.siteMetadata
  const { twitter, github, linkedin, email } = data.siteMetadata.social

  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    setIsLoading(false)
  })

  return (
    <HeroContainer>
      
      <ContactFloat>
        <FadeReveal el={Fragment} isLoading={isLoading} delay={800}>
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
        </FadeReveal>
        <FadeReveal el={Fragment} isLoading={isLoading} delay={900}>
          <ComposeEmail href={`mailto:${email}`}>
            <SayHello>
              <span />
              <p>Say Hello!</p>
            </SayHello>
            <IconCommentWrapper>
              <IconComment />
            </IconCommentWrapper>          
          </ComposeEmail>
        </FadeReveal>
      </ContactFloat>
      
      <HeroContent>      
        <SlideReveal isLoading={isLoading} delay={200}>
          Hey, I'm Franklin.
        </SlideReveal>
        <SlideReveal isLoading={isLoading} delay={400}>
          I build web products.
        </SlideReveal>       
        <SlideReveal el="h2" isLoading={isLoading} delay={800}>
          I help brands connect with their customers through good design, engaging user experience, and clean code.
        </SlideReveal>
        <FadeReveal el={Fragment} isLoading={isLoading} delay={800}>
          <LearnMore href="#work">
            <span>Learn More</span>
            <span>{' '}→</span>
          </LearnMore>
        </FadeReveal>
      </HeroContent>
      <FadeReveal el={Fragment} isLoading={isLoading} delay={900}>
        <LastTrack />
      </FadeReveal>
    </HeroContainer>
  )
}

export default Hero
