import React from 'react'
import { FlatList } from 'react-native'
import { ItemCryptoProps, ListItemCryptoProps } from '../../types'
import ItemCrypto from '../itemCrypto'
import { FlatListContainer } from './style'

const ListItemCrypto = ({ cryptosList }: ListItemCryptoProps) => {
  const renderItem = (item: ItemCryptoProps) => <ItemCrypto {...item} />

  return (
    <FlatListContainer>
      <FlatList
        data={cryptosList}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={({ id }) => id}
      />
    </FlatListContainer>
  )
}

export default ListItemCrypto
