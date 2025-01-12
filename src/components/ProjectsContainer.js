import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectModel from '../models/ProjectModel';
import ProjectPresenter from '../presenters/ProjectPresenter';
import './ProjectsContainer.css';

function ProjectsContainer() {
  const [projects, setProjects] = useState([]);
  const projectRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const model = new ProjectModel();
    const presenter = new ProjectPresenter(model, {
      renderProjects: (projectsData) => {
        console.log('Setting projects:', projectsData);
        setProjects(projectsData);
      }
    });

    presenter.presentProjects();

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // On mobile, make all items visible immediately
      projectRefs.current.forEach((ref) => {
        if (ref) ref.classList.add('visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            const video = entry.target.querySelector('video');
            if (video) {
              video.play().catch(error => console.log('Autoplay was prevented:', error));
            }
          } else {
            const video = entry.target.querySelector('video');
            if (video) {
              video.pause();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [projects, isMobile]);

  if (projects.length === 0) {
    console.log('No projects loaded');
    return <div>Loading...</div>;
  }

  return (
    <div className="projects-container"> 
      {projects.map((project, index) => {
        console.log(`Rendering project ${index}:`, project);
        return (
          <Link to={`/case-study/${project.id}`} key={project.id} className="project-link">
            <div
              className="project-item"
              ref={(el) => (projectRefs.current[index] = el)}
            >
              <div className="corner-bl"></div>
              <div className="corner-br"></div>
              
              {project.type === 'image' ? (
                <img 
                  src={project.src} 
                  alt={project.alt} 
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Error loading image ${project.id}:`, e);
                    e.target.src = '/media/images/fallback.png';
                  }} 
                  className="project-image" 
                />
              ) : (
                <video 
                  src={project.src} 
                  alt={project.alt} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  preload="metadata"
                  poster={project.src.replace('.mp4', '-poster.png')}
                  onError={(e) => {
                    console.error(`Error loading video ${project.id}:`, e);
                    const img = document.createElement('img');
                    img.src = '/media/images/fallback.png';
                    img.alt = project.alt;
                    img.className = 'project-image';
                    e.target.parentNode.replaceChild(img, e.target);
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              )}
              
              <div className="project-overlay">
                <h1 className="project-alt-text">{project.alt}</h1>
                <h2 className="project-tags">{'[' + project.tags.join(', ') + ']'}</h2>            
              </div>
              
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProjectsContainer;