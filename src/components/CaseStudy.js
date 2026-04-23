import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import posthog from 'posthog-js';
import CaseStudyModel from '../models/CaseStudyModel';
import CaseStudyPresenter from '../presenters/CaseStudyPresenter';
import Footer from './Footer';
import SEO from './SEO';
import './CaseStudy.css';

function CaseStudy() {
  const [study, setStudy] = useState(null);
  const [nextStudy, setNextStudy] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const sectionsRef = useRef([]);
  const startTimeRef = useRef(null);
  const sectionViewTimesRef = useRef({});

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    startTimeRef.current = Date.now();
    const sectionViewTimes = sectionViewTimesRef.current;

    const model = new CaseStudyModel();
    const presenter = new CaseStudyPresenter(model, {
      renderCaseStudy: (caseStudy, nextCaseStudy) => {
        setStudy(caseStudy);
        setNextStudy(nextCaseStudy);
        setNotFound(false);
        posthog.capture('case_study_viewed', {
          case_study_id: id,
          case_study_title: caseStudy.title,
          case_study_client: caseStudy.client,
          total_sections: caseStudy.sections.length,
          device_type: window.innerWidth <= 768 ? 'mobile' : 'desktop',
          viewport_width: window.innerWidth,
          viewport_height: window.innerHeight,
          user_agent: navigator.userAgent,
          timestamp: new Date().toISOString(),
        });
      },
      renderNotFound: () => {
        setStudy(null);
        setNextStudy(null);
        setNotFound(true);
        posthog.capture('case_study_not_found', {
          requested_id: id,
          device_type: window.innerWidth <= 768 ? 'mobile' : 'desktop',
        });
      },
    });

    presenter.presentCaseStudy(id);

    return () => {
      if (startTimeRef.current) {
        const timeSpent = Date.now() - startTimeRef.current;
        posthog.capture('case_study_time_spent', {
          case_study_id: id,
          time_spent_ms: timeSpent,
          time_spent_seconds: Math.round(timeSpent / 1000),
          time_spent_minutes: Math.round(timeSpent / 60000),
          section_view_times: sectionViewTimes,
          device_type: window.innerWidth <= 768 ? 'mobile' : 'desktop',
        });
      }
    };
  }, [id]);

  useEffect(() => {
    const sections = sectionsRef.current;
    if (!('IntersectionObserver' in window)) {
      sections.forEach(s => { if (s) s.classList.add('visible'); });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          const idx = sections.indexOf(entry.target);
          const title = study?.sections[idx]?.title || `Section ${idx + 1}`;
          if (!sectionViewTimesRef.current[idx]) {
            sectionViewTimesRef.current[idx] = { title, start_time: Date.now(), total_time: 0 };
          }
          posthog.capture('case_study_section_viewed', {
            case_study_id: id,
            section_index: idx,
            section_title: title,
            device_type: window.innerWidth <= 768 ? 'mobile' : 'desktop',
          });
        } else {
          const idx = sections.indexOf(entry.target);
          const rec = sectionViewTimesRef.current[idx];
          if (rec && rec.start_time) {
            rec.total_time += Date.now() - rec.start_time;
            rec.start_time = null;
          }
        }
      });
    }, { rootMargin: '50px', threshold: 0.1 });

    sections.forEach(s => { if (s) { s.classList.add('visible'); observer.observe(s); } });
    return () => { sections.forEach(s => { if (s) observer.unobserve(s); }); };
  }, [study, id]);

  if (notFound) return (
    <div className="cs-message">
      <p>Case study not found.</p>
      <Link to="/" className="cs-back">← Back to works</Link>
    </div>
  );
  if (!study)   return <div className="cs-message cs-message--loading">Loading_</div>;

  const renderMedia = (media) => {
    if (!media?.src) return null;
    if (media.type === 'image') {
      return <img src={media.src} alt={media.alt || ''} className="cs-media" />;
    }
    if (media.type === 'video') {
      return (
        <video
          className="cs-media cs-media--video"
          autoPlay muted loop playsInline
          webkit-playsinline="true"
          preload="metadata"
        >
          <source src={media.src} type="video/mp4" />
        </video>
      );
    }
    return null;
  };

  const toAnchorId = (title) => (title || '').toLowerCase().replace(/\s+/g, '-');

  const BRIEF = [
    { key: 'Client',  val: study.client },
    { key: 'Role',    val: study.role },
    { key: 'Time',    val: study.time },
    { key: 'Process', val: study.process },
  ];

  const seoTitle = `${study.title} — Case Study by Mia Liu`;
  const seoDescription = `${study.description} — Product design case study by Mia Liu, Product Designer at Netlight.`;

  return (
    <div className="case-study">
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={`https://mialiu.se/case-study/${study.id}`}
        ogImage="https://mialiu.se/logo.png"
      />

      {/* ── Sticky nav ─────────────────────────────────────────────────── */}
      <div className="cs-inner">
        <nav className="cs-nav">
          <Link
            to="/"
            className="cs-back"
            onClick={(e) => {
              e.preventDefault();
              if (location.state?.fromPortfolio) {
                navigate(-1);
              } else {
                navigate('/');
              }
            }}
          >GOOOOOOO BACK_</Link>
        </nav>
      </div>

      {/* ── Header: title + metadata ────────────────────────────────────── */}
      <div className="cs-inner">
        <header className="cs-header">
          <div className="cs-header-text">
            <h1 className="cs-title">{study.title}</h1>
            <p className="cs-desc">{study.description}</p>
          </div>
          <div className="cs-brief">
            {BRIEF.map(({ key, val }) => (
              <div className="cs-brief-item" key={key}>
                <span className="cs-brief-key">{key}</span>
                <span className="cs-brief-val">{val}</span>
              </div>
            ))}
          </div>
        </header>
      </div>

      {/* ── Hero media — full bleed ─────────────────────────────────────── */}
      {(study.videoSrc || study.imageSrc) && (
        <div className="cs-hero">
          {study.videoSrc ? (
            <video
              src={study.videoSrc}
              className="cs-hero-media"
              controls={!isMobile}
              autoPlay muted loop playsInline
              webkit-playsinline="true"
              preload="metadata"
            />
          ) : (
            <img src={study.imageSrc} alt={study.title} className="cs-hero-media" />
          )}
        </div>
      )}

      {/* ── In-progress notice ────────────────────────────────────────── */}
      {/* {study.status === 'in-progress' && (
        <div className="cs-inner">
          <div className="cs-wip-banner">
            <span className="cs-wip-mark">◼</span>
            <div className="cs-wip-text">
              <span className="cs-wip-label">DOCUMENTATION IN PROGRESS</span>
              <span className="cs-wip-detail">Full case study available on request — <a href="mailto:uxmia1996@gmail.com">uxmia1996@gmail.com</a></span>
            </div>
          </div>
        </div>
      )} */}

      {/* ── Content ────────────────────────────────────────────────────── */}
      <div className="cs-inner">
        <div className="cs-content">

          {study.sections.map((section, index) => {
            const isFullWidth =
              (!section.title || section.title.trim() === '') &&
              (!section.paragraphs || section.paragraphs.length === 0);

            return (
              <div
                key={index}
                className={`cs-section${isFullWidth ? ' cs-section--full' : ''}`}
                ref={el => (sectionsRef.current[index] = el)}
                id={toAnchorId(section.title)}
              >
                {!isFullWidth && (
                  <>
                    <h2
                      className="cs-section-title"
                      dangerouslySetInnerHTML={{ __html: section.title }}
                    />
                    <div className="cs-section-text">
                      {section.paragraphs.map((p, i) => (
                        <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                      ))}
                    </div>
                    {section.media && (
                      <div className="cs-section-media">
                        {renderMedia(section.media)}
                      </div>
                    )}
                  </>
                )}
                {isFullWidth && section.media && (
                  <div className="cs-section-media">
                    {renderMedia(section.media)}
                  </div>
                )}
              </div>
            );
          })}

          {/* ── Credits ──────────────────────────────────────────────── */}
          {study.credits?.length > 0 && (
            <div className="cs-credits">
              <span className="cs-section-title">Credits</span>
              <ul>
                {study.credits.map((credit, i) => (
                  <li key={i}>{credit}</li>
                ))}
              </ul>
            </div>
          )}

          {/* ── Footer ───────────────────────────────────────────────── */}
          <Footer
            nextCaseStudy={nextStudy}
            nextCaseStudyLink={nextStudy ? `/case-study/${nextStudy.id}` : null}
          />
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
