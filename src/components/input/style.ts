import styled from 'styled-components/native'
import theme from '../../styles/theme'
import { InputTextProps } from '../../types'

const { textItem, bgInput } = theme.colors

const Title = styled.Text`
  color: ${textItem};
  font-size: 20px;
  text-transform: capitalize;
  font-weight: bold;
  margin-bottom: 20px;
`

const InputText = styled.TextInput<InputTextProps>`
  border-color: ${props => props.colorFocus};
  background-color: ${bgInput};
  border-width: 1px;
  height: 50px;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
`

export { Title, InputText }
