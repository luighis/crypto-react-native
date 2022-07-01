import { useEffect, useState } from 'react'

//import Config from 'react-native-config'

//const MESSARI_API_KEY = Config.MESSARI_API_KEY

export const useApi = () => {
  const [data, setData] = useState(null)
  const [api, setApi] = useState<string | null>(null)
  const [error, setError] = useState(false)

  const searchCryptocurrency = (crypto: string) => {
    const apiNew = `https://data.messari.io/api/v1/assets/${crypto}/metrics`
    setApi(apiNew)
  }

  useEffect(() => {
    if (api) {
      const connectApi = async () => {
        try {
          // const response = await fetch(api, {
          //   method: 'GET',
          //   headers: {
          //     'x-messari-api-key': MESSARI_API_KEY,
          //   },
          // })

          const response = await fetch(api)

          if (!response.ok) {
            setError(true)
            throw new Error('Request failed')
          }

          const dataApi = await response.json()
          setData(dataApi)
        } catch (e) {
          console.log(e)
        }
      }
      connectApi()
    }
  }, [api])

  return { searchCryptocurrency, data, error }
}
