import React from 'react'
import styled from '@emotion/styled'
import { connectSearchBox } from 'react-instantsearch-dom'
import { Search } from 'emotion-icons/fa-solid'

import config from '../../globals/config'
const { borderRadius, transition, shadows } = config

const SearchInput = styled.input`
  outline: none;
  border: none;
  flex: 1;
  font-size: 1em;
  line-height: 2;
  margin-left: -1.75em;
  padding-left: 2.5em;
  padding-right: 0.75em;
  transition: ${transition};
  border-radius: ${borderRadius.sharp};
  box-shadow: ${shadows.medium};
  &::placeholder {
    color: ${props=>props.theme.info};
  }
`

const Form = styled.form`
  display: flex;
  align-items: center;
  margin-top: 1em;
`

const IconSearch = styled(Search)`
  width: 1em;
  margin-left: 0.75em;
  pointer-events: none;
  z-index: 4;
  color: ${props=>props.theme.info};
`

type InputProps = {
  refine: (value: string) => void
  onFocus: () => void
}

const Input = ({ refine, ...rest }: InputProps) => {
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    refine(event.target.value)
  }

  return (
    <Form>
      <IconSearch />
      <SearchInput
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handleChange}
        {...rest}
      />      
    </Form>
  )
}

export default connectSearchBox(Input)