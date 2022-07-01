import styled from 'styled-components/native'
import theme from './../../styles/theme'

const { primary, secondary } = theme.colors

const HeaderContainer = styled.View`
  background-color: ${primary};
  padding: 0 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
`

const Title = styled.Text`
  color: ${secondary};
  font-size: 16px;
  font-weight: bold;
`

export { HeaderContainer, Title }
