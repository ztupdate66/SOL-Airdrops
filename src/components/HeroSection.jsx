
import { Coins, Sparkles, Users, Clock } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated badge */}
        <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8 animate-pulse">
          <Sparkles className="w-5 h-5 text-yellow-400" />
          <span className="text-white font-medium">Limited Time Airdrop</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Claim Your
          <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent"> SOL </span>
          Tokens
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join thousands of users claiming their exclusive Solana airdrop. Limited supply, first come first served.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full flex items-center justify-center">
                <Coins className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,000 SOL</div>
            <div className="text-white/60">Total Pool</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">12,847</div>
            <div className="text-white/60">Claims Made</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">2d 14h</div>
            <div className="text-white/60">Time Left</div>
          </div>
        </div>
      </div>
    </section>
  );
}