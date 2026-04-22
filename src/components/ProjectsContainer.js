import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import posthog from 'posthog-js';
import { saveScroll, restoreScroll } from '../hooks/useScrollRestoration';
import ProjectModel from '../models/ProjectModel';
import ProjectPresenter from '../presenters/ProjectPresenter';
import './ProjectsContainer.css';

const DESIGN_QUOTES = [
  { text: 'Details are not the details.\nThey make the design.', attr: '— Charles Eames' },
  { text: 'Less,\nbut better.', attr: '— Dieter Rams' },
  { text: 'Good design is\nas little design\nas possible.', attr: '— Dieter Rams' },
  { text: 'Design is not\nhow it looks.\nDesign is how\nit works.', attr: '— Steve Jobs' },
  { text: 'Simplicity is the\nultimate sophistication.', attr: '— Leonardo da Vinci' },
  { text: 'Form follows\nfunction.', attr: '— Louis Sullivan' },
];

const CATEGORIES = [
  { key: 'client',      label: '[◼ Selected_Work]',         displayLabel: 'Client Work' },
  { key: 'independent', label: '[◼ Independent_Prod]', displayLabel: 'Independent Products' },
  { key: 'creative',    label: '[◼ Openprocessing_]',           displayLabel: 'Experiments' },
];

function generateLayout(count, featuredFirst = false) {
  const FULL    = { span: 'full',    class: 'project-full' };
  const HALF    = { span: 'half',    class: 'project-half' };
  const REGULAR = { span: 'regular', class: 'project-regular' };

  const ROW_TEMPLATES = [
    [FULL],
    [HALF, REGULAR],
    [REGULAR, HALF],
    [REGULAR, REGULAR, REGULAR],
  ];

  const layouts = [];
  let i = 0;
  let rowIndex = 0;

  if (featuredFirst) {
    layouts.push(FULL);
    i = 1;
    rowIndex = 1;
  }

  while (i < count) {
    const template = ROW_TEMPLATES[rowIndex % ROW_TEMPLATES.length];
    for (const item of template) {
      if (i >= count) break;
      layouts.push(item);
      i++;
    }
    rowIndex++;
  }

  return layouts;
}

function getQuote(projectId) {
  const hash = String(projectId).split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return DESIGN_QUOTES[hash % DESIGN_QUOTES.length];
}

function ProjectPlaceholder({ projectId }) {
  const quote = getQuote(projectId);
  return (
    <div className="project-placeholder">
      <span className="project-placeholder-mark">◼</span>
      <blockquote className="project-placeholder-quote">
        {quote.text.split('\n').map((line, i) => (
          <span key={i}>{line}<br /></span>
        ))}
      </blockquote>
      <cite className="project-placeholder-attr">{quote.attr}</cite>
    </div>
  );
}

function ProjectListItem({ project, index, imageErrors, onImageError, onProjectClick }) {
  const hasError = imageErrors[project.id];
  const num = String(index + 1).padStart(2, '0');

  return (
    <Link
      to={`/case-study/${project.id}`}
      className="project-list-item"
      onClick={() => onProjectClick(project, 'list')}
    >
      <span className="pli-num">{num}</span>
      <div className="pli-thumb">
        {hasError ? (
          <div className="pli-thumb-fallback">◼</div>
        ) : project.type === 'image' ? (
          <img src={project.src} alt={project.alt} onError={() => onImageError(project.id)} />
        ) : (
          <video src={project.src} autoPlay muted loop playsInline preload="auto" />
        )}
      </div>
      <div className="pli-info">
        <h3 className="pli-title">{project.alt}</h3>
        <p className="pli-tags">{'[' + project.tags.join(', ') + ']'}</p>
      </div>
    </Link>
  );
}

function ProjectItem({ project, layoutClass, refCallback, imageErrors, onImageError, onProjectClick, index = 0, showOverlay = true }) {
  const hasError = imageErrors[project.id];

  return (
    <Link
      to={`/case-study/${project.id}`}
      className={`project-link ${layoutClass}`}
      onClick={() => onProjectClick(project, layoutClass)}
    >
      <div
        className="project-item"
        ref={refCallback}
        id={`project-${project.id}`}
        data-project-id={project.id}
        style={{ '--item-delay': `${Math.min(index, 5) * 0.05}s` }}
      >
        <div className="corner-bl" />
        <div className="corner-br" />

        {hasError ? (
          <ProjectPlaceholder projectId={project.id} />
        ) : project.type === 'image' ? (
          <img
            src={project.src}
            alt={project.alt}
            loading="lazy"
            onError={() => onImageError(project.id)}
            className="project-image"
          />
        ) : (
          <video
            src={project.src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => onImageError(project.id)}
          />
        )}

        {showOverlay && (
          <div className="project-overlay">
            <h3 className="project-alt-text">{project.alt}</h3>
            <p className="project-tags">{'[' + project.tags.join(', ') + ']'}</p>
          </div>
        )}
      </div>
    </Link>
  );
}

