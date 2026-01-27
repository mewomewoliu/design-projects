import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import posthog from 'posthog-js';
import CaseStudyModel from '../models/CaseStudyModel';
import CaseStudyPresenter from '../presenters/CaseStudyPresenter';
import Footer from './Footer';
import './CaseStudy.css';

function CaseStudy() {
  const [study, setStudy] = useState(null);
  const [nextStudy, setNextStudy] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { id } = useParams();
  const sectionsRef = useRef([]);
  const startTimeRef = useRef(null);
  const sectionViewTimesRef = useRef({});

  // Handle responsive design for video controls
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Record start time for this case study view
    startTimeRef.current = Date.now();
    const sectionViewTimes = sectionViewTimesRef.current;
    
    const model = new CaseStudyModel();
    const presenter = new CaseStudyPresenter(model, {
      renderCaseStudy: (caseStudy, nextCaseStudy) => {
        setStudy(caseStudy);
        setNextStudy(nextCaseStudy);
        setNotFound(false);
        
        // Track case study view with device info
        posthog.capture('case_study_viewed', {
          case_study_id: id,
          case_study_title: caseStudy.title,
          case_study_client: caseStudy.client,
          total_sections: caseStudy.sections.length,
          device_type: window.innerWidth <= 768 ? 'mobile' : 'desktop',
          viewport_width: window.innerWidth,
          viewport_height: window.innerHeight,
          user_agent: navigator.userAgent,
          timestamp: new Date().toISOString()
        });
      },
      renderNotFound: () => {
        setStudy(null);
        setNextStudy(null);
        setNotFound(true);
        
        // Track 404 case study
        posthog.capture('case_study_not_found', {
          requested_id: id,
          device_type: window.innerWidth <= 768 ? 'mobile' : 'desktop'
        });
      }
    });

    presenter.presentCaseStudy(id);
    
    // Cleanup function to track time spent when leaving
    return () => {
      if (startTimeRef.current) {
        const timeSpent = Date.now() - startTimeRef.current;
        posthog.capture('case_study_time_spent', {
          case_study_id: id,
          time_spent_ms: timeSpent,
          time_spent_seconds: Math.round(timeSpent / 1000),
          time_spent_minutes: Math.round(timeSpent / 60000),
          section_view_times: sectionViewTimes,
          device_type: window.innerWidth <= 768 ? 'mobile' : 'desktop'
        });
      }
    };
  }, [id]);

  useEffect(() => {
    // Progressive enhancement: only add animation if intersection observer is supported
    const sections = sectionsRef.current;
    
    if (!('IntersectionObserver' in window)) {
      // Fallback: just ensure all sections are visible
      sections.forEach(section => {
        if (section) section.classList.add('visible');
      });
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Track section viewing
          const sectionIndex = sections.indexOf(entry.target);
          const sectionTitle = study?.sections[sectionIndex]?.title || `Section ${sectionIndex + 1}`;
          
          // Record when user starts viewing this section
          if (!sectionViewTimesRef.current[sectionIndex]) {
            sectionViewTimesRef.current[sectionIndex] = {
              title: sectionTitle,
              start_time: Date.now(),
              total_time: 0
            };
          }
          
          posthog.capture('case_study_section_viewed', {
            case_study_id: id,
            section_index: sectionIndex,
            section_title: sectionTitle,
            device_type: window.innerWidth <= 768 ? 'mobile' : 'desktop'
          });
        } else {
          // Track time spent when section leaves viewport
          const sectionIndex = sections.indexOf(entry.target);
          if (sectionViewTimesRef.current[sectionIndex] && sectionViewTimesRef.current[sectionIndex].start_time) {
            const timeInSection = Date.now() - sectionViewTimesRef.current[sectionIndex].start_time;
            sectionViewTimesRef.current[sectionIndex].total_time += timeInSection;
            sectionViewTimesRef.current[sectionIndex].start_time = null;
          }
        }
      });
    }, observerOptions);

    // Make sections visible immediately, then optionally add animation
    sections.forEach(section => {
      if (section) {
        section.classList.add('visible');
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [study, id]);

  if (notFound) return <div>Case study not found</div>;
  if (!study) return <div>Loading...</div>;

  const renderMedia = (media) => {
    if (!media || !media.src) return null;

    if (media.type === "image") {
      return <img src={media.src} alt={media.alt || ""} className="case-study-media" />;
    } else if (media.type === "video") {
      return (
        <video 
          className="case-study-media case-study-video" 
          autoPlay 
          muted 
          loop 
          playsInline
          webkit-playsinline="true"
          preload="metadata"
          controls={!isMobile}
        >
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

  return (
    <div className="case-study">
      {/* Header Section */}
      <div className="case-study-header">
        <Link to="/" className="main-label">◼ All_Design_Projects</Link>
        <div className="case-study-intro">
          
          <div className="case-study-title">
            <h1 className="main-h1">{study.title}</h1>
            <h2 className="main-h2">{study.description}</h2>
          {/* <p className="case-study-update">[2024 UPDATE]</p> */}
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
            className="case-study-video case-study-hero-video"
            controls={!isMobile}
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            preload="metadata"
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
        {study.sections.map((section, index) => {
          // Check if section should be full width (no title and no paragraphs)
          const isFullWidth = (!section.title || section.title.trim() === '') && 
                              (!section.paragraphs || section.paragraphs.length === 0);
          
          return (
          <div 
            key={index} 
            className={`case-study-section ${isFullWidth ? 'full-width' : ''}`}
            ref={el => sectionsRef.current[index] = el}
            id={generateAnchorId(section.title)}
          >
            <div className="case-study-section-left">
              <h2 className="main-h2" dangerouslySetInnerHTML={{ __html: section.title }}></h2>
              <div className="case-study-text-column">
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                ))}
              </div>
            </div>
            <div className="case-study-section-right">
              {section.media && (
                <div className="case-study-section-media">
                  {renderMedia(section.media)}
                </div>
              )}
            </div>
          </div>
          );
        })}

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