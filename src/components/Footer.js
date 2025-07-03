import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import SocialList from './SocialList';

function Footer({ nextCaseStudy, nextCaseStudyLink }) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="case-study-footer">
      <div className="footer-content">
       
        {nextCaseStudy && nextCaseStudyLink && (
          <Link to={nextCaseStudyLink} className="next-case-study-link">
            Next Case Study: {nextCaseStudy.title} →
          </Link>
        )}
        <div className="footer-text">
         
          <SocialList />
          <p>© {currentYear} crafted with love by Mia ✦ All rights reserved but high-fives are free ✋</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;