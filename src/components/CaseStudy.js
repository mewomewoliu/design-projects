import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import CaseStudyModel from '../models/CaseStudyModel';
import CaseStudyPresenter from '../presenters/CaseStudyPresenter';
import Footer from './Footer';
import './CaseStudy.css';

function CaseStudy() {
  const [study, setStudy] = useState(null);
  const [nextStudy, setNextStudy] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const { id } = useParams();
  const sectionsRef = useRef([]);

  useEffect(() => {
    const model = new CaseStudyModel();
    const presenter = new CaseStudyPresenter(model, {
      renderCaseStudy: (caseStudy, nextCaseStudy) => {
        setStudy(caseStudy);
        setNextStudy(nextCaseStudy);
        setNotFound(false);
      },
      renderNotFound: () => {
        setStudy(null);
        setNextStudy(null);
        setNotFound(true);
      }
    });

    presenter.presentCaseStudy(id);
  }, [id]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [study]);

  if (notFound) return <div>Case study not found</div>;
  if (!study) return <div>Loading...</div>;

  const renderMedia = (media) => {
    if (!media || !media.src) return null;

    if (media.type === "image") {
      return <img src={media.src} alt={media.alt || ""} className="case-study-media" />;
    } else if (media.type === "video") {
      return (
        <video className="case-study-media" controls>
          <source src={media.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
    return null;
  };

  const generateAnchorId = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to randomly highlight words in a paragraph
  const highlightRandomWords = (text) => {
    return text.split(' ').map((word, index) => {
      // Randomly decide to highlight (about 10% chance)
      const shouldHighlight = Math.random() < 0.1;
      return shouldHighlight ? 
        <span key={index} className="highlight">{word + ' '}</span> : 
        <span key={index}>{word + ' '}</span>;
    });
  };

  return (
    <div className="case-study">
      {/* Header Section */}
      <div className="case-study-header">
        <Link to="/" className="back-link">◼_ALL PROJECTS</Link>
        
        <div className="case-study-intro">
          {/* <h1>{study.title}</h1> */}
          <div className="case-study-title">
          <h2 className="case-study-description">{study.description}</h2>
          <p className="case-study-update">[2024 UPDATE]</p>
          </div>
          <div className="case-study-brief">
            <p>[Client] {study.client}</p>
            <p>[Role] {study.role}</p>
            <p>[Time] {study.time}</p>
            <p>[Process] {study.process}</p>
          </div>
        </div>

        {/* Hero Media */}
        <div className="case-study-media-container"> 
        {study.videoSrc ? (
          <video 
            src={study.videoSrc} 
            className="case-study-video"
            controls
            autoPlay
            muted
            loop
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <img 
            src={study.imageSrc} 
            alt={study.title}
            className="case-study-image"
          />
        )}
        </div>
        
      </div>

      {/* Content Section */}
      <div className="case-study-content">
        {study.sections.map((section, index) => (
          <div 
            key={index} 
            className="case-study-section"
            ref={el => sectionsRef.current[index] = el}
            id={generateAnchorId(section.title)}
          >
            <h2>{section.title}</h2>
            
            {/* Two-column text content */}
            <div className="case-study-section-content">
              <div className="case-study-text-column">
                {section.paragraphs.slice(0, Math.ceil(section.paragraphs.length / 2)).map((paragraph, pIndex) => (
                  <p key={pIndex}>{highlightRandomWords(paragraph)}</p>
                ))}
              </div>
              <div className="case-study-text-column">
                {section.paragraphs.slice(Math.ceil(section.paragraphs.length / 2)).map((paragraph, pIndex) => (
                  <p key={pIndex + Math.ceil(section.paragraphs.length / 2)}>{highlightRandomWords(paragraph)}</p>
                ))}
              </div>
            </div>
            
            {/* Full-width media */}
            {section.media && (
              <div className="case-study-media-container">
                {renderMedia(section.media)}
              </div>
            )}
          </div>
        ))}

        {/* Credits Section */}
        <div className="case-study-credits">
          <h3>◼ CREDITS</h3>
          <ul>
            {study.credits.map((credit, index) => (
              <li key={index}>{credit}</li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <Footer 
          nextCaseStudy={nextStudy} 
          nextCaseStudyLink={nextStudy ? `/case-study/${nextStudy.id}` : null}
        />
      </div>
    </div>
  );
}

export default CaseStudy;