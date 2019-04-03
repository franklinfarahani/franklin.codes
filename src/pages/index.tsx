import React from 'react'
import { Link } from 'gatsby'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import AnchorLink from '../components/AnchorLink'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

const HeroContainer = styled.section`
  max-width: 1000px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <HeroContainer>
      <h1 style={{fontSize: 700}}>Hey, I'm Franklin.</h1>
      <h1>I build digital products.</h1>
      <h2>I help brands connect with their customers through good design, engaging user experience, and clean code.</h2>
      <AnchorLink href="#work">
        <span>Learn More</span>
        <span>arrow</span>
      </AnchorLink>
    </HeroContainer>
  </Layout>
)
  


export default IndexPage
