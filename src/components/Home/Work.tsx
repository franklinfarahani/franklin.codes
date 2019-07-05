import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

import mixins from '../../utils/mixins'
import { config, media } from '../../globals'
import Tag from '../Tag'
import FadeUpReveal from '../Animation/FadeUpReveal'

import { Code, ExternalLinkAlt } from 'emotion-icons/fa-solid'


const WorkContainer = styled.section`
  margin: 4em auto 10em;
  max-width: 1000px;
  /* min-height: calc(100vh - 113px); */
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

const ProjectWrapper = styled.article<{ side: boolean }>`
  display: grid;
  grid-template: ${props => (
    props.side ? 
      '"content image" auto / 2fr 3fr' :
      '"image content" auto / 3fr 2fr'
  )};
  background: ${props => props.theme.cardBg};
  border-radius: ${config.borderRadius.round};
  box-shadow: ${config.shadows.low};
  margin-bottom: 10em;
  
  ${media.tablet`
    margin: 0 -30px 5em;
    border-radius: 0;
  `}
  
  ${media.phablet`
    grid-template:
      "image"   auto
      "content" auto;
    margin: 0 -20px 4em;
  `}
`

const Project = styled.div`
  grid-area: content;
  padding: 40px 50px;
  display: grid;
  grid-template:
    "id    links" auto
    "title title" auto
    "text   text" 1fr
    "tags   tags" auto / 1fr auto;
  ${media.tabletLarge`padding: 36px;`}
  ${media.tablet`
    padding: 24px 30px;
    grid-template:
      "id     title  links" auto
      "text   text    text" 1fr
      "tags   tags    tags" auto / auto 1fr auto;
  `}
  ${media.phablet`padding: 30px;`}
`

const ImgContainer = styled.div`
  grid-area: image;
  ${media.phablet`background: #e2e2e2;`}
`

const ProjectId = styled.h3`
  grid-area: id;
  font-weight: 600;
  font-size: ${config.fontSizes.heading[7]}px;
  line-height: ${config.lineHeights[0]};
  margin: 0;
  color: ${props => props.theme.primary};
  ${media.tablet`
    font-size: ${config.fontSizes.heading[3]}px;
    line-height: inherit;
    margin-right: 8px;
  `}
`

const ProjectLinks = styled.div`
  grid-area: links;
`

const ProjectLink = styled.a`
  margin-left: 16px;
`

const IconCode = styled(Code)`
  ${mixins.icon}
  color: ${props => props.theme.info};
  ${media.tablet`vertical-align: -0.725em;`}
`

const IconExternalLink = styled(ExternalLinkAlt)`
  ${mixins.icon}
  color: ${props => props.theme.info};
  ${media.tablet`vertical-align: -0.725em;`}
`

const ProjectTitle = styled.h3`
  grid-area: title;
  font-size: ${config.fontSizes.heading[3]}px;
`

const ProjectBody = styled.div`
  grid-area: text;
  p {
    font-size: ${config.fontSizes.text[0]}px;
    line-height: ${config.lineHeights[4]};
  }
  ${media.tablet`margin-bottom: 16px;`}
`

const ProjectTags = styled.div`
  grid-area: tags;
  margin-bottom: 5px;
  ${media.tablet`margin-bottom: 0;`}
`

type WorkProps = {
  data: Edges<ProjectMarkdown>
}

const Work = ({data}: WorkProps) => {
  return (
    <WorkContainer id="work">
      <h2>
        <span>{'# '}</span>
        Featured Work
      </h2>
      {data.map(({node}) => {
        
        const { frontmatter, html } = node
        const { id, title, repo, external, tags, media } = frontmatter

        const isLeft = (id % 2) ? true : false
        
        return (
          <FadeUpReveal key={id}>
            <ProjectWrapper side={isLeft}>
              <Project>
                {/* Convert single digit ids to 2-digit format */}
                <ProjectId>{'0' + id.toString().slice(-2)}</ProjectId>
                <ProjectLinks>
                  <ProjectLink href={repo} title={title + ' Github repo'} target="_blank">
                    <IconCode />
                  </ProjectLink>
                  <ProjectLink href={external} title={'View live'} target="_blank">
                    <IconExternalLink />
                  </ProjectLink>
                </ProjectLinks>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectBody>
                  <p dangerouslySetInnerHTML={{ __html: html }} />
                </ProjectBody>
                <ProjectTags>
                  {tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
                </ProjectTags>
              </Project>
              <ImgContainer>
                {media.childImageSharp && 
                  <Img fluid={media.childImageSharp.fluid} />
                }
              </ImgContainer>
            </ProjectWrapper>
          </FadeUpReveal>
        )

      })}
    </WorkContainer>
  )
}

export default Work