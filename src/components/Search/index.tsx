import React, { useState, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import {
  InstantSearch,
  Index,
  Hits,
  connectStateResults,
} from 'react-instantsearch-dom'
import AlgoliaLogo from './AlgoliaLogo'

import Input from './Input'
import PostHit from './PostHit'

import { config } from '../../globals'
const {shadows, borderRadius, fontSizes} = config

const Root = styled.div`
  position: relative;
`

type HitsWrapperProps = {
  show: boolean
}

const HitsWrapper = styled.div<HitsWrapperProps>`
  display: ${props => (props.show ? 'grid' : 'none')};
  max-height: 80vh;
  overflow: auto;
  z-index: 2;
  -webkit-overflow-scrolling: touch;

  mark {
    color: ${props => props.theme.text};
    background: ${props => props.theme.highlight};
  }
  header {
    border-bottom: 1px solid ${props => props.theme.bg};
    display: flex;
    h3 {
      margin-bottom: 0;
      font-weight: 500;
      font-size: ${fontSizes.tag}em;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: ${props => props.theme.info};
      padding: 1em 1.25em .75em;
    }
  }
  position: absolute;
  top: calc(100% + 0.5em);
  width: 100%;
  box-shadow: ${shadows.high};
  background: ${props => props.theme.cardBg};
  border-radius: ${borderRadius.round};
`

const PoweredBy = styled.span`
  a {
    width: 100%;
    height: 30px;
    margin-top: 0;
    border-top: 1px solid ${props=>props.theme.bg};
  }
`

const NoResults = styled.p`
  padding: 1em;
  margin: 0 auto;
  font-size: ${fontSizes.search.title}em;
  text-align: center;
`

const events = ['mousedown', 'touchstart']

const Results = connectStateResults(
  ({ searchState, searchResults, children }) => (
    searchResults && searchResults.nbHits ? 
      <div>
        {children}
      </div> : 
      <NoResults>No results found for <strong>{searchState.query}</strong>! 😅</NoResults>
  )
)

type SearchProps = {
  indices: {
    name: string,
    title: string,
  }[]
}

type Entry = {
  [key: string]: string
}

const Search = ({indices}: SearchProps) => {
  
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const ref = useRef<HTMLInputElement>(null)

  const handleQueryChange = ({query}: Entry) => {
    setQuery(query)
  }

  const handleFocusChange = () => setFocused(true)

  const handleClickOutside = (event:any) => {
    ref.current && !ref.current.contains(event.target) && setFocused(false)
  }

  useEffect(() => {
    if (focused) {
      events.forEach(event =>
        document.addEventListener(event, handleClickOutside)
      )
    } else {
      events.forEach(event =>
        document.removeEventListener(event, handleClickOutside)
      )
    }

    return () => {
      events.forEach(event =>
        document.removeEventListener(event, handleClickOutside)
      )
    }
  }, [focused])
  
  return (
    <InstantSearch
      indexName={indices[0].name}
      onSearchStateChange={handleQueryChange}
      appId={`${process.env.GATSBY_ALGOLIA_APP_ID}`}
      apiKey={`${process.env.GATSBY_ALGOLIA_SEARCH_KEY}`}
      root={{ Root, props: { ref } }}
    >
      <Input onFocus={handleFocusChange} {...{ focused }} />
        <HitsWrapper show={query.length > 0 && focused} >
          {indices.map(({ name, title }: Entry) => (
            <Index key={name} indexName={name}>
              <header>
                <h3>{title}</h3>
              </header>
              <Results>
                <Hits hitComponent={PostHit(()=>setFocused(false))} />
              </Results>
            </Index>
          ))}
          <PoweredBy>
            <a href="https://algolia.com" target="_blank" rel="noopener">
              <AlgoliaLogo />
            </a>
          </PoweredBy>          
        </HitsWrapper>
      
    </InstantSearch>
  )
  
}

export default Search