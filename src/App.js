import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import RightColumn from './components/RightColumn';
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

  return (
    <div className="App">
      <div className="body-container">
        {!isCaseStudy && (
          <div className="left-column">
            <Navigation 
              onTagClick={handleTagClick} 
              projects={projects}
              selectedTag={selectedTag}
            />
          </div>
        )}
        <Routes>
          <Route path="/" element={<RightColumn selectedTag={selectedTag} />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;