import React from 'react'
import { AvatarProps } from '../../types'
import { StyledImage } from './style'

const Avatar = ({ imgUrl }: AvatarProps) => (
  <StyledImage
    source={{
      uri: imgUrl,
    }}
  />
)

export default Avatar
