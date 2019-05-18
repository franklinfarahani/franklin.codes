import styled from '@emotion/styled'

import { config } from '../globals'

const { fontSizes } = config

const Tag = styled.span`
  display: inline-block;
  font-weight: 700;
  font-size: ${fontSizes.tag}em;
  text-transform: uppercase;
  border-radius: 4px;
  padding: 2px 4px 0px 4px;
  margin-right: 4px;
  color: ${props => props.theme.cardBg};
  background: linear-gradient(${props => props.theme.primary}, ${props => props.theme.secondary});
`

export default Tag