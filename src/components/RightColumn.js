import React from 'react';
import Header from './Header';
import ProjectsContainer from './ProjectsContainer';
import Footer from './Footer';

function RightColumn({ selectedTag }) {
  return (
    <div className="right-column">
      <Header />
      <ProjectsContainer selectedTag={selectedTag} />
      <Footer />
    </div>
  );
}

export default RightColumn;