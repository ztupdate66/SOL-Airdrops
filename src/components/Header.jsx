import { WalletConnect } from './WalletConnect';
import { Menu, X } from 'lucide-react';

export default function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <header className="relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-green-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-white font-bold text-xl">SOL Airdrop</span>
          </div>

         

          {/* CTA Button */}
          <div className="hidden md:block">
           
              <WalletConnect />
           
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/10 backdrop-blur-md border-t border-white/20 py-4">
            <nav className="flex flex-col space-y-4 px-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-200 py-2">Home</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-200 py-2">About</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-200 py-2">FAQ</a>
              <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-xl hover:bg-white/30 transition-all duration-300 font-medium mt-4">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}