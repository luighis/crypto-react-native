import React from 'react'
import { Pressable } from 'react-native'
import ArrowLeft from '../../../assets/image/arrow.svg'
import theme from '../../styles/theme'
import { OnPress } from '../../types'
import { IconArrowLeftContainer, Title } from './style'

const { primary } = theme.colors

const IconArrowLeft = ({ onPress }: OnPress) => (
  <Pressable onPress={onPress}>
    <IconArrowLeftContainer>
      <ArrowLeft width={25} height={25} fill={primary} />
      <Title>Back to list</Title>
    </IconArrowLeftContainer>
  </Pressable>
)

export default IconArrowLeft
