import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'


import mixins from '../utils/mixins'

const HeaderContainer = styled.header`
  ${mixins.flexBetween};
  position: fixed;
`

const TitleLink = styled(Link)`
  color: #fff;
  &:active,
  &:hover {
    color: #fff;
  }
`

type HeaderProps = {
  readonly title: string
}

const Header = ({ title }: HeaderProps) => (
  <HeaderContainer>
    <TitleLink to="/">{title}</TitleLink>
  </HeaderContainer>
)

export default Header

