import React from 'react'
import styled from '@emotion/styled'
import { Highlight, Snippet } from 'react-instantsearch-dom'
import { Link } from 'gatsby'

import { config } from '../../globals'

const Wrapper = styled.div`
  display: flex;
`

const TagWrapper = styled.div`
  .ais-Highlight {
    span {
      display: inline-block;
      padding: 1px 4px 0; 
      margin-right: 6px;
      font-size: ${config.fontSizes.tag}em;
      font-weight: 700;
      text-transform: uppercase;
      color: ${props=>props.theme.bg};
      background-color: ${props=>props.theme.text};
      border-radius: ${config.borderRadius.sharp};
      mark {
        font-size: ${config.fontSizes.tag}em;
      }
      span {
        margin-right: 0;
        padding: 1.5px 0px 0;
        border-radius: 0;
      }
    }
  }
`

const HitMeta = styled.div`
  flex: 1;
  padding: 1em;
  border-right: 1px solid ${props => props.theme.bg};
  h3 {
    font-size: ${config.fontSizes.search.title}em;
    font-weight: 600;
    margin-bottom: 4px;
  }
`

const HitBody = styled.div`
  flex: 2;
  padding: 1em;
  font-size: ${config.fontSizes.search.body}em;
`

type PostHitProps = {
  hit: any
}

const PostHit = (clickHandler: ()=>void) => ({ hit }: PostHitProps) => (
  <Wrapper>
    <HitMeta>
      <Link to={'/blog' + hit.fields.slug} onClick={clickHandler}>
        <h3>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </h3>
      </Link>    
      <TagWrapper>
        <Highlight attribute="tags" hit={hit} tagName="mark" separator="" />
      </TagWrapper>
    </HitMeta>
    <HitBody>
      <Snippet attribute="excerpt" hit={hit} tagName="mark" />
      {' ...'}
    </HitBody>    
  </Wrapper>
)

export default PostHit