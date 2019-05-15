import React from 'react'
import styled from '@emotion/styled'

import { config } from '../globals'
import getMonth from '../utils/getMonth'


const ContactContainer = styled.div`
  margin: 20vh auto 5vh;
  max-width: 1000px;
`

const DateTag = styled.span`
  display: inline-block;
  line-height: 1.4;
  padding: 1px 5px 0 4px; 
  margin-right: 6px;
  font-size: ${config.fontSizes.heading[0]}px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${props=>props.theme.bg};
  background-color: ${props=>props.theme.text};
  border-radius: ${config.borderRadius.sharp};
`

const Status = styled.div`  
  h3 {
    font-size: ${config.fontSizes.heading[4]}px;
    margin-bottom: 0;
  }

  p {
    display: flex;
    align-items: center;
    margin-bottom: 1.5vh;
  }
`

const EmailLink = styled.a`
  margin-bottom: -2px;
  position: relative;
  &::after {
    content: " ";
    display: block;
    position: absolute;
    right:0;
    left:0;
    bottom: -2px;
    border-bottom: 2px solid ${props=>props.theme.primary};
    transition: ${config.transition};
    z-index:-1;
  }
  &:focus,
  &:hover {
    color: ${props=>props.theme.link};
  }
`

type ContactProps = {
  isBusy: boolean
  data: Site
}

const Contact = ({isBusy, data}: ContactProps) => {
  
  const { email } = data.siteMetadata.social
  
  return (
    <ContactContainer id="contact">  
      {isBusy ? 
        <Status>
          <h3>Let's get in touch!</h3> 
          <p><DateTag>{getMonth()}</DateTag>I'm not looking for employment opportunities at the moment, but I'd be happy to talk anyway!</p>
        </Status> :
        <Status>
          <h3>Let's talk about your next project!</h3> 
          <p><DateTag>{getMonth()}</DateTag>I'm currently looking for more employment and freelance opportunities.</p>
        </Status>
      }
      <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
    </ContactContainer>
  )
}

export default Contact