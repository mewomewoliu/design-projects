import React from 'react';
import { Link } from 'react-router-dom';
import './SocialList.css';

const SOCIAL_LINKS = [
  { label: '[A] Linkedin', url: 'https://www.linkedin.com/in/mia-liu-856290158/', external: true },
  { label: '[B] ADPList', url: 'https://adplist.org/mentors/miaomiao', external: true },
  { label: '[C] Instagram', url: 'https://www.instagram.com/things.design_and_mia/', external: true },
  { label: '[D] Medium', url: 'https://medium.com/@mewomewoliu', external: true },
  { label: '[E] Creative_Coding', url: 'https://openprocessing.org/user/402146?view=sketches', external: true },
  { label: '[F] About me', url: '/about', external: false },
  // { label: '[G] Email: uxmia1996@gmail.com', url: 'mailto:uxmia1996@gmail.com',external: true},
];

function SocialList() {
  return (
    <ul className="social-list">
      {SOCIAL_LINKS.map((item) => (
        <li key={item.label}>
          {item.external ? (
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          ) : (
            <Link to={item.url}>
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default SocialList; 