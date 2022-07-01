export enum RISE {
  Low = 'low',
  High = 'high',
}

export const cryptosList = [
  {
    id: '1',
    name: 'Bitcoin',
    symbol: 'Btc',
    price: '$7,215.68',
    percent: '1.82',
    rise: 'high',
    imageUrl: require('./../../assets/image/BTC.png'),
  },
  {
    id: '2',
    name: 'Ethereum',
    symbol: 'Eth',
    price: '$146.83',
    percent: '1.46',
    rise: 'high',
    imageUrl: require('./../../assets/image/ETH.png'),
  },
  {
    id: '3',
    name: 'Xrp',
    symbol: 'Xrp',
    price: '$0,220568',
    percent: '2.82',
    rise: 'low',
    imageUrl: require('./../../assets/image/XRP.png'),
  },
  {
    id: '4',
    name: 'Ltc',
    symbol: 'Ltc',
    price: '$0,220568',
    percent: '2.82',
    rise: 'low',
    imageUrl: require('./../../assets/image/LTC.png'),
  },
]

export const MESSAGE = {
  already: '. It is already on the list...',
  noFound: '. Not found in the list',
}

export const IMAGES: any = {
  LTC: require('./../../assets/image/LTC.png'),
  BTC: require('./../../assets/image/BTC.png'),
  ETH: require('./../../assets/image/ETH.png'),
  XRP: require('./../../assets/image/XRP.png'),
}

export const TIME = 3000

export const TOO_MANY_REQUEST = 429
