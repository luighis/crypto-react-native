import styled from 'styled-components/native'
import { ViewContainerProps } from '../../types'
import theme from './../../styles/theme'

const ViewContainer = styled.View<ViewContainerProps>`
  background-color: ${theme.colors.primary};
  padding-top: ${props => props.insets.top}px;
`

export { ViewContainer }
