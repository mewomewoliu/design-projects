import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectModel from '../models/ProjectModel';
import ProjectPresenter from '../presenters/ProjectPresenter';
import './ProjectsContainer.css';

function ProjectsContainer({ selectedTag }) {
  const [projects, setProjects] = useState([]);
  const projectRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [imageErrors, setImageErrors] = useState({});
  const [projectLayouts, setProjectLayouts] = useState([]);

  // Generate random layout patterns
  const generateRandomLayout = (projectsLength) => {
    const layouts = [];
    const patterns = [
      { span: 'full', class: 'project-full' },      // Full width (3 columns)
      { span: 'half', class: 'project-half' },      // Half width (2 columns)
      { span: 'regular', class: 'project-regular' }  // Regular (1 column)
    ];
    
    let currentRowFilled = 0; // Track how much of current row is filled (out of 3)
    
    for (let i = 0; i < projectsLength; i++) {
      if (i === 0) {
        // First project is always full width (featured)
        layouts.push(patterns[0]);
        currentRowFilled = 0; // Reset for next row since full width completes the row
      } else {
        // Determine what fits in current row
        const remainingSpace = 3 - currentRowFilled;
        
        if (remainingSpace >= 3 || currentRowFilled === 0) {
          // Start of new row - can choose any size
          const rand = Math.random();
          if (rand < 0.2) {
            layouts.push(patterns[0]); // Full width (20%)
            currentRowFilled = 0; // Full width resets row
          } else if (rand < 0.5) {
            layouts.push(patterns[1]); // Half width (30%)
            currentRowFilled = 2;
          } else {
            layouts.push(patterns[2]); // Regular (50%)
            currentRowFilled = 1;
          }
        } else if (remainingSpace >= 2) {
          // Can fit half or regular
          const rand = Math.random();
          if (rand < 0.4) {
            layouts.push(patterns[1]); // Half width
            currentRowFilled += 2;
            if (currentRowFilled >= 3) currentRowFilled = 0;
          } else {
            layouts.push(patterns[2]); // Regular
            currentRowFilled += 1;
            if (currentRowFilled >= 3) currentRowFilled = 0;
          }
        } else {
          // Only regular fits (remainingSpace = 1)
          layouts.push(patterns[2]); // Regular
          currentRowFilled += 1;
          if (currentRowFilled >= 3) currentRowFilled = 0;
        }
      }
    }
    return layouts;
  };

  useEffect(() => {
    const model = new ProjectModel();
    const presenter = new ProjectPresenter(model, {
      renderProjects: (projectsData) => {
        console.log('Setting projects:', projectsData);
        setProjects(projectsData);
        setProjectLayouts(generateRandomLayout(projectsData.length));
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
    if (selectedTag) {
      const firstMatchingProject = projectRefs.current.find((ref, index) => {
        const project = projects[index];
        return project && project.tags.includes(selectedTag);
      });

      if (firstMatchingProject) {
        firstMatchingProject.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [selectedTag, projects]);

  useEffect(() => {
    if (isMobile) {
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

  // Filter projects based on selectedTag if it exists
  const filteredProjects = selectedTag
    ? projects.filter(project => project.tags.includes(selectedTag))
    : projects;

  if (projects.length === 0) {
    console.log('No projects loaded');
    return <div>Loading...</div>;
  }

  const handleImageError = (projectId, e) => {
    console.error(`Error loading image for project ${projectId}:`, e);
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
    e.target.src = '/media/images/fallback.png';
  };

  return (
    <div className="projects-container"> 
      {filteredProjects.map((project, index) => {
        const layoutClass = projectLayouts[index]?.class || 'project-regular';
        console.log(`Project ${index}: ${project.alt} - Layout: ${layoutClass}`);
        return (
          <Link to={`/case-study/${project.id}`} key={project.id} className="project-link">
            <div
              className={`project-item ${layoutClass}`}
              ref={(el) => (projectRefs.current[index] = el)}
              id={`project-${project.id}`}
            >
              <div className="corner-bl"></div>
              <div className="corner-br"></div>
              
              {project.type === 'image' ? (
                <img 
                  src={project.src} 
                  alt={project.alt} 
                  loading="lazy"
                  onError={(e) => handleImageError(project.id, e)}
                  className={`project-image ${imageErrors[project.id] ? 'error' : ''}`}
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
                    img.className = 'project-image error';
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