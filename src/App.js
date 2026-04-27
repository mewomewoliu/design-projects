import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, NavLink, Link } from 'react-router-dom';
import posthog from 'posthog-js';
import ProjectsContainer from './components/ProjectsContainer';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import CaseStudy from './components/CaseStudy';
import About from './components/About';
import MyProducts from './components/MyProducts';
import SEO from './components/SEO';
import Intro from './components/Intro';
import Cursor from './components/Cursor';
import ProjectModel from './models/ProjectModel';
import ProjectPresenter from './presenters/ProjectPresenter';
import useScrollSaver from './hooks/useScrollRestoration';
import './App.css';

// Initialize PostHog
posthog.init(process.env.REACT_APP_POSTHOG_KEY, {
  api_host: 'https://eu.i.posthog.com',
  person_profiles: 'identified_only',
});

function AppContent() {
  const location = useLocation();
  const isCaseStudy = location.pathname.includes('/case-study');
  const isAbout = location.pathname === '/about';
  const isProducts = location.pathname === '/products';
  const [selectedTag, setSelectedTag] = useState(null);
  const sessionStartRef = useRef(null);
  const pageStartRef = useRef(null);
  const [sessionId] = useState(
    () => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  );

  // ── Session tracking ───────────────────────────────────────────────────────
  useEffect(() => {
    sessionStartRef.current = Date.now();

    const deviceInfo = {
      session_id: sessionId,
      user_agent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      languages: navigator.languages,
      viewport_width: window.innerWidth,
      viewport_height: window.innerHeight,
      screen_width: window.screen.width,
      screen_height: window.screen.height,
      screen_color_depth: window.screen.colorDepth,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      is_mobile: window.innerWidth <= 768,
      is_tablet: window.innerWidth > 768 && window.innerWidth <= 1024,
      is_desktop: window.innerWidth > 1024,
      connection_type: navigator.connection?.effectiveType || 'unknown',
      device_memory: navigator.deviceMemory || 'unknown',
      hardware_concurrency: navigator.hardwareConcurrency || 'unknown',
      cookie_enabled: navigator.cookieEnabled,
      online: navigator.onLine,
      referrer: document.referrer,
      url: window.location.href,
      timestamp: new Date().toISOString(),
    };

    posthog.capture('session_started', deviceInfo);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        if (pageStartRef.current) {
          const timeOnPage = Date.now() - pageStartRef.current;
          posthog.capture('page_hidden', {
            session_id: sessionId,
            time_on_page_ms: timeOnPage,
            time_on_page_seconds: Math.round(timeOnPage / 1000),
            page_path: location.pathname,
            page_search: location.search,
          });
        }
      } else if (document.visibilityState === 'visible') {
        pageStartRef.current = Date.now();
        posthog.capture('page_visible', {
          session_id: sessionId,
          page_path: location.pathname,
          page_search: location.search,
        });
      }
    };

    const handleBeforeUnload = () => {
      if (sessionStartRef.current) {
        const totalSessionTime = Date.now() - sessionStartRef.current;
        posthog.capture('session_ended', {
          session_id: sessionId,
          total_session_time_ms: totalSessionTime,
          total_session_time_minutes: Math.round(totalSessionTime / 60000),
          device_type:
            window.innerWidth <= 768 ? 'mobile' : window.innerWidth <= 1024 ? 'tablet' : 'desktop',
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      handleBeforeUnload();
    };
  }, [sessionId, location.pathname, location.search]);

  // ── Project preload ────────────────────────────────────────────────────────
  useEffect(() => {
    const model = new ProjectModel();
    const presenter = new ProjectPresenter(model, { renderProjects: () => {} });
    presenter.presentProjects();
  }, []);

  // ── Scroll saving + browser restoration override ───────────────────────────
  useScrollSaver();
  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
  }, []);

  // ── Page tracking + URL params ─────────────────────────────────────────────
  useEffect(() => {
    pageStartRef.current = Date.now();

    posthog.capture('page_viewed', {
      session_id: sessionId,
      page_path: location.pathname,
      page_search: location.search,
      page_hash: location.hash,
      full_url: window.location.href,
      is_case_study: isCaseStudy,
      is_about_page: isAbout,
      is_home_page: location.pathname === '/',
      device_type:
        window.innerWidth <= 768 ? 'mobile' : window.innerWidth <= 1024 ? 'tablet' : 'desktop',
      viewport_width: window.innerWidth,
      viewport_height: window.innerHeight,
      timestamp: new Date().toISOString(),
    });

    try {
      const params = new URLSearchParams(location.search);
      const tagFromUrl = params.get('tag');
      if (tagFromUrl) {
        setSelectedTag(decodeURIComponent(tagFromUrl));
        posthog.capture('tag_filter_applied', {
          session_id: sessionId,
          tag_name: decodeURIComponent(tagFromUrl),
          page_path: location.pathname,
          device_type: window.innerWidth <= 768 ? 'mobile' : 'desktop',
        });
      } else if (location.pathname === '/') {
        setSelectedTag(null);
      }
    } catch {
      setSelectedTag(null);
    }
  }, [location.search, location.pathname, location.hash, sessionId, isCaseStudy, isAbout]);

  // ── Click + scroll tracking ────────────────────────────────────────────────
  useEffect(() => {
    const handleGlobalClick = (event) => {
      const target = event.target;
      const tagName = target.tagName.toLowerCase();
      const className = target.className || '';
      const text = target.textContent?.trim() || '';

      if (tagName === 'a' || tagName === 'button' || className.includes('clickable')) {
        posthog.capture('ui_element_clicked', {
          session_id: sessionId,
          element_type: tagName,
          element_class: className,
          element_text: text.substring(0, 100),
          page_path: location.pathname,
          device_type: window.innerWidth <= 768 ? 'mobile' : 'desktop',
          click_x: event.clientX,
          click_y: event.clientY,
          timestamp: new Date().toISOString(),
        });
      }
    };

    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        );
        posthog.capture('page_scroll', {
          session_id: sessionId,
          scroll_percentage: scrollPercent,
          scroll_y: window.scrollY,
          page_height: document.body.scrollHeight,
          viewport_height: window.innerHeight,
          page_path: location.pathname,
          device_type: window.innerWidth <= 768 ? 'mobile' : 'desktop',
        });
      }, 250);
    };

    document.addEventListener('click', handleGlobalClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleGlobalClick);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [sessionId, location.pathname]);

  // ── SEO config ─────────────────────────────────────────────────────────────
  const getSEOConfig = () => {
    const baseUrl = 'https://mialiu.se';
    const baseTitle = 'Mia Liu (Miaomiao) - Creative Designer & UI Designer & Visual Designer';
    const baseDescription =
      'Mia Liu (Miaomiao) is a Product Designer and UX Designer specializing in Product Strategy, UX/UI Design, Design Systems, and AI-integrated workflows. View design portfolio and case studies.';
    const baseKeywords =
      'Mia Liu, Miaomiao Liu, Mialiu, Miaomiao, Mia design, Product Designer, UX Designer, UI Designer, Design Portfolio, Product Strategy, Design Systems, UX Design, UI Design, Scania, Thermo-Calc, Storykit, Netlight, BlaBlaCar';

    if (isAbout) {
      return {
        title: `About - ${baseTitle}`,
        description:
          'Learn more about Mia Liu (Miaomiao), Creative Designer & UI Designer & Visual Designer. View CV, experience, and skills in Product Strategy, UX/UI Design, and Design Systems.',
        keywords: `${baseKeywords}, CV, Resume, About Mia Liu, Designer Portfolio`,
        canonicalUrl: `${baseUrl}/about`,
        ogImage: `${baseUrl}/logo.png`,
      };
    }

    if (isCaseStudy) {
      return {
        title: `Case Study - ${baseTitle}`,
        description: `View design case study by Mia Liu (Miaomiao). Product Designer and UX Designer showcasing design work and methodology.`,
        keywords: `${baseKeywords}, Case Study, Design Case Study, UX Case Study`,
        canonicalUrl: `${baseUrl}${location.pathname}`,
        ogImage: `${baseUrl}/logo.png`,
      };
    }

    if (isProducts) {
      return {
        title: `My Products - ${baseTitle}`,
        description: 'Products, agents, and workflows built by Mia Liu to solve real design and workflow painpoints.',
        keywords: `${baseKeywords}, Products, Agents, Workflows, Tools`,
        canonicalUrl: `${baseUrl}/products`,
        ogImage: `${baseUrl}/logo.png`,
      };
    }

    if (location.pathname === '/blogs') {
      return {
        title: `Design Approach - ${baseTitle}`,
        description: 'Read articles by Mia Liu (Miaomiao) on Product Design, AI in Design, Creative Coding, and more.',
        keywords: `${baseKeywords}, Blog, Medium, Articles, Writing`,
        canonicalUrl: `${baseUrl}/blogs`,
        ogImage: `${baseUrl}/logo.png`,
      };
    }

    return {
      title: baseTitle,
      description: baseDescription,
      keywords: baseKeywords,
      canonicalUrl: baseUrl,
      ogImage: `${baseUrl}/logo.png`,
    };
  };

  const seoConfig = getSEOConfig();

  // ── Case study pages (no top nav) ─────────────────────────────────────────
  if (isCaseStudy) {
    return (
      <div className="App">
        <SEO {...seoConfig} />
        <Routes>
          <Route path="/case-study/:id" element={<CaseStudy />} />
        </Routes>
      </div>
    );
  }

  // ── About page (with top nav) ──────────────────────────────────────────────
  if (isAbout) {
    return (
      <div className="App">
        <SEO {...seoConfig} />
        <nav className="top-nav" role="navigation" aria-label="Main navigation">
          <NavLink to="/" className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`} end aria-label="Works">
            <span className="nav-text-full">WORKS</span>
            <span className="nav-text-short" aria-hidden="true">◼</span>
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`} aria-label="My Products">
            <span className="nav-text-full">AI_PROJECTS</span>
            <span className="nav-text-short" aria-hidden="true">◎</span>
          </NavLink>
          <NavLink to="/blogs" className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`} aria-label="Design Approach">
            <span className="nav-text-full">DESIGN_APPROACH</span>
            <span className="nav-text-short" aria-hidden="true">◈</span>
          </NavLink>
          <Link to="/about" className="nav-item active" aria-label="About">
            <span className="nav-text-full">ABOUT</span>
            <span className="nav-text-short" aria-hidden="true">◉</span>
          </Link>
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    );
  }

  // ── Main site layout ───────────────────────────────────────────────────────
  return (
    <div className="App">
      <SEO {...seoConfig} />

      {/* ── Top nav ─────────────────────────────────────────────────────── */}
      <nav className="top-nav" role="navigation" aria-label="Main navigation">
        <NavLink to="/" className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`} end aria-label="Works">
          <span className="nav-text-full">WORKS</span>
          <span className="nav-text-short" aria-hidden="true">◼</span>
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`} aria-label="My Products">
          <span className="nav-text-full">AI_PROJECTS</span>
          <span className="nav-text-short" aria-hidden="true">◎</span>
        </NavLink>
        <NavLink to="/blogs" className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`} aria-label="Design Approach">
          <span className="nav-text-full">DESIGN_APPROACH</span>
          <span className="nav-text-short" aria-hidden="true">◈</span>
        </NavLink>
        <Link to="/about" className="nav-item" aria-label="About">
          <span className="nav-text-full">ABOUT</span>
          <span className="nav-text-short" aria-hidden="true">◉</span>
        </Link>
      </nav>

      {/* ── Page content ────────────────────────────────────────────────── */}
      <main className="main-container">
        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={
              <>
                {/* Hero */}
                <section className="hero-section" aria-label="Introduction">
                  <Intro />
                </section>

                {/* Projects by category */}
                <section className="projects-section" aria-label="Projects">
                  <ProjectsContainer selectedTag={selectedTag} />
                </section>

              
                <div className="brand-header" aria-label="Design Systems">
                  <span className="brand-marquee-track brand-marquee-track--left" aria-hidden="true">
                    <span>Design Systems&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>Not Just Screens&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                </div>
                <div className="brand-header" aria-label="Not Just Screens_">
                  <span className="brand-marquee-track brand-marquee-track--right" aria-hidden="true">
                    <span>Research&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>Design&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>Build&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>Design&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>Build&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>Design&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>Build&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                   
                  </span>
                </div>

                {/* Footer */}
                <div className="footer-section">
                  <Footer />
                </div>
              </>
            }
          />

          {/* My Products */}
          <Route path="/products" element={<MyProducts />} />

          {/* Blogs / Design approach */}
          <Route
            path="/blogs"
            element={
              <>
                <div className="page-header">
                  <span className="page-header-label">_design_approach</span>
                  <h1 className="page-header-title">How I Think and How I Design</h1>
                  <p className="page-header-desc">
                    On systematic design, and the full
                    equation of desirable, viable, and feasible using AI as tools.
                  </p>
                </div>
                <section className="projects-section">
                  <Blogs />
                </section>
                <div className="footer-section">
                  <Footer />
                </div>
              </>
            }
          />

        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Cursor />
      <Routes>
        <Route path="/*" element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default App;
