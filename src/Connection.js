import React, { useEffect } from 'react'
import { useWallet, UseWalletProvider } from 'use-wallet'
import { CButton } from '@coreui/react'

function Connection() {
  const wallet = useWallet()
  //const blockNumber = wallet.getBlockNumber()

  useEffect(() => {
    console.log(wallet)
  })

  return (
    <>
      {wallet.status === 'connected' ? (
        <div className="row w-90">
          <div className="col-sm-8"></div>
          <div className="col-sm-3 pt-2">
            <div className="color-white">Address: {wallet.account}</div>
            <div className="color-white">Balance: {wallet.balance / 1000000000000000000} BNB</div>
          </div>
          <div className="col-sm-1">
            <CButton className="button buttonScifi" onClick={() => wallet.reset()}>Disconnect</CButton>
          </div>
        </div>
      ) : (
        <div>
          <CButton className="button buttonScifi" onClick={() => wallet.connect()}>Connect wallet</CButton>
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
      provided: { provider: window.cleanEthereum },
    }}
  >
    <Connection />
  </UseWalletProvider>
)