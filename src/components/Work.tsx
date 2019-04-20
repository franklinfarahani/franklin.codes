import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

import mixins from '../utils/mixins'
import { config } from '../globals'
import Tag from '../components/Tag'

import { Code, ExternalLinkAlt } from 'emotion-icons/fa-solid'

const ProjectsContainer = styled.section`
  margin: 10vh auto;
  max-width: 1000px;
  h2:first-of-type {
    font-weight: 700;
    margin-bottom: 10vh;
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
  border-radius: ${config.borderRadius};
  box-shadow: inset 0px -4px 0px 0px ${props => props.theme.primary}, ${config.shadows.low};
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
    font-weight: 600;
    font-size: ${config.fontSizes.heading[3]}px;
    color: ${props => props.theme.text};
  }
  p {
    font-weight: 400;
    font-size: ${config.fontSizes.text[0]}px;
    line-height: ${config.lineHeights[4]};
    color: ${props => props.theme.text};
  }
`

const ContentTags = styled.div`
  margin-bottom: 5px;
`

type WorkProps = {
  data: Edges<ProjectMarkdown>
}

const Work = ({data}: WorkProps) => (
  <ProjectsContainer>
    <h2>
      <span>
        {'# '}
      </span>
      Featured Work
    </h2>
    <Project>
      <Content>
        <ContentHeader>
          <ContentId>{'0' + data[0].node.frontmatter.id.toString().slice(-2)}</ContentId>
          <ContentLinks>
            <ContentLink href={data[0].node.frontmatter.repo} title={data[0].node.frontmatter.title + ' Github repo'} target="_blank">
              <IconCode />
            </ContentLink>
            <ContentLink href={data[0].node.frontmatter.external} title={'View live'} target="_blank">
              <IconExternalLink />
            </ContentLink>
          </ContentLinks>
        </ContentHeader>
        <ContentBody>
          <h3>{data[0].node.frontmatter.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: data[0].node.html }} />
        </ContentBody>
        <ContentTags>
          {data[0].node.frontmatter.tags.map(tag => <Tag>{tag}</Tag>)}
        </ContentTags>
      </Content>
      <ImgContainer>
        <Img fluid={data[0].node.frontmatter.media.childImageSharp.fluid} />
      </ImgContainer>
    </Project>
  </ProjectsContainer>
)

export default Work