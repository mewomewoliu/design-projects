import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import SocialList from './SocialList';

function Footer({ nextCaseStudy, nextCaseStudyLink }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      {nextCaseStudy && nextCaseStudyLink && (
        <div className="next-case-study-container">
          <Link to={nextCaseStudyLink} className="next-case-study-link">
            Next Case Study: {nextCaseStudy.title} →
          </Link>
        </div>
      )}

     
      <div className="footer-divider" />
     {/* Social links */}
      <div className="social-section" aria-label="Connect">
                  {/* <span className="nav-item"> ◼ connect</span> */}
                  <SocialList horizontal />
      </div>
      <div className="footer-bottom-row">
        
        <div className="footer-address">
          <span>Stockholm, Sweden</span>
          <a href="mailto:uxmia1996@gmail.com" className="footer-email">
            uxmia1996@gmail.com
          </a>
        </div>
        <p className="copyright-text">
          © {currentYear} crafted by Mia with Claude Code.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
