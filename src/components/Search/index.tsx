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
const {shadows, borderRadius} = config

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
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3em;
    h3 {
      color: white;
      background: ${props => props.theme.bg};
      padding: 0.2em 0.4em;
      border-radius: 8px;
    }
  }
  h3 {
    margin: 0 0 0.5em;
  }
  h4 {
    margin-bottom: 0.3em;
  }
  position: absolute;
  top: calc(100% + 0.5em);
  width: 100%;
  box-shadow: ${shadows.medium};
  padding: 0.7em 1em 0.4em;
  background: ${props => props.theme.cardBg};
  border-radius: ${borderRadius.round};
  li + li {
    margin-top: 0.7em;
    padding-top: 0.7em;
    border-top: 1px solid ${props => props.theme.bg};
  }
` as React.FunctionComponent<HitsWrapperProps>

const PoweredBy = styled.span`
  a {
    width: 100%;
    height: 30px;
    margin-top: 0;
    border-top: 1px solid ${props=>props.theme.info};
  }
`

const events = ['mousedown', 'touchstart']

const Results = connectStateResults(
  ({ searchState, searchResults, children }) =>
    searchResults && searchResults.nbHits ? <div><p>{searchResults.nbHits} result{searchResults.nbHits > 1 ? 's' : ''}</p>{children}</div> : <p>No results for {searchState.query}</p>
)

type SearchProps = {
  indices: any
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
            <a href="https://algolia.com">
              <AlgoliaLogo />
            </a>
          </PoweredBy>          
        </HitsWrapper>
      
    </InstantSearch>
  )
  
}

export default Search