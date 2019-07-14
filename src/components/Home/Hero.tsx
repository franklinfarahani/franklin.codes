import React, { Fragment, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import AnchorLink from '../AnchorLink'
import SlideReveal from '../Animation/SlideReveal'
import FadeInReveal from '../Animation/FadeInReveal'
import LastTrack from './LastTrack'

import mixins from '../../utils/mixins'
import { config, media } from '../../globals'
import { sizes } from '../../globals/media'

import { Twitter, Github, LinkedinIn } from 'emotion-icons/fa-brands'
import { CommentAlt, ChevronRight } from 'emotion-icons/fa-solid'

const { phone, large } = sizes
const { lineHeights, fontSizes, paddings } = config

// const HeroContainer = styled.section`
//   min-height: calc(100vh - 113px);
//   position: relative;
//   display: flex;
//   align-items: center;
//   ${media.phablet`min-height: calc(100vh - 130px);`}
//   ${media.phone`min-height: calc(100vh - 75px);`}
// `

const HeroContainer = styled('section')<{viewportHeight: number}>`
  min-height: calc(100vh - 113px);
  padding-bottom: ${paddings.vertical}px;
  position: relative;
  display: grid;
  grid-template:
    ".......   ......." 1fr
    "intro     socials" auto
    "mission   ......." auto
    "cta       email  " 1fr
    "track     email  " auto / 1fr 58px;
    ${({ viewportHeight }) => css`
      ${media.phablet`
        min-height: ${viewportHeight - 73}px;
      `}
    `}
    
    ${media.phablet`      
      grid-template:
      ".......   ......." 1fr
      "intro     intro  " auto
      "mission   mission" auto
      "cta       email  " auto / 1fr 58px;
    `}
  /* ${media.phablet`min-height: calc(100vh - 130px);`}
  ${media.phone`min-height: calc(100vh - 75px);`} */
`

const HeroIntro = styled.div`
  grid-area: intro;
  h1 {
    font-size: ${fontSizes.hero.intro}vw;
    line-height: ${lineHeights[1]};
    margin: 0;
    ${media.phablet`font-size: 7.76vh;`}
  }
`

const HeroMission = styled.div`
  grid-area: mission;
  h2 {
    max-width: 40ch;
    font-size: ${fontSizes.hero.description}em;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 3vh;
    margin-bottom: 4vh;
    ${media.phablet`margin-top: 1vh;`}
  }
`

const HeroCTA = styled.div`
  grid-area: cta;
`

const LearnMore = styled(AnchorLink)`
  ${mixins.button}
  color: ${props => props.theme.bg};
  background: linear-gradient(${props => props.theme.primary}, ${props => props.theme.secondary});
  transform: translateY(2vh);
  &:hover {
    transform: translateY(calc(2vh - 3px));
  }
  ${media.phablet`
    /* position: absolute; */
    transform: none;
    /* bottom: 20px; */
  `}
`

const IconChevronRight = styled(ChevronRight)`
  width: 9px;
  margin-left: 12px;
`

const LastTrackWrapper = styled.div`
  grid-area: track;
`

const SocialsWrapper = styled.div`
  grid-area: socials;
  ${mixins.flexCenter}
`

const SayHelloWrapper = styled.div`
  grid-area: email;
  display: flex;
  align-items: flex-end;
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

  ${media.phablet`display: none;`}
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

  ${media.phablet`display: none;`}
`

const IconCommentWrapper = styled.div`
  ${mixins.flexCenter}
  background-color: ${props => props.theme.text};
  width: calc(48px + 2 * ((100vw - ${phone}px) / ${large - phone}));
  height: calc(48px + 2 * ((100vw - ${phone}px) / ${large - phone}));
  outline: 15px solid ${props => props.theme.bg};
  border-radius: 50%;
  z-index:10;

  ${media.phablet`
    width: 56px;
    height: 56px;
    `}
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
  const [viewportHeight, setViewportHeight] = useState(0)
  
  useEffect(() => {
    setIsLoading(false)
  }, [])

  useEffect(() => {
    function handleHeightChange() {
      setViewportHeight(window.innerHeight)
    }

    handleHeightChange()

    window.addEventListener('resize', handleHeightChange)
    return () => {
      window.removeEventListener('resize', handleHeightChange)
    }
  }, [viewportHeight])

  return (
    <HeroContainer viewportHeight={viewportHeight}>
      
      <SocialsWrapper>
        <FadeInReveal as={Fragment} isLoading={isLoading} delay={800}>
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
        </FadeInReveal>
      </SocialsWrapper>
      <SayHelloWrapper>
        <FadeInReveal as={Fragment} isLoading={isLoading} delay={900}>
          <ComposeEmail href={`mailto:${email}`} aria-label="Write me an email!">
            <SayHello>
              <span />
              <p>Say Hello!</p>
            </SayHello>
            <IconCommentWrapper>
              <IconComment />
            </IconCommentWrapper>          
          </ComposeEmail>
        </FadeInReveal>
      </SayHelloWrapper>

      <HeroIntro>
        <SlideReveal as="h1" isLoading={isLoading} delay={200}>
          Hey, I'm Franklin.
        </SlideReveal>
        <SlideReveal as="h1"  isLoading={isLoading} delay={400}>
          I build things for the web.
        </SlideReveal>  
      </HeroIntro>
      <HeroMission>
        <SlideReveal as="h2" isLoading={isLoading} delay={800}>
          I help brands connect with their customers through good design, engaging user experience, and clean code.
        </SlideReveal>
      </HeroMission>
      <HeroCTA>
        <FadeInReveal as={Fragment} isLoading={isLoading} delay={800}>
          <LearnMore href="#work">
            <span>Learn More</span>
            <IconChevronRight />
          </LearnMore>
        </FadeInReveal>
      </HeroCTA>
      <LastTrackWrapper>
        <FadeInReveal as={Fragment} isLoading={isLoading} delay={900}>
          <LastTrack />
        </FadeInReveal>
      </LastTrackWrapper>      
    </HeroContainer>
  )
}

export default Hero
