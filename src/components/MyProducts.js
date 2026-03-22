import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectModel from '../models/ProjectModel';
import Footer from './Footer';
import './ProjectsContainer.css';
import './MyProducts.css';

const DESIGN_QUOTES = [
  { text: 'Details are not the details.\nThey make the design.', attr: '— Charles Eames' },
  { text: 'Less,\nbut better.', attr: '— Dieter Rams' },
  { text: 'Good design is\nas little design\nas possible.', attr: '— Dieter Rams' },
  { text: 'Form follows\nfunction.', attr: '— Louis Sullivan' },
];

function generateLayout(count) {
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
  // Start with full-width for first item
  layouts.push(FULL);
  i = 1;
  rowIndex = 1;
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

function ProductPlaceholder({ projectId }) {
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

function ProductItem({ project, layoutClass, refCallback, imageErrors, onImageError }) {
  const hasError = imageErrors[project.id];
  return (
    <Link
      to={`/case-study/${project.id}`}
      className={`project-link ${layoutClass}`}
    >
      <div className="project-item" ref={refCallback} id={`product-${project.id}`}>
        <div className="corner-bl" />
        <div className="corner-br" />
        {hasError ? (
          <ProductPlaceholder projectId={project.id} />
        ) : project.type === 'image' ? (
          <img
            src={project.src}
            alt={project.alt}
            loading="lazy"
            onError={() => onImageError(project.id)}
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
        <div className="project-overlay">
          <h3 className="project-alt-text">{project.alt}</h3>
          <p className="project-tags">{'[' + project.tags.join(', ') + ']'}</p>
        </div>
      </div>
    </Link>
  );
}

function ProductListItem({ project, index, imageErrors, onImageError }) {
  const hasError = imageErrors[project.id];
  const num = String(index + 1).padStart(2, '0');
  return (
    <Link to={`/case-study/${project.id}`} className="project-list-item">
      <span className="pli-num">{num}</span>
      <div className="pli-thumb">
        {hasError ? (
          <div className="pli-thumb-fallback">◼</div>
        ) : project.type === 'image' ? (
          <img src={project.src} alt="" onError={() => onImageError(project.id)} />
        ) : (
          <video src={project.src} muted playsInline preload="metadata" />
        )}
      </div>
      <div className="pli-info">
        <h3 className="pli-title">{project.alt}</h3>
        <p className="pli-tags">{'[' + project.tags.join(', ') + ']'}</p>
      </div>
    </Link>
  );
}

function MyProducts() {
  const [products, setProducts] = useState([]);
  const productRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    const model = new ProjectModel();
    setProducts(model.getProjectsByCategory('independent'));
    const onResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (products.length === 0) return;
    if (isMobile) {
      productRefs.current.forEach(ref => { if (ref) ref.classList.add('visible'); });
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
    const refs = productRefs.current;
    refs.forEach(ref => { if (ref) observer.observe(ref); });
    return () => { refs.forEach(ref => { if (ref) observer.unobserve(ref); }); };
  }, [products, isMobile]);

  const handleImageError = (id) =>
    setImageErrors(prev => ({ ...prev, [id]: true }));

  const layouts = generateLayout(products.length);

  return (
    <>
      <div className="mp-hero">
        <span className="page-header-label">_my_products</span>
        <h1 className="mp-hero-title">
          Products, Agents<br />& Workflows_
        </h1>
        <p className="mp-hero-desc">
          Tools that I made for solving real painpoints
        </p>
      </div>

      <section className="projects-section mp-grid-section">
        {products.length === 0 ? (
          <div className="projects-loading">Loading_</div>
        ) : isMobile ? (
          <div className="projects-list">
            {products.map((p, i) => (
              <ProductListItem
                key={p.id}
                project={p}
                index={i}
                imageErrors={imageErrors}
                onImageError={handleImageError}
              />
            ))}
          </div>
        ) : (
          <div className="projects-container">
            {products.map((p, i) => (
              <ProductItem
                key={p.id}
                project={p}
                layoutClass={layouts[i]?.class || 'project-regular'}
                refCallback={el => (productRefs.current[i] = el)}
                imageErrors={imageErrors}
                onImageError={handleImageError}
              />
            ))}
          </div>
        )}
      </section>

      <div className="footer-section">
        <Footer />
      </div>
    </>
  );
}

export default MyProducts;