function ProjectsContainer({ selectedTag }) {
  const [projects, setProjects] = useState([]);
  const projectRefs = useRef([]);
  const indexItemRefs = useRef({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [imageErrors, setImageErrors] = useState({});
  const [activeProjectId, setActiveProjectId] = useState(null);
  const { key: locationKey } = useLocation();

  useEffect(() => {
    const model = new ProjectModel();
    const presenter = new ProjectPresenter(model, {
      renderProjects: (data) => {
        setProjects(data);
      }
    });
    presenter.presentProjects();

    const onResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Restore saved scroll after projects are in the DOM
  useEffect(() => {
    if (projects.length === 0) return;
    restoreScroll(locationKey);
  }, [projects, locationKey]);

  // Global index map: project.id → ref slot
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

  // Scroll-triggered reveal for category sections
  useEffect(() => {
    if (projects.length === 0) return;
    const sections = document.querySelectorAll('.category-section');
    const sectionObs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            sectionObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );
    sections.forEach(s => sectionObs.observe(s));
    return () => sectionObs.disconnect();
  }, [projects]);

  // Project item reveal + video play/pause
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

  // Track the topmost visible project to drive the sidebar index highlight
  useEffect(() => {
    if (isMobile || projects.length === 0) return;

    const visibleIds = new Set();
    const allProjectsOrdered = CATEGORIES.flatMap(cat =>
      projects.filter(p => p.category === cat.key)
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.dataset.projectId;
        if (entry.isIntersecting) visibleIds.add(id);
        else visibleIds.delete(id);
      });
      const active = allProjectsOrdered.find(p => visibleIds.has(String(p.id)));
      setActiveProjectId(active ? active.id : null);
    }, {
      rootMargin: '0px 0px -40% 0px',
      threshold: 0,
    });

    document.querySelectorAll('[data-project-id]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [projects, isMobile]);

  // Keep active index item in view within the sticky sidebar list
  useEffect(() => {
    if (!activeProjectId) return;
    const el = indexItemRefs.current[activeProjectId];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [activeProjectId]);

  const handleImageError = (projectId) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };

  const handleProjectClick = (project, layoutClass) => {
    saveScroll(locationKey);
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

  const handleIndexClick = (projectId) => {
    const el = document.getElementById(`project-${projectId}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        {isMobile ? (
          <div className="projects-list">
            {filtered.map((project, i) => (
              <ProjectListItem
                key={project.id}
                project={project}
                index={i}
                imageErrors={imageErrors}
                onImageError={handleImageError}
                onProjectClick={handleProjectClick}
              />
            ))}
          </div>
        ) : (
          <div className="projects-container">
            {filtered.map((project, i) => (
              <ProjectItem
                key={project.id}
                project={project}
                layoutClass={layouts[i]?.class || 'project-full'}
                refCallback={el => (projectRefs.current[i] = el)}
                imageErrors={imageErrors}
                onImageError={handleImageError}
                onProjectClick={handleProjectClick}
                index={i}
                showOverlay={true}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // ── Grouped by category ────────────────────────────────────────────────────
  return (
    <div className="projects-all-categories">
      {CATEGORIES.map(cat => {
        const catProjects = projects.filter(p => p.category === cat.key);
        if (catProjects.length === 0) return null;
        const layouts = (cat.key === 'client' || cat.key === 'independent')
          ? catProjects.map(() => ({ class: 'project-full' }))
          : generateLayout(catProjects.length, false);

        return (
          <section key={cat.key} className="category-section">
            <div className="category-sidebar">
              <div className="category-sidebar-header">
                <span className="category-name">{cat.label}</span>
                <span className="category-count">[{String(catProjects.length).padStart(2, '0')}]</span>
              </div>
              <ol className="project-index">
                {catProjects.map((project, i) => (
                  <li
                    key={project.id}
                    className={`project-index-item${activeProjectId === project.id ? ' is-active' : ''}`}
                    ref={el => { indexItemRefs.current[project.id] = el; }}
                    onClick={() => handleIndexClick(project.id)}
                  >
                    <span className="pi-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="pi-name">{'//'+ project.alt}</span>
                    {/* <span className="pi-tags">{'[' + project.tags.join(', ') + ']'}</span> */}
                  </li>
                ))}
              </ol>
            </div>

            <div className="category-content">
              {isMobile ? (
                <div className="projects-list">
                  {catProjects.map((project, i) => (
                    <ProjectListItem
                      key={project.id}
                      project={project}
                      index={i}
                      imageErrors={imageErrors}
                      onImageError={handleImageError}
                      onProjectClick={handleProjectClick}
                    />
                  ))}
                </div>
              ) : (
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
                      index={i}
                      showOverlay={false}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default ProjectsContainer;
