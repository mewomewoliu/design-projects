import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const CONNECT_LINKS = [
  { label: 'LinkedIn',        url: 'https://www.linkedin.com/in/mia-liu-856290158/' },
  { label: 'ADPList',         url: 'https://adplist.org/mentors/miaomiao' },
  { label: 'Instagram',       url: 'https://www.instagram.com/things.design_and_mia/' },
  { label: 'Medium',          url: 'https://medium.com/@mewomewoliu' },
  { label: 'Creative_Coding', url: 'https://openprocessing.org/user/402146?view=sketches' },
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

      <div className="footer-grid">
        <div className="footer-col">
          <span className="footer-col-header">◼ Contact</span>
          <a href="mailto:uxmia1996@gmail.com" className="footer-link">uxmia1996@gmail.com</a>
          <span className="footer-meta">Stockholm, Sweden</span>
        </div>

        <div className="footer-col">
          <span className="footer-col-header">◼ Connect</span>
          {CONNECT_LINKS.map(({ label, url }) => (
            <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="footer-link">
              {label}
            </a>
          ))}
        </div>

        <div className="footer-col">
          <span className="footer-col-header">◼ Availability</span>
          <span className="footer-meta">Open to consulting,<br />product design roles,<br />and conversations.</span>
        </div>
      </div>

      <div className="footer-bottom-row">
        <span className="copyright-text">© {currentYear} Crafted by Mia with Claude Code</span>
        <Link to="/about" className="footer-link">About</Link>
      </div>
    </footer>
  );
}

export default Footer;
