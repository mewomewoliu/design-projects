import React from 'react';
import './SocialList.css';

const SOCIAL_LINKS = [
  { label: '[A] Linkedin', url: 'https://www.linkedin.com/in/mia-liu/' },
  { label: '[B] ADPList', url: 'https://adplist.org/mentors/mia-liu' },
  { label: '[C] Instagram', url: 'https://www.instagram.com/yourusername/' },
  { label: '[D] Medium', url: 'https://medium.com/@yourusername' },
  { label: '[E] Creative_Coding', url: 'https://openprocessing.org/user/402146?view=sketches' },
  { label: '[F] Email: helloicidesign@gmail.com', url: 'mailto:helloicidesign@gmail.com' },
];

function SocialList() {
  return (
    <ul className="social-list">
      {SOCIAL_LINKS.map((item) => (
        <li key={item.label}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.label}
            
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialList; 