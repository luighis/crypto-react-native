import styled from 'styled-components/native'
import theme from '../../styles/theme'

const { secondary, textItem } = theme.colors

const ScreenContainer = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${secondary};
  padding: 0 20px;
`

const Message = styled.Text`
  color: ${textItem};
  font-size: 13px;
  margin-top: 5px;
  height: 15px;
`

export { ScreenContainer, Message }
