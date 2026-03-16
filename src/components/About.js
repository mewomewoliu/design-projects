import React from 'react';
import Footer from './Footer';
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

const PILLARS = [
  {
    num: '01',
    title: 'Think in systems, not screens',
    text: 'Good design works backward from outcomes. I draw the system map before I open Figma — so what ships is coherent end-to-end, not just beautiful at the component level.',
  },
  {
    num: '02',
    title: 'AI as a thinking partner',
    text: "I've embedded AI into every stage of my process — not to move faster, but to think deeper. The result is more rigorous research, sharper concepts, better products.",
  },
  {
    num: '03',
    title: 'Clarity through restraint',
    text: 'If a product needs a manual, the design failed. Influenced by Japanese and Swiss minimalism, I find the simplest path that actually solves the problem.',
  },
  {
    num: '04',
    title: 'Design the whole equation',
    text: 'Every brief has three questions: Is this what people need? Can the business sustain it? Can engineering build it? Most design stops at the first. I hold all three.',
  },
];

const SKILL_GROUPS = [
  { label: 'Strategy',  skills: ['Product Strategy', 'Growth Design', 'Service Design'] },
  { label: 'Design',    skills: ['UX / UI Design', 'Design Systems', 'Brand Identity'] },
  { label: 'Research',  skills: ['User Research', 'Workshop Facilitation', 'Accessibility'] },
  { label: 'Process',   skills: ['AI-Integrated Workflows', 'Stakeholder Management', 'Figma · Framer · Prototyping'] },
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

      {/* ── Hero: portrait card + mission panel ───────────────────────────── */}
      <div id="overview" className="ab-hero-band">
        <div className="ab-hero-grid">

          {/* Portrait card */}
          <div className="ab-hero-card">
            <span className="ab-hero-card-tag">◼ Product Designer</span>
            <img
              src="/about-portrait.png"
              alt="Mia Liu"
              className="ab-hero-img"
            />
            <div className="ab-hero-card-bottom">
              <h1 className="ab-hero-card-name">Mia Liu</h1>
              <span className="ab-hero-card-sub">Stockholm · Sweden</span>
            </div>
          </div>

          {/* Mission panel */}
          <div className="ab-hero-panel">
            <div className="ab-hero-panel-label">◼ Mission</div>
            <p className="ab-statement">
              I make complex products feel inevitable — mapping the full system
              from user need to business model to technical reality, before
              I touch a single screen.
            </p>
            <p className="ab-statement-body">
              A systems thinker who works backward from outcomes, not forward
              from assumptions. Research-grounded, AI-assisted, and embedded
              via Netlight AB in some of Sweden's most demanding product
              organisations.
            </p>
            <div className="ab-hero-panel-meta">
              <span className="ab-hero-panel-role">Product Designer · Product Maker</span>
              <span className="ab-hero-panel-avail">Open to roles &amp; conversations</span>
            </div>
          </div>

        </div>
      </div>

      {/* ── How I Think — grey band ──────────────────────────────────────── */}
      <div className="ab-band ab-band--alt" id="approach">
        <div className="ab-inner">
          <section className="ab-section">
            <div className="ab-section-label">How I think</div>
            <div className="ab-pillars-grid">
              {PILLARS.map(({ num, title, text }) => (
                <div className="ab-pillar-cell" key={num}>
                  <span className="ab-pillar-num">{num}</span>
                  <h3 className="ab-pillar-title">{title}</h3>
                  <p className="ab-pillar-text">{text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ── Experience ───────────────────────────────────────────────────── */}
      <div className="ab-inner" id="experience">
        <section className="ab-section">
          <div className="ab-section-label">Experience</div>
          <div className="ab-experience">
            <div className="ab-exp-consulting">
              <span className="ab-exp-badge">Oct 2022 – Present</span>
              <span className="ab-exp-consultant">IT Consultant · Netlight AB</span>
              <p className="ab-exp-note">
                Embedded across complex product organisations — translating
                ambiguous business goals into sharp UX strategy and shipped
                outcomes that move metrics.
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

      {/* ── Capabilities — grey band ─────────────────────────────────────── */}
      <div className="ab-band ab-band--alt" id="capabilities">
        <div className="ab-inner">
          <section className="ab-section">
            <div className="ab-section-label">Capabilities</div>
            <div className="ab-skills-groups">
              {SKILL_GROUPS.map(({ label, skills }) => (
                <div className="ab-skill-group" key={label}>
                  <span className="ab-skill-group-label">{label}</span>
                  <span className="ab-skill-group-items">{skills.join(' · ')}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ── Education ────────────────────────────────────────────────────── */}
      <div className="ab-inner" id="education">
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
      <Footer />

    </div>
  );
}

export default About;
