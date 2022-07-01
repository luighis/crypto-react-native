import styled from 'styled-components/native'
import theme from './../../styles/theme'

const ButtonContainer = styled.View`
  margin: 30px 50px;
  padding: 10px;
`

const ButtonText = styled.Text`
  color: ${theme.colors.primary};
  font-size: 15px;
  text-align: center;
`

export { ButtonContainer, ButtonText }
