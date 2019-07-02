import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

import mixins from '../../utils/mixins'
import { config, media } from '../../globals'
import Tag from '../Tag'
import FadeUpReveal from '../Animation/FadeUpReveal'

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
  grid-template:
    "content image" auto / 2fr 3fr;
  background: ${props => props.theme.cardBg};
  border-radius: ${config.borderRadius.round};
  box-shadow: ${config.shadows.low};
  ${media.phablet`
    grid-template:
      "image"   auto
      "content" auto;
    margin: 0 -20px;
    border-radius: 0;
  `}
`

const Content = styled.div`
  grid-area: content;
  padding: 40px 50px;
  display: grid;
  grid-template:
    "id    links" auto
    "title title" auto
    "text   text" 1fr
    "tags   tags" auto / 1fr auto;
  ${media.phablet`
    padding: 30px 30px;
    grid-template:
      "id     title  links" auto
      "text   text    text" 1fr
      "tags   tags    tags" auto / auto 1fr auto;
  `}
`

const ImgContainer = styled.div`
  grid-area: image;
  ${media.phablet`background: #e2e2e2;`}
`

const ContentId = styled.h3`
  grid-area: id;
  font-weight: 600;
  font-size: ${config.fontSizes.heading[7]}px;
  line-height: ${config.lineHeights[0]};
  margin: 0;
  color: ${props => props.theme.primary};
  ${media.phablet`
    font-size: ${config.fontSizes.heading[3]}px;
    line-height: inherit;
    margin-right: 8px;
  `}
`

const ContentLinks = styled.div`
  grid-area: links;
`

const ContentLink = styled.a`
  margin-left: 16px;
`

const IconCode = styled(Code)`
  ${mixins.icon}
  color: ${props => props.theme.info};
  ${media.phablet`vertical-align: -0.725em;`}
`

const IconExternalLink = styled(ExternalLinkAlt)`
  ${mixins.icon}
  color: ${props => props.theme.info};
  ${media.phablet`vertical-align: -0.725em;`}
`

const ContentTitle = styled.h3`
  grid-area: title;
  font-size: ${config.fontSizes.heading[3]}px;
`

const ContentBody = styled.div`
  grid-area: text;
  p {
    font-size: ${config.fontSizes.text[0]}px;
    line-height: ${config.lineHeights[4]};
  }
  ${media.phablet`margin-bottom: 16px;`}
`

const ContentTags = styled.div`
  grid-area: tags;
  margin-bottom: 5px;
  ${media.phablet`margin-bottom: 0;`}
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
                {/* Convert single digit ids to 2-digit format */}
                <ContentId>{'0' + id.toString().slice(-2)}</ContentId>
                <ContentLinks>
                  <ContentLink href={repo} title={title + ' Github repo'} target="_blank">
                    <IconCode />
                  </ContentLink>
                  <ContentLink href={external} title={'View live'} target="_blank">
                    <IconExternalLink />
                  </ContentLink>
                </ContentLinks>
                <ContentTitle>{title}</ContentTitle>
                <ContentBody>
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