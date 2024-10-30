import React from 'react';

function Navigation() {
  return (
    <nav className="navigation">
      <h2>[DESIGN PROJECTS]</h2>
      {/* <h1>在这设计</h1> */}
      <ul>
        <li><a href="/web-design">Web Design</a></li>
        <li><a href="/mobile-design">Mobile Design</a></li>
        <li><a href="/design-system">Design System</a></li>
        <li><a href="/ux-research">UX Research</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;