import { Web3State } from './types'

export function defaultWeb3State(): Web3State {
  return {
    isLoading: true,
    ethereum: null,
    provider: null,
    contract: null,
  }
}
