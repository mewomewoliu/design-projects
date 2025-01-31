import React from 'react';

function Navigation({ onTagClick, projects = [], selectedTag }) {
  const navigationItems = [
    { text: 'Product Design', number: '01' },
    { text: 'Design System', number: '02' },
    { text: 'Research', number: '03' },
    { text: 'Graphic Design', number: '04' },
    { text: 'Creative Coding', number: '05' }
  ];

  // Calculate project counts for each category
  const getProjectCount = (category) => {
    try {
      if (!Array.isArray(projects)) return 0;
      return projects.filter(project => 
        project && Array.isArray(project.tags) && 
        project.tags.includes(category)
      ).length;
    } catch (error) {
      console.error('Error calculating project count:', error);
      return 0;
    }
  };

  const handleClick = (tag, e) => {
    e.preventDefault();
    if (onTagClick && typeof onTagClick === 'function') {
      onTagClick(tag);
    }
  };

  return (
    <nav className="navigation">
      <h2>◼ DESIGN PROJECTS INDEX</h2>
      <ul>
        {navigationItems.map((item) => {
          const count = getProjectCount(item.text);
          const formattedCount = count.toString().padStart(2, '0');
          const isSelected = selectedTag === item.text;
          
          return (
            <li key={item.text}>
              <a 
                href={`/?tag=${encodeURIComponent(item.text)}`}
                onClick={(e) => handleClick(item.text, e)}
                className={isSelected ? 'selected' : ''}
                aria-current={isSelected ? 'page' : undefined}
              >
                <span className="tag-text">{item.text}</span>
                <span className="item-number">({formattedCount})</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;