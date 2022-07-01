import { ItemCryptoProps } from '../types'

export const findCrypto = (text: string, cryptosList: ItemCryptoProps[]) => {
  const found = cryptosList.find((crypto: any) => {
    const conditions = [crypto.name.toLowerCase(), crypto.symbol.toLowerCase()]
    return conditions.includes(text.toLowerCase())
  })

  return found
}

export const numberPrecision = (numeral: number) => {
  const value = numeral.toString()
  const index = value.indexOf('.')

  return value.substring(0, index + 3)
}

export const cryptoUpdate = async (cryptoData: ItemCryptoProps[]) => {
  const apiQueries = cryptoData.map(({ symbol }) =>
    fetch(`https://data.messari.io/api/v1/assets/${symbol}/metrics`)
  )

  return await Promise.all(apiQueries)
    .then(
      async responses =>
        await Promise.all(
          responses.map(response => {
            if (response.ok) {
              return response.json()
            }
            return response.json().then(function (json) {
              throw json.status.error_code
            })
          })
        )
    )
    .catch(error => {
      console.error('Too Many Requests:', error)
      return error
    })
}
