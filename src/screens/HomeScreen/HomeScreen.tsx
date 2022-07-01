import React, { useCallback, useEffect, useRef, useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp, useIsFocused } from '@react-navigation/native'
import { useNavigation, useRoute } from '@react-navigation/native'
import MainContainer from '../../components/layout/MainContainer'
import ListItemCrypto from '../../components/ListItemCrypto'
import PrimaryButton from '../../components/primaryButton/PrimaryButton'
import { RootStackParamList } from '../RootStackPrams'
import { Message } from './style'
import { IMAGES, TIME, TOO_MANY_REQUEST } from '../../constants'
import { ItemCryptoProps } from '../../types'
import { cryptoUpdate } from '../../utils'
import { AppState } from 'react-native'

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>
type homeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>

const HomeScreen = () => {
  const [cryptoData, setCryptoData] = useState<ItemCryptoProps[]>([])
  const appState = useRef(AppState.currentState)
  const [appStateVisible, setAppStateVisible] = useState(appState.current)
  const timeRef = useRef<ReturnType<typeof setTimeout>>()
  const isFocused = useIsFocused()

  const route = useRoute<homeScreenRouteProp>()
  const navigation = useNavigation<homeScreenProp>()

  const handleNavigation = () => {
    navigation.navigate('AddCrypto', { cryptoData })
  }

  const updateCryptoData = useCallback(async () => {
    const data = await cryptoUpdate(cryptoData)

    if (data === TOO_MANY_REQUEST) {
      return
    }

    const updatedCryptocurrencies = data.map(item => {
      const imageUrl = IMAGES[item.data.symbol]
      return { ...item.data, imageUrl }
    })

    updatedCryptocurrencies ? setCryptoData([...updatedCryptocurrencies]) : null
  }, [cryptoData])

  useEffect(() => {
    if (route.params?.newCrypto) {
      const data = route.params.newCrypto.data

      const imageUrl = IMAGES[data.symbol]
      const newCrypto = { ...data, imageUrl }

      setCryptoData([...cryptoData, newCrypto])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params?.newCrypto])

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      appState.current = nextAppState
      setAppStateVisible(appState.current)
    })
    return () => {
      subscription.remove()
    }
  }, [])

  useEffect(() => {
    if (
      !appState.current.match(/inactive|background/) &&
      isFocused &&
      cryptoData.length
    ) {
      timeRef.current = setTimeout(updateCryptoData, TIME)
    }

    return () => {
      clearTimeout(timeRef.current)
    }
  }, [cryptoData, isFocused, updateCryptoData, appStateVisible])

  return (
    <MainContainer>
      {!cryptoData.length ? (
        <Message>
          There is nothing on the list. Choose a cryptocurrency with the add
          button
        </Message>
      ) : (
        <ListItemCrypto cryptosList={cryptoData} />
      )}

      <PrimaryButton onPress={handleNavigation}>
        + Add a Cryptocurrency
      </PrimaryButton>
    </MainContainer>
  )
}

export default HomeScreen
