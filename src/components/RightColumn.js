import React from 'react';
import Header from './Header';
import ProjectsContainer from './ProjectsContainer';
import Footer from './Footer';

function RightColumn() {
  return (
    <div className="right-column">
      <Header />
      <ProjectsContainer />
      <Footer />
    </div>
  );
}

export default RightColumn;