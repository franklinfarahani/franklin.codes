import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Project, { Orientation } from './Project'

const ProjectsContainer = styled.section`
  margin: 10vh auto;
  max-width: 1000px;
  h2:first-of-type {
    font-weight: 700;
    span {
      font-weight: 500;
      color: ${props => props.theme.primary};
    }
  }
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
    <Project orientation={Orientation.Left}>
      {data[0].node.frontmatter.title}
    </Project>
  </ProjectsContainer>
)

export default Work