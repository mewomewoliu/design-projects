import React from 'react';

function Navigation() {
  return (
    <nav className="navigation">
      <h2>[DESIGN PROJECTS]</h2>
      {/* <h1>在这设计</h1> */}
      <ul>
      
        <li><a href="/Product-Design">Product Design</a></li>
        {/* <li><a href="/Web-Design">Web Design</a></li>
        <li><a href="/Mobile-Design">Mobile Design</a></li> */}
        <li><a href="/Design-System">Design System</a></li>
        <li><a href="/Research">Research</a></li>
        <li><a href="/Graphic-Design">Graphic Design</a></li>
        <li><a href="/Creative-Coding">Creative Coding</a></li>
        
      </ul>
    </nav>
  );
}

export default Navigation;