import { ReactNode } from 'react'

export interface ViewContainerProps {
  insets: {
    bottom: number
    top: number
  }
}

export interface Children {
  children: ReactNode
}

export interface ButtonProps extends Children {
  onPress: () => void
  isActive?: string
}

export interface PercentageProps {
  percent: boolean
}
export interface ItemCryptoProps {
  id: string
  name: string
  symbol: string
  market_data: { price_usd: number; percent_change_usd_last_1_hour: number }
  imageUrl: any
}

export interface ListItemCryptoProps {
  cryptosList: ItemCryptoProps[]
}
export interface AvatarProps {
  imgUrl: string
}
export interface InputProps {
  onChangeText: (value: string) => void
}

export interface InputTextProps {
  colorFocus: string
}

export interface newCryptoProps {
  newCrypto: string
}

export interface OnPress {
  onPress: () => any
}
