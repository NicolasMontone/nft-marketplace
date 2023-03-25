import {
  FunctionComponent,
  useState,
  createContext,
  useContext,
  useEffect,
} from 'react'

import { ethers } from 'ethers'

import { defaultWeb3State } from './utils'
import type { Web3State } from './types'

export type Props = {
  children: React.ReactNode
}

const web3Context = createContext<Web3State>(defaultWeb3State())

const Web3Provider: FunctionComponent<Props> = ({ children }) => {
  const [web3, setWeb3] = useState<Web3State>(defaultWeb3State())

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    const ethereum = window.ethereum
    // note: ethers does not support type MetaMaskInpageProvider, so we cast it
    const provider = new ethers.providers.Web3Provider(
      ethereum as unknown as ethers.providers.ExternalProvider
    )

    setWeb3({
      ethereum,
      contract: null,
      provider,
      isLoading: false,
    })
  }, [])

  return <web3Context.Provider value={web3}>{children}</web3Context.Provider>
}

function useWeb3() {
  return useContext(web3Context)
}

export { Web3Provider, useWeb3 }
