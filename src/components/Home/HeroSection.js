import React from 'react';
import './HeroSection.css';
import Particless from './PartiCless';
import HeroUi from './HeroUi';

function HeroSection() {
  return (
    <div className="Hero-main-container">
      <HeroUi />
      <Particless />
    </div>
  );
}

export default HeroSection;
