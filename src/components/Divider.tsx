import React from 'react'
import styled from '@emotion/styled'

const DividerWrapper = styled.span`
  color: ${props => props.theme.primary};
`

const Divider = () => 
  <DividerWrapper>
    {' • '}
  </DividerWrapper>

export default Divider