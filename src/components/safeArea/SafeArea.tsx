import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Children } from '../../types'

import { ViewContainer } from './style'

const SafeArea = ({ children }: Children) => {
  const insets = useSafeAreaInsets()

  return <ViewContainer insets={insets}>{children}</ViewContainer>
}

export default SafeArea
