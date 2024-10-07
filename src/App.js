import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import RightColumn from './components/RightColumn';
import CaseStudy from './components/CaseStudy';
import './App.css';


function AppContent() {
  const location = useLocation();
  const isCaseStudy = location.pathname.includes('/case-study');

  return (
    <div className="App">
      <div className="body-container">
        {!isCaseStudy && (
          <div className="left-column">
            <Navigation />
          </div>
        )}
        <Routes>
          <Route path="/" element={<RightColumn />} />
          <Route path="/web-design" element={<RightColumn />} />
          <Route path="/mobile-design" element={<RightColumn />} />
          <Route path="/design-system" element={<RightColumn />} />
          <Route path="/ux-research" element={<RightColumn />} />
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