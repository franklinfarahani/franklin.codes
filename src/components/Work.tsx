import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

import mixins from '../utils/mixins'
import { config } from '../globals'
import Tag from '../components/Tag'
import FadeUpReveal from '../components/FadeUpReveal'

import { Code, ExternalLinkAlt } from 'emotion-icons/fa-solid'


const ProjectsContainer = styled.section`
  margin: 10vh auto;
  max-width: 1000px;
  min-height: calc(100vh - 113px);
  h2:first-of-type {
    font-weight: 700;
    padding-top: 5vh;
    margin-bottom: 5vh;
    span {
      font-weight: 500;
      color: ${props => props.theme.primary};
    }
  }
`

const Project = styled.article`
  display: grid;
  grid-template-columns: 2fr 3fr;
  background: ${props => props.theme.cardBg};
  border-radius: ${config.borderRadius.round};
  box-shadow: ${config.shadows.low};
`

const Content = styled.div`
  grid-column: 1 / 2;
  padding: 40px 50px;
  display: grid;
  grid-template-rows: auto 1fr auto;
`

const ImgContainer = styled.div`
  grid-column: 2 / 3;
`

const ContentHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 30px auto;
`

const ContentId = styled.h3`
  grid-row: 1 / 3;
  font-weight: 600;
  font-size: ${config.fontSizes.heading[7]}px;
  line-height: ${config.lineHeights[0]};
  margin: 0;
  color: ${props => props.theme.primary};
`

const ContentLinks = styled.div`
  grid-row: 1 / 2;
`

const ContentLink = styled.a`
  margin-left: 16px;
`

const IconCode = styled(Code)`
  ${mixins.icon}
  color: ${props => props.theme.info};
`

const IconExternalLink = styled(ExternalLinkAlt)`
  ${mixins.icon}
  color: ${props => props.theme.info};
`

const ContentBody = styled.div`
  h3 {
    font-size: ${config.fontSizes.heading[3]}px;
  }
  p {
    font-size: ${config.fontSizes.text[0]}px;
    line-height: ${config.lineHeights[4]};
  }
`

const ContentTags = styled.div`
  margin-bottom: 5px;
`

type WorkProps = {
  data: Edges<ProjectMarkdown>
}

const Work = ({data}: WorkProps) => {
  return (
    <ProjectsContainer id="work">
      <h2>
        <span>{'# '}</span>
        Featured Work
      </h2>
      {data.map(({node}) => {
        
        const { frontmatter, html } = node
        const { id, title, repo, external, tags, media } = frontmatter
        
        return (
          <FadeUpReveal key={id}>
            <Project>
              <Content>
                <ContentHeader>
                  <ContentId>{'0' + id.toString().slice(-2)}</ContentId>
                  <ContentLinks>
                    <ContentLink href={repo} title={title + ' Github repo'} target="_blank">
                      <IconCode />
                    </ContentLink>
                    <ContentLink href={external} title={'View live'} target="_blank">
                      <IconExternalLink />
                    </ContentLink>
                  </ContentLinks>
                </ContentHeader>
                <ContentBody>
                  <h3>{title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: html }} />
                </ContentBody>
                <ContentTags>
                  {tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
                </ContentTags>
              </Content>
              <ImgContainer>
                {media.childImageSharp && 
                  <Img fluid={media.childImageSharp.fluid} />
                }
              </ImgContainer>
            </Project>
          </FadeUpReveal>
        )

      })}
    </ProjectsContainer>
  )
}

export default Work