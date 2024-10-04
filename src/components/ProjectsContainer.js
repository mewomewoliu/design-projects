import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectModel from '../models/ProjectModel';
import ProjectPresenter from '../presenters/ProjectPresenter';
import './ProjectsContainer.css';

function ProjectsContainer() {
  const [projects, setProjects] = useState([]);
  const projectRefs = useRef([]);

  useEffect(() => {
    const model = new ProjectModel();
    const presenter = new ProjectPresenter(model, {
      renderProjects: (projectsData) => {
        setProjects(projectsData);
      }
    });

    presenter.presentProjects();
  }, []);

  useEffect(() => {
    console.log('Projects:', projects);
  }, [projects]);

  useEffect(() => {
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
  }, [projects]);

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <Link to={`/case-study/${project.id}`} key={project.id} className="project-link">
          <div
            className="project-item"
            ref={(el) => (projectRefs.current[index] = el)}
          >
            {project.type === 'image' ? (
              <img src={project.src} alt={project.alt} onError={(e) => console.error(`Error loading image ${project.id}:`, e)} />
            ) : (
              <video 
                src={project.src} 
                alt={project.alt} 
                autoPlay 
                muted 
                loop 
                playsInline
                onError={(e) => console.error(`Error loading video ${project.id}:`, e)}
              >
                Your browser does not support the video tag.
              </video>
            )}
            <div className="project-overlay">
              <h3>{project.alt}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProjectsContainer;