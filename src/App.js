import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, NavLink } from 'react-router-dom';
import posthog from 'posthog-js';
import ProjectsContainer from './components/ProjectsContainer';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import CaseStudy from './components/CaseStudy';
import About from './components/About';
import SEO from './components/SEO';
import ProjectModel from './models/ProjectModel';
import ProjectPresenter from './presenters/ProjectPresenter';
import './App.css';

// Initialize PostHog
posthog.init('phc_wLQOzTGjeDsu2ZhwJBgSNc8qkerfTS1PA998617YbJY',
    {
        api_host: 'https://eu.i.posthog.com',
        person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
    }
);

function AppContent() {
  const location = useLocation();
  const isCaseStudy = location.pathname.includes('/case-study');
  const isAbout = location.pathname === '/about';
  const [selectedTag, setSelectedTag] = useState(null);
  const sessionStartRef = useRef(null);
  const pageStartRef = useRef(null);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);

  // Initialize session tracking and device info
  useEffect(() => {
    // Record session start
    sessionStartRef.current = Date.now();
    
    // Collect comprehensive device and browser information
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
      timestamp: new Date().toISOString()
    };
    
    // Track session start with device info
    posthog.capture('session_started', deviceInfo);
    
    // Set up page visibility tracking
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // Track time spent when tab becomes hidden
        if (pageStartRef.current) {
          const timeOnPage = Date.now() - pageStartRef.current;
          posthog.capture('page_hidden', {
            session_id: sessionId,
            time_on_page_ms: timeOnPage,
            time_on_page_seconds: Math.round(timeOnPage / 1000),
            page_path: location.pathname,
            page_search: location.search
          });
        }
      } else if (document.visibilityState === 'visible') {
        // Reset timer when tab becomes visible again
        pageStartRef.current = Date.now();
        posthog.capture('page_visible', {
          session_id: sessionId,
          page_path: location.pathname,
          page_search: location.search
        });
      }
    };
    
    // Set up beforeunload tracking for session end
    const handleBeforeUnload = () => {
      if (sessionStartRef.current) {
        const totalSessionTime = Date.now() - sessionStartRef.current;
        posthog.capture('session_ended', {
          session_id: sessionId,
          total_session_time_ms: totalSessionTime,
          total_session_time_minutes: Math.round(totalSessionTime / 60000),
          device_type: window.innerWidth <= 768 ? 'mobile' : window.innerWidth <= 1024 ? 'tablet' : 'desktop'
        });
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      handleBeforeUnload(); // Track session end on component cleanup
    };
  }, [sessionId, location.pathname, location.search]);

  // Load projects
  useEffect(() => {
    const model = new ProjectModel();
    const presenter = new ProjectPresenter(model, {
      renderProjects: () => {
        // Projects loaded
      }
    });

    presenter.presentProjects();
  }, []);

  // Handle URL parameters and page tracking
  useEffect(() => {
    // Track page view with enhanced context
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
      device_type: window.innerWidth <= 768 ? 'mobile' : window.innerWidth <= 1024 ? 'tablet' : 'desktop',
      viewport_width: window.innerWidth,
      viewport_height: window.innerHeight,
      timestamp: new Date().toISOString()
    });
    
    try {
      const params = new URLSearchParams(location.search);
      const tagFromUrl = params.get('tag');
      if (tagFromUrl) {
        setSelectedTag(decodeURIComponent(tagFromUrl));
        
        // Track tag filtering
        posthog.capture('tag_filter_applied', {
          session_id: sessionId,
          tag_name: decodeURIComponent(tagFromUrl),
          page_path: location.pathname,
          device_type: window.innerWidth <= 768 ? 'mobile' : 'desktop'
        });
      } else if (location.pathname === '/') {
        setSelectedTag(null);
      }
    } catch (error) {
      console.error('Error handling URL parameters:', error);
      setSelectedTag(null);
    }
  }, [location.search, location.pathname, location.hash, sessionId, isCaseStudy, isAbout]);

  // General click tracking for the entire app
  useEffect(() => {
    const handleGlobalClick = (event) => {
      const target = event.target;
      const tagName = target.tagName.toLowerCase();
      const className = target.className || '';
      const text = target.textContent?.trim() || '';
      
      // Track clicks on important UI elements
      if (tagName === 'a' || tagName === 'button' || className.includes('clickable')) {
        posthog.capture('ui_element_clicked', {
          session_id: sessionId,
          element_type: tagName,
          element_class: className,
          element_text: text.substring(0, 100), // Limit text length
          page_path: location.pathname,
          device_type: window.innerWidth <= 768 ? 'mobile' : 'desktop',
          click_x: event.clientX,
          click_y: event.clientY,
          timestamp: new Date().toISOString()
        });
      }
    };

    document.addEventListener('click', handleGlobalClick);
    
    // Scroll tracking
    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        
        posthog.capture('page_scroll', {
          session_id: sessionId,
          scroll_percentage: scrollPercent,
          scroll_y: window.scrollY,
          page_height: document.body.scrollHeight,
          viewport_height: window.innerHeight,
          page_path: location.pathname,
          device_type: window.innerWidth <= 768 ? 'mobile' : 'desktop'
        });
      }, 250); // Throttle scroll events
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('click', handleGlobalClick);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [sessionId, location.pathname]);

  // SEO configuration based on current route
  const getSEOConfig = () => {
    const baseUrl = 'https://mialiu.se';
    const baseTitle = 'Mia Liu (Miaomiao) - Product Designer & UX Designer Portfolio';
    const baseDescription = 'Mia Liu (Miaomiao) is a Product Designer and UX Designer specializing in Product Strategy, UX/UI Design, Design Systems, and AI-integrated workflows. View design portfolio and case studies.';
    const baseKeywords = 'Mia Liu, Miaomiao Liu, Mialiu, Miaomiao, Mia design, Product Designer, UX Designer, UI Designer, Design Portfolio, Product Strategy, Design Systems, UX Design, UI Design, Scania, Thermo-Calc, Storykit, Netlight, BlaBlaCar';
    
    if (isAbout) {
      return {
        title: `About - ${baseTitle}`,
        description: 'Learn more about Mia Liu (Miaomiao), Product Designer and UX Designer. View CV, experience, and skills in Product Strategy, UX/UI Design, and Design Systems.',
        keywords: `${baseKeywords}, CV, Resume, About Mia Liu, Designer Portfolio`,
        canonicalUrl: `${baseUrl}/about`,
        ogImage: `${baseUrl}/logo.png`
      };
    }
    
    if (isCaseStudy) {
      return {
        title: `Case Study - ${baseTitle}`,
        description: `View design case study by Mia Liu (Miaomiao). Product Designer and UX Designer showcasing design work and methodology.`,
        keywords: `${baseKeywords}, Case Study, Design Case Study, UX Case Study, Product Design Case Study`,
        canonicalUrl: `${baseUrl}${location.pathname}`,
        ogImage: `${baseUrl}/logo.png`
      };
    }
    
    if (location.pathname === '/blogs') {
      return {
        title: `Blogs - ${baseTitle}`,
        description: 'Read Medium articles by Mia Liu (Miaomiao) on Product Design, Creative Coding, and more.',
        keywords: `${baseKeywords}, Blog, Medium, Articles, Writing`,
        canonicalUrl: `${baseUrl}/blogs`,
        ogImage: `${baseUrl}/logo.png`
      };
    }

    // Home page
    return {
      title: baseTitle,
      description: baseDescription,
      keywords: baseKeywords,
      canonicalUrl: baseUrl,
      ogImage: `${baseUrl}/logo.png`
    };
  };

  const seoConfig = getSEOConfig();

  if (isCaseStudy || isAbout) {
    return (
      <div className="App">
        <SEO {...seoConfig} />
        <Routes>
          <Route path="/case-study/:id" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    );
  }

  return (
    <div className="App">
      <SEO {...seoConfig} />
      <div className="main-container">
        {/* Top Row: Portfolio label, Intro, Navigation, and Social Media */}
        <div className="top-row">
          <div className="portfolio-section">
            <div className="main-nav">
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "main-label nav-tab active" : "main-label nav-tab"}
                end
              >
                ◼ _projects_
              </NavLink>
              <NavLink 
                to="/blogs" 
                className={({ isActive }) => isActive ? "main-label nav-tab active" : "main-label nav-tab"}
              >
                ◼ _blogs_
              </NavLink>
              <a 
                href="#footer"
                className="main-label nav-tab"
                onClick={(e) => {
                  e.preventDefault();
                  const footer = document.querySelector('.footer-section');
                  if (footer) {
                    footer.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                ◼ _ohlala_
              </a>
            </div>
          </div>
          {/* <div className="navigation-section">
            <Navigation 
              onTagClick={handleTagClick}
              projects={projects}
              selectedTag={selectedTag}
            />
          </div> */}
          <div className="social-section">
            {/* <Intro /> */}
            {/* <SocialList /> */}
          </div>
        </div>

        {/* Middle: Project Container */}
        <div className="projects-section">
          <Routes>
            <Route path="/" element={<ProjectsContainer selectedTag={selectedTag} />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </div>

        {/* Bottom Row: Footer */}
        <div className="footer-section">

          <Footer />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default App;