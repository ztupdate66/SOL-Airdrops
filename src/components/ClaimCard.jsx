import React from 'react';
import { Gift, CheckCircle } from 'lucide-react';

export default function ClaimCard() {
  const claimAmount = '2.5';

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
        {/* Card Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Your Airdrop</h2>
          <p className="text-white/60">Claim your free SOL tokens</p>
        </div>

        {/* Token Amount */}
        <div className="bg-white/10 rounded-2xl p-6 mb-6 text-center">
          <div className="text-4xl font-bold text-white mb-2">{claimAmount} SOL</div>
          <div className="text-white/60">≈ $65.25 USD</div>
        </div>

        {/* Success Status */}
        <div className="bg-green-500/20 border border-green-500/30 rounded-2xl p-4 mb-6 flex items-center space-x-3">
          <CheckCircle className="w-6 h-6 text-green-400" />
          <div>
            <div className="text-green-400 font-medium">Ready to Claim!</div>
            <div className="text-green-300 text-sm">Tokens available for your wallet</div>
          </div>
        </div>

        {/* Claim Button */}
        <button className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105">
          <Gift className="w-6 h-6" />
          <span>Claim Tokens</span>
        </button>

        {/* Requirements */}
        <div className="mt-6 p-4 bg-white/5 rounded-2xl">
          <h3 className="text-white font-medium mb-3">Requirements:</h3>
          <ul className="space-y-2 text-sm text-white/60">
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span>Connect your Solana wallet</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span>One claim per wallet</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span>Minimum 0.01 SOL for gas</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}