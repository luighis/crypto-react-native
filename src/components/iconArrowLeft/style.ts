import styled from 'styled-components/native'
import theme from './../../styles/theme'

const { primary, secondary } = theme.colors

const IconArrowLeftContainer = styled.View`
  flex: 1;
  background-color: ${secondary};
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

const Title = styled.Text`
  color: ${primary};
  font-size: 15px;
`

export { IconArrowLeftContainer, Title }
