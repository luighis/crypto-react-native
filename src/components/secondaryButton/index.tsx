import React from 'react'
import { Pressable } from 'react-native'
import { ButtonProps } from '../../types'
import { ButtonContainer, ButtonText } from './style'

const SecondaryButton = ({ children, onPress, isActive }: ButtonProps) => (
  <ButtonContainer>
    <Pressable onPress={onPress}>
      <ButtonText style={{ color: isActive }}>{children}</ButtonText>
    </Pressable>
  </ButtonContainer>
)

export default SecondaryButton
