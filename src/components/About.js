import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Footer from './Footer';
import './About.css';

function About() {
  const cvRef = useRef();
  const [pages, setPages] = useState([]);

  const generatePDF = async () => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageElements = document.querySelectorAll('.cv-page');
    
    for (let i = 0; i < pageElements.length; i++) {
      const element = pageElements[i];
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#fdfdfd'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      if (i > 0) pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    }
    
    pdf.save('Mia_Liu_CV.pdf');
  };

  // Split experience data across pages based on actual content height
  const splitExperienceAcrossPages = () => {
    const experienceData = [
      {
        company: "Thermo-Calc SaaS app | Product Designer | Thermo-Calc",
        role: "",
        period: "Feb 2025 - June 2025",
        description: [
          "Led Product Discovery and UX strategy for legacy-to-cloud transition, designing scalable web app for 2K+ material scientist users",
          "Designed & simplified calculation configuration complexity 40% through goal-oriented user flows",
          "Built scalable Design System adopted for future product expansions"
        ]
      },
      {
        company: "Scania Help Center Redesign | UX Designer | Scania",
        role: "",
        period: "Sep 2023 - Oct 2024",
        description: [
          "Redesigned global Help Center reducing customer support costs 25%",
          "Enabled user self-serve by redesigning new My Scania Onboarding",
          "Designed multi-brand fleet registration flow by collaborating with cross-team stakeholders",
          "Solved complex data visualisation challenges by balancing security limitations and design possibility"
        
        ]
      },
      {
        company: "Storykit Music Library | UX Design Lead | Storykit",
        role: "",
        period: "Oct 2022 - Aug 2023",
        description: [
          "Built design system reducing design-dev handoffs and design-ops framework accelerating production cycles",
          "Simplified AI video production workflows and enhanced UI brand identity",
          "Led end-to-end design of music library and user management features"
        ]
      },
      {
        company: "UX Design Consulting | IT Consultant | Netlight",
        role: "",
        period: "Oct 2022 - Present",
        description: [
          "Collaborated with clients to translate business goals into UX strategies and solutions",
          "Led end-to-end design processes to deliver seamless user experiences through research, prototyping, and testing",
          "Worked closely with product managers, and stakeholders to ensure project alignment and successful outcomes",
          "Organized workshops and knowledge-sharing within design communities"
        ]
      },
      {
        company: "Smart Price | Product Designer | BlaBlacar",
        role: "",
        period: "Jan 2022 - Jun 2022",
        description: [
          "Developed realistic prototypes in Framer for core features, e.g. Smart Price feature in BlaBlaCar App",
          "Co-created user testing protocols improving feature success rate",
          "Built CRM design system for customer emails"
        ]
      },
      {
        company: "Creative Poster | E-commercial web | UX Designer | blankt AB",
        role: "",
        period: "Dec 2021 - Aug 2022",
        description: [
          "Designed a world-class poster marketplace website with an embedded graphic editor for desktop and mobile",
          "Art-directed brand identity, integrating brand elements into the UI for a cohesive user experience",
          "Created engaging email templates for CRM campaigns to drive customer engagement",
          "Established a comprehensive Design System to enhance component reusability and consistency",
          "Led User Testing initiatives to validate design decisions and improve user engagement"
        ]
      }
    ];

    const skillsData = [
      "AI-Integrated Design Workflows",
      "Product Strategy",
      "Product Design",
      "UX/UI Design",
      "Design System",
      "Growth Design",
      "Service Design",
      "Accessibility",
      "Stakeholder Management",
      "Adobe Creative Suite",
      "Brand Identity Design",
      "Figma/Framer/Prototyping",
      "Workshop Facilitation"
    ];

    // Calculate actual content height for each experience item
    const calculateExperienceHeight = (experience) => {
      const headerHeight = 50; // Header (company + period)
      const lineHeight = 24; // Height per description line
      const spacing = 16; // Bottom margin
      
      return headerHeight + (experience.description.length * lineHeight) + spacing;
    };

    // Available space calculations (approximate pixels converted from mm)
    const availableExperienceHeightFirstPage = 550; // Space available for experience on first page
    const availableExperienceHeightContinuationPage = 880; // Space available on continuation pages
    
    const pages = [];
    let remainingExperiences = [...experienceData];
    let isFirstPage = true;

    while (remainingExperiences.length > 0) {
      const availableHeight = isFirstPage ? availableExperienceHeightFirstPage : availableExperienceHeightContinuationPage;
      const pageExperiences = [];
      let usedHeight = 0;

      // Try to fit as many experiences as possible on this page
      for (let i = 0; i < remainingExperiences.length; i++) {
        const experienceHeight = calculateExperienceHeight(remainingExperiences[i]);
        
        if (usedHeight + experienceHeight <= availableHeight) {
          pageExperiences.push(remainingExperiences[i]);
          usedHeight += experienceHeight;
        } else {
          break; // Can't fit more experiences on this page
        }
      }

      // If we couldn't fit any experience (edge case), force at least one
      if (pageExperiences.length === 0 && remainingExperiences.length > 0) {
        pageExperiences.push(remainingExperiences[0]);
      }

      // Create page object
      pages.push({
        pageNumber: pages.length + 1,
        showHeader: isFirstPage,
        showSummary: isFirstPage,
        showEducation: isFirstPage,
        showSkills: isFirstPage,
        experienceItems: pageExperiences,
        skillsData: isFirstPage ? skillsData : []
      });

      // Remove the experiences we've added to this page
      remainingExperiences = remainingExperiences.slice(pageExperiences.length);
      isFirstPage = false;
    }

    setPages(pages);
  };

  useEffect(() => {
    splitExperienceAcrossPages();
  }, []);

  const renderPage = (page, index) => (
    <div key={index} className="cv-page" data-page={page.pageNumber}>
      <div className="cv-container">
        <div className="cv-grid">
          {page.showSummary && (
            <div className="cv-section cv-summary-section">
              <h1 className="cv-name">Mia Liu</h1>
              <div className="contact-details">
                <p>uxmia1996@gmail.com • +46 704239198</p>
              </div>
              <h2>SUMMARY</h2>
              <p>Mia is a digital <span className="highlight">Product Designer</span> specializing in <span className="highlight">Product Strategy & Design</span>, <span className="highlight">UX/UI Design</span>, <span className="highlight">Design Systems</span>, and <span className="highlight">AI-integrated workflows</span>. Influenced by Japanese & Swiss design principles, she <span className="highlight">strategically applies minimalism</span> to <span className="highlight">enhance practicality</span>. With a background in Business Management and Human-Computer Interaction Design, she analyzes products from multidimensional perspectives. In key engagements with clients like <span className="highlight">Scania, Thermo-Calc, and Storykit</span>, she <span className="highlight">solved complex product challenges</span> by leveraging her design methodology and toolkit.</p>
            </div>
          )}

          {page.showEducation && (
            <div className="cv-section cv-contact">
              <div className="contact-info">
                <div className="cv-education">
                  <h2>Education</h2>
                  <div className="education-item">
                    <h3>KTH Royal Institute of Technology Stockholm & Universite Paris Saclay</h3>
                    <p className="degree">M.Sc. Human Computer Interaction [2020-2022]</p>
                  </div>
                  <div className="education-item">
                    <h3>University Art of London</h3>
                    <p className="degree">Graphic Design & Advertising [2023]</p>
                  </div>
                  <div className="education-item">
                    <h3>Qufu Normal University</h3>
                    <p className="degree">B. Sc. Information Management and Information System [2016-2020]</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Experience Section */}
          <div className={`cv-section cv-experience ${!page.showSummary ? 'cv-experience-full' : ''}`}>
            {!page.showSummary && <h2>Experience (continued)</h2>}
            {page.showSummary && <h2>Experience</h2>}
            {page.experienceItems.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="exp-header">
                  <h3>{exp.company}</h3>
                  <span className="exp-period">{exp.period}</span>
                </div>
                {exp.description.length > 0 && (
                  <div className="exp-description">
                    {exp.description.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {page.showSkills && (
            <div className="cv-section cv-skills">
              <h2>Skillset</h2>
              <ul className="skills-list">
                {page.skillsData.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="about-container">
      <div className="about-header">
        <Link to="/" className="main-label">◼ All_Design_Projects</Link>
        <div className="about-nav">
          <button onClick={generatePDF} className="download-cv-btn">
            [Download CV as PDF]
          </button>
        </div>
      </div>

      <div className="cv-multi-page" ref={cvRef}>
        {pages.map((page, index) => renderPage(page, index))}
      </div>
      <Footer />
    </div>
  );
}

export default About; 