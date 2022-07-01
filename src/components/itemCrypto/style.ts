import styled from 'styled-components/native'
import { PercentageProps } from '../../types'
import theme from '../../styles/theme'

const { borderItem, textItem, subTextItem, low, high } = theme.colors

const ItemCryptoContainer = styled.View`
  padding-top: 20px;
  padding-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  border-bottom-color: ${borderItem};
  border-bottom-width: 1px;
`

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

const Title = styled.Text`
  color: ${textItem};
  font-size: 15px;
  font-weight: bold;
`

const CryptoImage = styled.Image`
  width: 50px;
  height: 50px;
`

const TextContainer = styled.View`
  margin-left: 5px;
`

const Subtitle = styled.Text`
  color: ${subTextItem};
  text-transform: uppercase;
  font-size: 13px;
  margin-top: 3px;
`

const PercentageContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 3px;
`

const Percentage = styled.Text<PercentageProps>`
  color: ${props => (props.percent ? low : high)};
  font-size: 14px;
  margin-left: 5px;
`

export {
  ItemCryptoContainer,
  CryptoImage,
  Title,
  TitleContainer,
  Percentage,
  PercentageContainer,
  Subtitle,
  TextContainer,
}
