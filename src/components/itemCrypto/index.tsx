import React from 'react'
import ArrowGreen from '../../../assets/image/arrow-upper.svg'
import ArrowRed from '../../../assets/image/arrow-down.svg'
import {
  ItemCryptoContainer,
  CryptoImage,
  Title,
  TitleContainer,
  Percentage,
  PercentageContainer,
  Subtitle,
  TextContainer,
} from './style'
import { numberPrecision } from '../../utils'
import theme from '../../styles/theme'
import { View } from 'react-native'
import { ItemCryptoProps } from '../../types'

const { high, low } = theme.colors

const ItemCrypto = ({
  name,
  symbol,
  market_data: { price_usd, percent_change_usd_last_1_hour },
  imageUrl,
}: ItemCryptoProps) => {
  const percent = percent_change_usd_last_1_hour < 0
  const icon = percent ? (
    <ArrowRed width={15} height={15} fill={low} />
  ) : (
    <ArrowGreen width={15} height={15} fill={high} />
  )

  return (
    <ItemCryptoContainer>
      <TitleContainer>
        <CryptoImage source={imageUrl} />
        <TextContainer>
          <Title>{name}</Title>
          <Subtitle>{symbol}</Subtitle>
        </TextContainer>
      </TitleContainer>
      <View>
        <Title>${numberPrecision(price_usd)}</Title>
        <PercentageContainer>
          {icon}
          <Percentage percent={percent}>
            {numberPrecision(percent_change_usd_last_1_hour)}%
          </Percentage>
        </PercentageContainer>
      </View>
    </ItemCryptoContainer>
  )
}

export default ItemCrypto
