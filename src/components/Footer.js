import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer({ nextCaseStudy, nextCaseStudyLink }) {
  return (
    <footer className="case-study-footer">
      <div className="footer-content">
        <p>© 2023 Your Name. All rights reserved.</p>
        {nextCaseStudy && nextCaseStudyLink && (
          <Link to={nextCaseStudyLink} className="next-case-study-link">
            Next Case Study: {nextCaseStudy.title} →
          </Link>
        )}
      </div>
    </footer>
  );
}

export default Footer;