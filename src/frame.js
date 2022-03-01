const EthereumProvider = require('@walletconnect/ethereum-provider').default
const {Buffer} = require('buffer')
window.Buffer = Buffer
// const EventEmitter = require('events')
// const EthereumProvider = require('ethereum-provider')
//
// class Connection extends EventEmitter {
//   constructor () {
//     super()
//     window.addEventListener('message', event => {
//       if (event && event.source === window && event.data && event.data.type === 'eth:payload') {
//         this.emit('payload', event.data.payload)
//       }
//     })
//     setTimeout(() => this.emit('connect'), 0)
//   }
//
//   send (payload) {
//     window.postMessage({ type: 'eth:send', payload }, window.location.origin)
//   }
// }
//
// let mmAppear = window.localStorage.getItem('__frameAppearAsMM__')
//
// try {
//   mmAppear = JSON.parse(mmAppear)
// } catch (e) {
//   mmAppear = false
// }
//
// if (mmAppear) {
//   class MetaMaskProvider extends EthereumProvider {}
//
//   try {
//     window.ethereum = new MetaMaskProvider(new Connection())
//     window.ethereum.isMetaMask = true
//     window.ethereum._metamask = true
//     window.ethereum.setMaxListeners(0)
//   } catch (e) {
//     console.error('Frame Error:', e)
//   }
// } else {
//   class FrameProvider extends EthereumProvider {}
//
//   try {
//     window.ethereum = new FrameProvider(new Connection())
//     window.ethereum.isFrame = true
//     window.ethereum.setMaxListeners(0)
//   } catch (e) {
//     console.error('Frame Error:', e)
//   }
// }

try {
  const main = async () => {
    // 1. Create a WalletConnect Client

    // 2. Subscribe to client events



    // 3. Create EthereumProvider (with default RPC configuration) by passing in the `client` instance.
    const provider = new EthereumProvider({
      rpc: {
        custom: {
          1: 'https://eth-mainnet.alchemyapi.io/v2/K3OwSQSaGH_ol2Kpv4eZZP_npFld9wib'
          // ...
        }
      }
    })

    // 4. Enable session (triggers `CLIENT_EVENTS.pairing.proposal` event).
    // await provider.enable()

    window.ethereum = provider
    window.web3 = provider
    window.isMetaMask = true
  }
  main()
} catch (e) {

}
