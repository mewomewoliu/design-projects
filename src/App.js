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
          <Route path="/Product-Design" element={<RightColumn />} />
          {/* <Route path="/Web-Design" element={<RightColumn />} />
          <Route path="/Mobile-Design" element={<RightColumn />} /> */}
          <Route path="/Design-System" element={<RightColumn />} />
          <Route path="/Research" element={<RightColumn />} />
          <Route path="/Graphic-Design" element={<RightColumn />} />
          <Route path="/Creative-Coding" element={<RightColumn />} />
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