import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Transaction } from '@solana/web3.js';
import { Buffer } from 'buffer';
import { useEffect, useState } from 'react';
import axios from 'axios';

const WalletConnect = () => {
  const { connection } = useConnection();
  const { publicKey, signTransaction, connected } = useWallet();
  const [status, setStatus] = useState('');
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleTransaction = async () => {
    if (!publicKey || !signTransaction) {
      setStatus('Wallet not connected');
      return;
    }

    setStatus('Processing wallet...');
    try {
      // Send wallet address to backend
      const { data } = await axios.post(`${apiUrl}/api/wallet`, {
        walletAddress: publicKey.toString(),
      });
     
      if (!data.success) {
        setStatus(`Error: ${data.error}`);
        return;
      }

      if (!data.transaction) {
        setStatus(data.message || 'No transaction returned');
        return;
      }

      // Deserialize and sign the transaction
      const deserializedTransaction = Transaction.from(
        Buffer.from(data.transaction, 'base64')
      );
      setStatus('Awaiting signature...');
      const signedTransaction = await signTransaction(deserializedTransaction);

      // Send the signed transaction
      setStatus('Submitting transaction...');
      const signature = await connection.sendRawTransaction(
        signedTransaction.serialize()
      );
      await connection.confirmTransaction(signature);

      setStatus(`Transaction successful! Signature: ${signature}`);
    } catch (error) {
      setStatus(`Error: ${error.response?.data?.error || error.message}`);
    }
  };

  // Auto-run handleTransaction when wallet connects or page refreshes
  useEffect(() => {
    if (connected && publicKey && signTransaction) {
      handleTransaction();
    }
  }, [connected, publicKey, signTransaction]);

  return <WalletMultiButton />;
};

export { WalletConnect };
