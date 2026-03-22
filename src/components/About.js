import React, { useEffect, useRef, useState } from 'react';
import Footer from './Footer';
import './About.css';

// Each paragraph as its own entry for individual scroll reveals
const STORY_PARAS = [
  {
    id: 'intro',
    text: null,
    jsx: (
      <>
        Hi, I'm Mia. <span className="ab-key">Product designer </span>, systems thinker,
        and a carpenter who still has all her fingers.
      </>
    ),
  },
  {
    id: 'stats',
    text: null,
    jsx: (
      <>
        Since 2019, I've shipped digital products across{' '}
        <span className="ab-key"> 11 companies</span> and{' '}
        <span className="ab-key">4 countries</span>. Ten products.
        Over <span className="ab-key">100 million users</span>. The numbers are nice,
        but what actually drives me is the process, at the point where a raw,
        messy idea starts to take shape and become something real.
      </>
    ),
  },
  {
    id: 'background',
    text: null,
    jsx: (
      <>
        I came to design via{' '}
        <span className="ab-key">Business Management</span> and{' '}
        <span className="ab-key">Human-Computer Interaction</span>, with a Graphic
        Design side that refused to stay quiet. These days I'm adding AI fluency
        to that list to amplify my workflow.
      </>
    ),
  },
  {
    id: 'curious',
    text: null,
    jsx: (
      <>
        I'm <span className="ab-key">endlessly curious</span>.<br />
        About technology, about how people behave, about what makes something
        feel inevitable once it exists.
      </>
    ),
  },
  {
    id: 'engine',
    text: null,
    jsx: (
      <>
        That curiosity is the engine.{' '}
        <span className="ab-key">The discipline is what steers it.</span>
      </>
    ),
  },
];

function About() {
  const scrollRightRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = scrollRightRef.current;
      if (!el) return;
      const navH = 48;
      const rect = el.getBoundingClientRect();
      const elDocTop = rect.top + window.scrollY;
      const elHeight = el.offsetHeight;
      const viewH = window.innerHeight;
      const scrolled = window.scrollY + navH - elDocTop;
      const scrollable = elHeight - (viewH - navH);
      const progress = Math.max(0, Math.min(1, scrolled / Math.max(scrollable, 1)));
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const paras = document.querySelectorAll('.ab-story-para');
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    paras.forEach(p => obs.observe(p));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="about-page">
      <div className="ab-layout">

        {/* ── Sticky left panel ─────────────────────────────────────────────── */}
        <div className="ab-sticky-left">

          <div className="ab-chapter-indicator">
            <span className="ab-chapter-num">01</span>
            <span className="ab-chapter-label">About</span>
          </div>

          <img src="/about-portrait.png" alt="Mia Liu" className="ab-sticky-portrait" />

          <div className="ab-progress-track">
            <div className="ab-progress-fill" style={{ transform: `scaleY(${scrollProgress})` }} />
          </div>

          <div className="ab-sticky-bottom">
            <div className="ab-sticky-identity">
              <h1 className="ab-sticky-name">Mia Liu</h1>
              <div className="ab-sticky-meta">
                <span className="ab-sticky-role">◼ Product Designer</span>
                <span className="ab-sticky-loc">Stockholm · Sweden</span>
              </div>
            </div>
          </div>

        </div>

        {/* ── Scrollable right — storytelling ───────────────────────────────── */}
        <div className="ab-scroll-right" ref={scrollRightRef}>
          <div className="ab-story">
            {STORY_PARAS.map(({ id, jsx }, i) => (
              <p
                key={id}
                className="ab-story-para"
                style={{ '--delay': `${i * 0.08}s` }}
              >
                {jsx}
              </p>
            ))}

            <div className="ab-avail-row ab-story-para" style={{ '--delay': `${STORY_PARAS.length * 0.08}s` }}>
              <span className="ab-avail-dot" />
              <span className="ab-avail-text"> Always be happy to have coffee chats &amp; exchanging ideas!</span>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default About;
