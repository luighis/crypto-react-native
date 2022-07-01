import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import type { RouteProp } from '@react-navigation/native'
import Input from '../../components/input'
import SecondaryButton from '../../components/secondaryButton'
import { MESSAGE } from '../../constants'
import { RootStackParamList } from '../RootStackPrams'
import { Message, ScreenContainer } from './style'
import theme from '../../styles/theme'
import { useApi } from '../../api'
import { findCrypto } from '../../utils'

type AddCryptoScreenProp = StackNavigationProp<RootStackParamList, 'AddCrypto'>
type AddCryptoScreenRouteProp = RouteProp<RootStackParamList, 'AddCrypto'>

const { primary, opacityTertiary } = theme.colors

const AddCryptoScreen = () => {
  const [text, setText] = useState('')
  const [message, setMessage] = useState('')
  const navigation = useNavigation<AddCryptoScreenProp>()
  const route = useRoute<AddCryptoScreenRouteProp>()
  const cryptosListState = route.params?.cryptoData
  const { searchCryptocurrency, data, error } = useApi()

  const handleClick = () => {
    if (text) {
      if (findCrypto(text, cryptosListState)) {
        setMessage(`${text}${MESSAGE.already}`)
        return
      }
      searchCryptocurrency?.(text.toLowerCase())
    }
  }

  useLayoutEffect(() => {
    if (data) {
      navigation.navigate({
        name: 'Home',
        params: { newCrypto: data },
        merge: true,
      })
    }
  }, [data, navigation])

  useEffect(() => {
    setMessage('')
  }, [text])

  useLayoutEffect(() => {
    if (error) {
      setMessage(`${text}${MESSAGE.noFound}`)
    }
  }, [error, text])

  const isActive = text ? primary : opacityTertiary

  return (
    <ScreenContainer>
      <Input onChangeText={value => setText(value.trim())} />
      <Message>{message}</Message>
      <SecondaryButton isActive={isActive} onPress={handleClick}>
        Add
      </SecondaryButton>
    </ScreenContainer>
  )
}

export default AddCryptoScreen
