import React from 'react'
import Avatar from '../../components/avatar'
import { StatusBar } from 'react-native'
import { HeaderContainer, Title } from './style'
import SafeArea from '../../components/safeArea/SafeArea'

const imgUrl =
  'https://media.metrolatam.com/2020/09/07/sagadegminis-59b416cc49e072b0531e73dfbf1bfc31.jpg'

const Header = () => (
  <SafeArea>
    <HeaderContainer>
      <StatusBar animated={true} barStyle="light-content" />
      <Title>CryptoTracker Pro</Title>
      <Avatar imgUrl={imgUrl} />
    </HeaderContainer>
  </SafeArea>
)

export default Header
