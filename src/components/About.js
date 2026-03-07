import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import SocialList from './SocialList';
import './About.css';

const EXPERIENCE = [
  {
    company: 'Bayer',
    role: 'Product Designer',
    period: 'Nov 2025 – Feb 2026',
    impact: 'Redefined biomarker data-tracking workflows, accelerating medicine research timelines. Mapped the end-to-end user journey and prioritised MVP features based on impact and feasibility. Partnered with scientists and engineers to deliver scalable design solutions with measurable research efficiency gains.',
  },
  {
    company: 'Thermo-Calc',
    role: 'Product Designer',
    period: 'Feb 2025 – Jun 2025',
    impact: 'Led discovery & UX strategy for a legacy-to-cloud SaaS transition serving 2,000+ material scientists.',
  },
  {
    company: 'Scania',
    role: 'UX Designer',
    period: 'Sep 2023 – Oct 2024',
    impact: 'Redesigned the global Help Center, cutting support costs 25%, and shipped a new onboarding flow enabling customer self-serve.',
  },
  {
    company: 'Storykit',
    role: 'UX Design Lead',
    period: 'Oct 2022 – Aug 2023',
    impact: 'Built the design system, simplified AI video workflows, and led end-to-end design of the music library feature.',
  },
  {
    company: 'BlaBlaCar',
    role: 'Product Designer',
    period: 'Jan 2022 – Jun 2022',
    impact: 'Built high-fidelity Framer prototypes for Smart Price, co-designed user testing protocols, and shipped CRM design system.',
  },
  {
    company: 'blankt AB',
    role: 'UX Designer',
    period: 'Dec 2021 – Aug 2022',
    impact: 'Art-directed a world-class poster marketplace with embedded graphic editor, brand identity, and full design system.',
  },
];

const SKILLS = [
  'Product Strategy',
  'UX / UI Design',
  'Design Systems',
  'AI-Integrated Workflows',
  'Growth Design',
  'Service Design',
  'User Research',
  'Accessibility',
  'Workshop Facilitation',
  'Stakeholder Management',
  'Brand Identity',
  'Figma · Framer · Prototyping',
];

const EDUCATION = [
  {
    school: 'KTH Royal Institute of Technology & Université Paris-Saclay',
    degree: 'M.Sc. Human–Computer Interaction',
    year: '2020 – 2022',
  },
  {
    school: 'University of the Arts London',
    degree: 'Graphic Design & Advertising',
    year: '2023',
  },
];

function About() {
  return (
    <div className="about-page">

      {/* ── Nav ──────────────────────────────────────────────────────────── */}
      <div className="ab-inner">
        <nav className="ab-nav">
          <Link to="/" className="ab-back">GOOOOOOOOO BACK TO HOMEPAGE</Link>
        </nav>
      </div>

      {/* ── Opening: Name + statement ────────────────────────────────────── */}
      <div className="ab-inner">
        <header className="ab-hero">
          <div className="ab-hero-left">
            <h1 className="ab-name">Mia Liu</h1>
            <p className="ab-title-line">Product Designer · Product Maker</p>
            <p className="ab-location">Stockholm, Sweden</p>
          </div>
          <div className="ab-hero-right">
            <p className="ab-statement">
              I design products that didn't exist before —
              at the intersection of human empathy
              and machine intelligence.
            </p>
            <p className="ab-statement-body">
              Not just a designer. A maker who treats AI as a
              creative collaborator and ships work that genuinely changes
              how people do things. Influenced by Japanese and Swiss
              design principles: restraint in service of clarity.
            </p>
          </div>
        </header>
      </div>

      {/* ── Currently ────────────────────────────────────────────────────── */}
      {/* <div className="ab-inner">
        <section className="ab-section">
          <div className="ab-section-label">Currently</div>
          <div className="ab-currently">
            <div className="ab-current-item">
              <span className="ab-current-key">Working on</span>
              <span className="ab-current-val">
                UX Design for Thermo-Calc SaaS, via Netlight AB
              </span>
            </div>
            <div className="ab-current-item">
              <span className="ab-current-key">Thinking about</span>
              <span className="ab-current-val">
                How AI redistributes authorship in design decisions
              </span>
            </div>
            <div className="ab-current-item">
              <span className="ab-current-key">Available for</span>
              <span className="ab-current-val">
                Consulting, product design roles, and conversations
              </span>
            </div>
          </div>
        </section>
      </div> */}

      {/* ── How I think ──────────────────────────────────────────────────── */}
      <div className="ab-inner">
        <section className="ab-section">
          <div className="ab-section-label">How I think</div>
          <div className="ab-pillars">
            <div className="ab-pillar">
              <h3 className="ab-pillar-title">Think in systems, not screens</h3>
              <p className="ab-pillar-text">
                Good design works backward from outcomes. I map the full
                system before touching a single component — so what ships
                is coherent, not just beautiful.
              </p>
            </div>
            <div className="ab-pillar">
              <h3 className="ab-pillar-title">AI as a thinking partner</h3>
              <p className="ab-pillar-text">
                I've embedded AI into every stage of my process — not to
                move faster, but to think deeper. The result is more
                rigorous research, sharper concepts, better products.
              </p>
            </div>
            <div className="ab-pillar">
              <h3 className="ab-pillar-title">Clarity through restraint</h3>
              <p className="ab-pillar-text">
                If a product needs a manual, the design failed. Influenced
                by Japanese and Swiss minimalism, I find the simplest path
                that actually solves the problem.
              </p>
            </div>
          </div>
        </section>
      </div>


      {/* ── Experience ───────────────────────────────────────────────────── */}
      <div className="ab-inner">
        <section className="ab-section">
          <div className="ab-section-label">Experience</div>
          <div className="ab-experience">
            <div className="ab-exp-consulting">
              <span className="ab-exp-badge">Oct 2022 – Present</span>
              <span className="ab-exp-consultant">IT Consultant at Netlight AB</span>
              <p className="ab-exp-note">
                Embedded designer across complex product organisations —
                translating ambiguous business goals into sharp UX strategy
                and shipped outcomes.
              </p>
            </div>
            {EXPERIENCE.map(({ company, role, period, impact }) => (
              <div className="ab-exp-row" key={company}>
                <div className="ab-exp-left">
                  <span className="ab-exp-company">{company}</span>
                  <span className="ab-exp-role">{role} · {period}</span>
                </div>
                <p className="ab-exp-impact">{impact}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
{/* ── Capabilities ─────────────────────────────────────────────────── */}
<div className="ab-inner">
        <section className="ab-section">
          <div className="ab-section-label">Capabilities</div>
          <ul className="ab-skills">
            {SKILLS.map(skill => (
              <li key={skill} className="ab-skill">{skill}</li>
            ))}
          </ul>
        </section>
      </div>
      {/* ── Education ────────────────────────────────────────────────────── */}
      <div className="ab-inner">
        <section className="ab-section">
          <div className="ab-section-label">Education</div>
          <div className="ab-education">
            {EDUCATION.map(({ school, degree, year }) => (
              <div className="ab-edu-row" key={school}>
                <div className="ab-edu-left">
                  <span className="ab-edu-school">{school}</span>
                </div>
                <div className="ab-edu-right">
                  <span className="ab-edu-degree">{degree}</span>
                  <span className="ab-edu-year">{year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      

      

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <div className="ab-inner">
        <Footer />
      </div>

    </div>
  );
}

export default About;
