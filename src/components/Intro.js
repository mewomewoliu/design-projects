import React, { useState } from 'react';
import './Intro.css';

function Intro() {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const toggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <div className="intro-main">
      {/* <h1 className="intro-title">Mia Liu</h1> */}
      <div className="intro-content">
        <p>Mia is a Product Designer based in <span className="intro-highlight">Stockholm, Sweden</span>.</p>
        <p>With extensive experience spanning both large-scale and startup tech companies, Mia has worn various hats in the design landscape, from <span className="intro-highlight">Product Designer</span> and <span className="intro-highlight">UX Designer</span> to <span className="intro-highlight">UI Design Lead</span> and <span className="intro-highlight">Design System Lead</span>.</p>
        
        {showMoreInfo && (
          <>
            <p>Currently, she works as a Design Consultant at <a href="https://www.netlight.com/" target="_blank" rel="noopener noreferrer" className="intro-highlight">Netlight AB</a>, where her expertise is leveraged to assist a diverse range of companies in achieving their objectives.</p>
            <p>In key engagements with clients like <a href="https://www.scania.com/" target="_blank" rel="noopener noreferrer" className="intro-highlight">Scania</a>, <a href="https://www.thermo-calc.com/" target="_blank" rel="noopener noreferrer" className="intro-highlight">Thermo-Calc</a>, and <a href="https://www.storykit.com/" target="_blank" rel="noopener noreferrer" className="intro-highlight">Storykit</a>, she solved complex product challenges by leveraging her design methodology and toolkit.</p>
          </>
        )}
        
        <button 
          className="more-info-cta" 
          onClick={toggleMoreInfo}
          aria-expanded={showMoreInfo}
          aria-label={showMoreInfo ? "Hide additional information" : "Show more information"}
        >
          {showMoreInfo ? 'Less Information ↑' : 'More Information_'}
        </button>
      </div>
    </div>
  );
}

export default Intro;