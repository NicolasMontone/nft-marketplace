import { MetaMaskInpageProvider } from '@metamask/providers'
import { providers, Contract } from 'ethers'

export type Web3 = {
  ethereum: MetaMaskInpageProvider | null
  provider: providers.Web3Provider | null
  contract: Contract | null
}

export type Web3State = {
  isLoading: boolean
} & Web3

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider
  }
}
