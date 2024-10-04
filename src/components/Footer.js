import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = ({ nextCaseStudy }) => {
  return (
    <footer className="case-study-footer">
      <div className="footer-content">
        <p>© 2023 Your Name. All rights reserved.</p>
        {nextCaseStudy && (
          <Link to={`/case-study/${nextCaseStudy.id}`} className="next-case-study">
            Next Case Study: {nextCaseStudy.title} →
          </Link>
        )}
      </div>
    </footer>
  );
};

export default Footer;