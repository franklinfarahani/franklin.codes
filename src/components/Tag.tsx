import styled from '@emotion/styled'

const Tag = styled.span`
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  border-radius: 4px;
  padding: 2px 4px 1px 4px;
  margin-right: 4px;
  color: ${props => props.theme.cardBg};
  background: linear-gradient(${props => props.theme.primary}, ${props => props.theme.secondary});
`

export default Tag