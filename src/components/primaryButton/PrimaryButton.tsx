import React from 'react'
import { Pressable } from 'react-native'
import { ButtonProps } from '../../types'
import { ButtonContainer, ButtonText } from './style'

const PrimaryButton = ({ children, onPress }: ButtonProps) => (
  <ButtonContainer>
    <Pressable onPress={onPress}>
      <ButtonText>{children}</ButtonText>
    </Pressable>
  </ButtonContainer>
)

export default PrimaryButton
