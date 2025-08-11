import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ClaimCard from './components/ClaimCard';
import ProgressBar from './components/ProgressBar';
import Footer from './components/Footer';
import BackgroundElements from './components/BackgroundElements';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      {/* Background Elements */}
      <BackgroundElements />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header 
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        
        <main>
          <HeroSection />
          
          {/* Progress Section */}
          <section className="px-4 sm:px-6 lg:px-8 mb-16">
            <div className="max-w-2xl mx-auto">
              <ProgressBar 
                current={12847}
                total={50000}
                label="Airdrop Progress"
              />
            </div>
          </section>
          
          {/* Claim Section */}
          <section className="px-4 sm:px-6 lg:px-8 mb-20">
            <ClaimCard />
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;