import React from 'react';
import Intro from './Intro';
import SocialLinks from './SocialLinks';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="info-social-container">
          <Intro />
          <SocialLinks />
        </div>
        <div className="chinese-characters">
          {/* 在这设计 */}
        </div>
      </div>
    </header>
  );
}

export default Header;