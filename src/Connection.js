import {useWallet, UseWalletProvider} from 'use-wallet'
import React from 'react'

function Connection () {
    const wallet = useWallet()
    const blockNumber = wallet.getBlockNumber()

    return (
        <>
      <h1>Wallet</h1>
      {wallet.status === 'connected' ? (
        <div>
          <div>Account: {wallet.account}</div>
          <div>Balance: {wallet.balance}</div>
          <button onClick={() => wallet.reset()}>Disconnect</button>
        </div>
      ) : (
        <div>
          Connect:
          <button onClick={() => wallet.connect()}>MetaMask</button>
        </div>
      )}
    </>
    )
}

// Wrap everything in <UseWalletProvider />
export default () => (
    <UseWalletProvider
      chainId={1}
      connectors={{
        // This is how connectors get configured
        portis: { provider: window.cleanEthereum },
      }}
    >
      <Connection />
    </UseWalletProvider>
  )