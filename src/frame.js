const WalletConnectProvider = require('@walletconnect/ethereum-provider').default
const {Buffer} = require('buffer')
const {ethers} = require('ethers');
const {providers} = ethers;
window.Buffer = Buffer
// const EventEmitter = require('events')
// const EthereumProvider = require('ethereum-provider')
//
class EthereumProvider extends WalletConnectProvider {
  constructor () {
    super()
  }

  send (payload) {
    window.postMessage({ type: 'eth:send', payload }, window.location.origin)
  }
}
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
    // 3. Create EthereumProvider (with default RPC configuration) by passing in the `client` instance.
    const provider = new EthereumProvider({
      rpc: {
        custom: {
          1: 'http://erigon.dappnode:8545'
          // ...
        }
      }
    })
    provider.sendAsync = async (payload) => {
      const web3Provider = new providers.Web3Provider(provider)
      const tx = await web3Provider.send(payload.method, payload.params)
      console.log(tx)
    }

    // 4. Enable session (triggers `CLIENT_EVENTS.pairing.proposal` event).
    // await provider.enable()

    window.ethereum = provider
    window.web3 = provider
    window.isMetaMask = true
  }
  main()
} catch (e) {

}
