import React from 'react'
import styled from '@emotion/styled'
import { connectSearchBox } from 'react-instantsearch-dom'

import config from '../../globals/config'
const { borderRadius, transition } = config

const SearchInput = styled.input`
  outline: none;
  border: none;
  flex: 1;
  font-size: 1em;
  transition: ${transition};
  border-radius: ${borderRadius.sharp};
`

const Form = styled.form`
  display: flex;
  align-items: center;
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
      <SearchInput
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={handleChange}
        {...rest}
      />
      {/* <SearchIcon /> */}
    </Form>
  )
}

export default connectSearchBox(Input)