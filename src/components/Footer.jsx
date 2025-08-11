import React from 'react';
import { Github, Twitter, MessageCircle, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-green-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-white font-bold text-xl">SolAirdrop</span>
              </div>
              <p className="text-white/60 mb-4 leading-relaxed">
                Distributing value to the Solana community through fair and transparent airdrops.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                    <span>How it Works</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                    <span>Tokenomics</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                    <span>Security Audit</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                    <span>Terms & Conditions</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                    Contact Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                    Bug Reports
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                    Feature Requests
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © 2025 SolAirdrop. Built on Solana blockchain. Not financial advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}