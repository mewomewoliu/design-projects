import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import posthog from 'posthog-js';
import ProjectModel from '../models/ProjectModel';
import ProjectPresenter from '../presenters/ProjectPresenter';
import './ProjectsContainer.css';

const CATEGORIES = [
  { key: 'client',      label: '[◼ client_work]',         displayLabel: 'Client Work' },
  { key: 'independent', label: '[◼ independent_prod]', displayLabel: 'Independent Products' },
  { key: 'creative',    label: '[◼ cool_stuffs]',          displayLabel: 'Cool Stuffs' },
];

function generateLayout(count, featuredFirst = false) {
  const FULL    = { span: 'full',    class: 'project-full' };
  const HALF    = { span: 'half',    class: 'project-half' };
  const REGULAR = { span: 'regular', class: 'project-regular' };

  const layouts = [];
  let rowFill = 0;

  for (let i = 0; i < count; i++) {
    if (i === 0 && featuredFirst) {
      layouts.push(FULL);
      rowFill = 0;
      continue;
    }
    const space = 3 - rowFill;
    if (space === 3 || rowFill === 0) {
      const r = Math.random();
      if (r < 0.2)       { layouts.push(FULL);    rowFill = 0; }
      else if (r < 0.5)  { layouts.push(HALF);    rowFill = 2; }
      else               { layouts.push(REGULAR);  rowFill = 1; }
    } else if (space >= 2) {
      if (Math.random() < 0.4) { layouts.push(HALF);    rowFill = (rowFill + 2) % 3; }
      else                     { layouts.push(REGULAR);  rowFill = (rowFill + 1) % 3; }
    } else {
      layouts.push(REGULAR);
      rowFill = (rowFill + 1) % 3;
    }
  }
  return layouts;
}

function ProjectItem({ project, layoutClass, refCallback, imageErrors, onImageError, onProjectClick }) {
  return (
    <Link
      to={`/case-study/${project.id}`}
      className="project-link"
      onClick={() => onProjectClick(project, layoutClass)}
    >
      <div
        className={`project-item ${layoutClass}`}
        ref={refCallback}
        id={`project-${project.id}`}
      >
        <div className="corner-bl" />
        <div className="corner-br" />

        {project.type === 'image' ? (
          <img
            src={project.src}
            alt={project.alt}
            loading="lazy"
            onError={(e) => onImageError(project.id, e)}
            className={`project-image ${imageErrors[project.id] ? 'error' : ''}`}
          />
        ) : (
          <video
            src={project.src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onError={(e) => {
              const img = document.createElement('img');
              img.src = '/media/images/fallback.png';
              img.alt = project.alt;
              img.className = 'project-image error';
              e.target.parentNode.replaceChild(img, e.target);
            }}
          />
        )}

        <div className="project-overlay">
          <h3 className="project-alt-text">{project.alt}</h3>
          <p className="project-tags">{'[' + project.tags.join(', ') + ']'}</p>
        </div>
      </div>
    </Link>
  );
}

function ProjectsContainer({ selectedTag }) {
  const [projects, setProjects] = useState([]);
  const projectRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [imageErrors, setImageErrors] = useState({});
  const [categoryLayouts, setCategoryLayouts] = useState({});

  useEffect(() => {
    const model = new ProjectModel();
    const presenter = new ProjectPresenter(model, {
      renderProjects: (data) => {
        setProjects(data);
        const layouts = {};
        CATEGORIES.forEach(cat => {
          const catProjects = data.filter(p => p.category === cat.key);
          layouts[cat.key] = generateLayout(catProjects.length, cat.key === 'client');
        });
        setCategoryLayouts(layouts);
      }
    });
    presenter.presentProjects();

    const onResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Global index map: project.id → ref slot (stable across renders)
  const projectIndexMap = useMemo(() => {
    const map = {};
    let idx = 0;
    CATEGORIES.forEach(cat => {
      projects.filter(p => p.category === cat.key).forEach(p => {
        map[p.id] = idx++;
      });
    });
    return map;
  }, [projects]);

  useEffect(() => {
    if (isMobile) {
      projectRefs.current.forEach(ref => { if (ref) ref.classList.add('visible'); });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            const video = entry.target.querySelector('video');
            if (video) video.play().catch(() => {});
          } else {
            const video = entry.target.querySelector('video');
            if (video) video.pause();
          }
        });
      },
      { threshold: 0.08 }
    );

    const refs = projectRefs.current;
    refs.forEach(ref => { if (ref) observer.observe(ref); });
    return () => { refs.forEach(ref => { if (ref) observer.unobserve(ref); }); };
  }, [projects, isMobile]);

  const handleImageError = (projectId, e) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
    e.target.src = '/media/images/fallback.png';
  };

  const handleProjectClick = (project, layoutClass) => {
    posthog.capture('project_clicked', {
      project_id: project.id,
      project_title: project.alt,
      project_category: project.category,
      project_tags: project.tags,
      layout_type: layoutClass,
      media_type: project.type,
      filtered_by_tag: selectedTag || null,
      device_type: isMobile ? 'mobile' : 'desktop',
    });
  };

  if (projects.length === 0) {
    return <div className="projects-loading">Loading_</div>;
  }

  // ── Tag filter: flat grid across all categories ────────────────────────────
  if (selectedTag) {
    const filtered = projects.filter(p => p.tags.includes(selectedTag));
    const layouts = generateLayout(filtered.length, true);
    return (
      <div className="projects-all-categories">
        <div className="category-filter-label">
          Filtered by <span className="filter-tag">[{selectedTag}]</span>
        </div>
        <div className="projects-container">
          {filtered.map((project, i) => (
            <ProjectItem
              key={project.id}
              project={project}
              layoutClass={layouts[i]?.class || 'project-regular'}
              refCallback={el => (projectRefs.current[i] = el)}
              imageErrors={imageErrors}
              onImageError={handleImageError}
              onProjectClick={handleProjectClick}
            />
          ))}
        </div>
      </div>
    );
  }

  // ── Grouped by category ────────────────────────────────────────────────────
  return (
    <div className="projects-all-categories">
      {CATEGORIES.map(cat => {
        const catProjects = projects.filter(p => p.category === cat.key);
        if (catProjects.length === 0) return null;
        const layouts = categoryLayouts[cat.key] || generateLayout(catProjects.length, cat.key === 'client');

        return (
          <section key={cat.key} className="category-section">
            <div className="category-sidebar">
              <span className="category-name">{cat.label}</span>
              <span className="category-count">[{String(catProjects.length).padStart(2, '0')}]</span>
            </div>

            <div className="category-content">
              <div className="projects-container">
                {catProjects.map((project, i) => (
                  <ProjectItem
                    key={project.id}
                    project={project}
                    layoutClass={layouts[i]?.class || 'project-regular'}
                    refCallback={el => (projectRefs.current[projectIndexMap[project.id]] = el)}
                    imageErrors={imageErrors}
                    onImageError={handleImageError}
                    onProjectClick={handleProjectClick}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default ProjectsContainer;
