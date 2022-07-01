import styled from 'styled-components/native'
import theme from './../../styles/theme'

const { tertiary } = theme.colors

const ButtonContainer = styled.View`
  border-radius: 5px;
  background-color: ${tertiary};
  width: 150px;
  margin-left: auto;
`

const ButtonText = styled.Text`
  padding: 13px;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
`

export { ButtonContainer, ButtonText }
