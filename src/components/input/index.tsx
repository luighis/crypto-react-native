import React, { useState } from 'react'
import theme from '../../styles/theme'
import { InputProps } from '../../types'
import { Title, InputText } from './style'

const { tertiary, borderItem } = theme.colors

const Input = ({ onChangeText }: InputProps) => {
  const [colorFocus, setColorFocus] = useState(borderItem)

  const handleFocus = () => setColorFocus(tertiary)
  const handleBlur = () => setColorFocus(borderItem)

  return (
    <>
      <Title>Add a Cryptocurrency</Title>
      <InputText
        colorFocus={colorFocus}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={onChangeText}
        placeholder="Use a name or ticker symbol..."
      />
    </>
  )
}

export default Input
