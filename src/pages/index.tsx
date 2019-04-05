import React from 'react'
import AnchorLink from '../components/AnchorLink'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import mixins from '../utils/mixins'

import {Twitter, Github, LinkedinIn} from 'emotion-icons/fa-brands'


const HeroContainer = styled.section`
  min-height: calc(100vh - 113px);
  position: relative;
  padding-top: calc(17vh + 30 * ((100vw - 320px) / 680));

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
  height: calc(100px + 30 * ((100vw - 320px) / 680));
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

const SayHello = styled.div`
  font-size: 7px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <HeroContainer>
      <ContactFloat>
        <Socials>
          <li><IconTwitter /></li>
          <li><IconGithub /></li>
          <li><IconLinkedin /></li>
        </Socials>
        <SayHello>
          Say Hello
        </SayHello>

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
