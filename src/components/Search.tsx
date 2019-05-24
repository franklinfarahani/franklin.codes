import React, { useState, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import {
  InstantSearch,
  Index,
  Hits,
  connectStateResults,
} from 'react-instantsearch-dom'
import { Algolia } from 'emotion-icons/fa-brands'

import Input from './Input'
import PostHit from './PostHit'

const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
`

type HitsWrapperProps = {
  show: boolean
}

const HitsWrapper = styled.div<HitsWrapperProps>`
  display: ${props => (props.show ? 'grid' : 'none')};
  max-height: 80vh;
  overflow: scroll;
  z-index: 2;
  -webkit-overflow-scrolling: touch;

  * {
    margin-top: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  mark {
    color: ${props => props.theme.text};
    background: ${props => props.theme.bg};
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3em;
    h3 {
      color: white;
      background: ${props => props.theme.info};
      padding: 0.1em 0.4em;
      border-radius: 4px;
    }
  }
  h3 {
    margin: 0 0 0.5em;
  }
  h4 {
    margin-bottom: 0.3em;
  }
` as React.FunctionComponent<HitsWrapperProps>

const By = styled.span`
  font-size: 0.6em;
  text-align: end;
  padding: 0;
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
          <By>
            Powered by{' '}
            <a href="https://www.algolia.com">
              <Algolia size="1em" /> Algolia
            </a>
          </By>
        </HitsWrapper>
      
    </InstantSearch>
  )
  
}

export default Search