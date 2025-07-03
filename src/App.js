import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Intro from './components/Intro';
import SocialList from './components/SocialList';
import Navigation from './components/Navigation';
import ProjectsContainer from './components/ProjectsContainer';
import Footer from './components/Footer';
import CaseStudy from './components/CaseStudy';
import ProjectModel from './models/ProjectModel';
import ProjectPresenter from './presenters/ProjectPresenter';
import './App.css';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const isCaseStudy = location.pathname.includes('/case-study');
  const [projects, setProjects] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);

  // Load projects
  useEffect(() => {
    const model = new ProjectModel();
    const presenter = new ProjectPresenter(model, {
      renderProjects: (projectsData) => {
        setProjects(projectsData);
      }
    });

    presenter.presentProjects();
  }, []);

  // Handle URL parameters
  useEffect(() => {
    try {
      const params = new URLSearchParams(location.search);
      const tagFromUrl = params.get('tag');
      if (tagFromUrl) {
        setSelectedTag(decodeURIComponent(tagFromUrl));
      } else if (location.pathname === '/') {
        setSelectedTag(null);
      }
    } catch (error) {
      console.error('Error handling URL parameters:', error);
      setSelectedTag(null);
    }
  }, [location.search, location.pathname]);

  const handleTagClick = (tag) => {
    try {
      if (tag === selectedTag) {
        setSelectedTag(null);
        navigate('/', { replace: true });
      } else {
        setSelectedTag(tag);
        navigate(`/?tag=${encodeURIComponent(tag)}`, { replace: true });
      }
    } catch (error) {
      console.error('Error handling tag click:', error);
    }
  };

  if (isCaseStudy) {
    return (
      <div className="App">
        <Routes>
          <Route path="/case-study/:id" element={<CaseStudy />} />
        </Routes>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="main-container">
        {/* Top Row: Portfolio label, Intro, Navigation, and Social Media */}
        <div className="top-row">
          <div className="portfolio-section">
            <h2 className="main-label">◼ Design_Projects</h2>
            <Intro />
          </div>
          {/* <div className="navigation-section">
            <Navigation 
              onTagClick={handleTagClick}
              projects={projects}
              selectedTag={selectedTag}
            />
          </div> */}
          <div className="social-section">
            {/* <SocialList /> */}
          </div>
        </div>

        {/* Middle: Project Container */}
        <div className="projects-section">
          <ProjectsContainer selectedTag={selectedTag} />
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