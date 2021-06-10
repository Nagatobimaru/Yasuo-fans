import React, { useEffect } from 'react'
import { useWallet, UseWalletProvider } from 'use-wallet'
import { CButton } from '@coreui/react'

function Connection() {
  const wallet = useWallet()
  //const blockNumber = wallet.getBlockNumber()

  useEffect(() => {
    console.log(wallet)
    console.log("wallet")
  })

  return (
    <>
      <CButton text="Wallet" />
      {wallet.status === 'connected' ? (
        <div>
          <div>Account: {wallet.account}</div>
          <div>Balance: {wallet.balance/1000000000000000000} BNB</div>
          <CButton class="btn btn-dark" onClick={() => wallet.reset()}>Disconnect</CButton>
        </div>
      ) : (
        <div>
          <CButton class="btn btn-dark" onClick={() => wallet.connect()}>Connect wallet</CButton>
        </div>
      )}
    </>
  )
}

// Wrap everything in <UseWalletProvider />
export default () => (
  <UseWalletProvider
    chainId={56}
    connectors={{
      // This is how connectors get configured
      provided: {provider: window.cleanEthereum},
    }}
  >
    <Connection />
  </UseWalletProvider>
)