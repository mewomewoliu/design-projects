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

  return (
    <div className="case-study">
      <div className="case-study-left-column">
        <div className="case-study-left-content">
          <Link to="/" className="back-link">[DESIGN PROJECTS]</Link>
          <h1>{study.title}</h1>
          <div className="case-study-brief">
            <p><strong>[Client]</strong> {study.client}</p>
            <p><strong>[Role]</strong> {study.role}</p>
            <p><strong>[Time]</strong> {study.time}</p>
            <p><strong>[Process]</strong> {study.process}</p>
          </div>
        </div>
        <div className="case-study-credits">
          <h3>[Credits]</h3>
          <ul>
            {study.credits.map((credit, index) => (
              <li key={index}>{credit}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="case-study-right-column">
        <h2 className="case-study-description">{study.description}</h2>
        <p className="case-study-update">[2024 UPDATE]</p>
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
        <div className="case-study-content">
          {study.sections.map((section, index) => (
            <div 
              key={index} 
              className="case-study-section"
              ref={el => sectionsRef.current[index] = el}
              id={generateAnchorId(section.title)}
            >
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
              {renderMedia(section.media)}
            </div>
          ))}
        </div>
        <Footer 
          nextCaseStudy={nextStudy} 
          nextCaseStudyLink={nextStudy ? `/case-study/${nextStudy.id}` : null}
        />
      </div>
      <div className="case-study-menu">
        <h3>[CONTENTS]</h3>
        <ul>
          {study.sections.map((section, index) => (
            <li key={index}>
              <a 
                href={`#${generateAnchorId(section.title)}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(generateAnchorId(section.title));
                }}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CaseStudy;