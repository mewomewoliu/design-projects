import React from 'react';
import { Link } from 'react-router-dom';
import Intro from './Intro';
import SocialList from './SocialList';
import './Footer.css';

const SOCIAL_LINKS = [
  { label: '[A] Linkedin', url: 'https://www.linkedin.com/in/mia-liu-856290158/', external: true },
  { label: '[B] ADPList', url: 'https://adplist.org/mentors/miaomiao', external: true },
  { label: '[C] Instagram', url: 'https://www.instagram.com/things.design_and_mia/', external: true },
  { label: '[D] Medium', url: 'https://medium.com/@mewomewoliu', external: true },
  { label: '[E] Creative_Coding', url: 'https://openprocessing.org/user/402146?view=sketches', external: true },
  { label: '[F] About me', url: '/about', external: false },
];

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

      <div className="brand-header">
        Mia Liu Design
      </div>

      <div className="footer-intro-wrapper">
        <Intro />
      </div>

      <div className="footer-divider"></div>

      <div className="footer-grid">
        <div className="footer-col col-address">
          <div className="address-block">
            <p>📍 Stockholm Based </p>
            {/* <p>Available for remote work</p> */}
            <a href="mailto:uxmia1996@gmail.com" className="email-link"> 📌 uxmia1996@gmail.com</a>
          </div>
        </div>

        <div className="footer-col col-empty">
          {/* Spacer column or additional info if needed */}
        </div>
         <SocialList />
      </div>

      <div className="footer-bottom-bar">
        <p className="copyright-text">© {currentYear} crafted by Mia with my bestie Cursor. All rights reserved but high-fives are free ✋ </p>
      </div>
    </footer>
  );
}

export default Footer;
