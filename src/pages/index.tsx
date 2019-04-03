import React from 'react'
import AnchorLink from '../components/AnchorLink'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

const HeroContainer = styled.section`
  padding: 10vh 0;

  h1 {
    font-size: 8.5vw;
    line-height: 1;
  }

  h2 {
    max-width: 46%;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 4vh;
    margin-bottom: 10vh;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <HeroContainer>
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
