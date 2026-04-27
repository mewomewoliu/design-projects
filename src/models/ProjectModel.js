class ProjectModel {
  constructor() {
    this.projects = [

      // ── Client Work ────────────────────────────────────────────────────────
      { id: 'bayer-bmdt', category: 'client', type: 'video', src: '/media/videos/bayer_mastertracker3.mp4', alt: 'BayerBiomarker Data Tracking||| 2025–2026', tags: ['UX Research','UX&UI Design', 'Design System', 'AI'] },
      { id: 'bbc', category: 'client', type: 'video', src: '/media/videos/bbc.mp4', alt: 'BlaBlacar Smart Price ||| 2021–2022', tags: ['Product Design', 'Framer Prototyping'] },
      { id: 'thermo-cal', category: 'client', type: 'video', src: '/media/videos/thermo-cal1.mp4', alt: 'Thermo-Cal SaaS App ||| 2025', tags: ['Product Design', 'UX/UI Design', 'Research', 'AI-Integrated Design Workflow'] },
      { id: 'storykit-design-system', category: 'client', type: 'image', src: '/media/images/storykit-design-system.png', alt: 'Storykit Design System ||| 2023–2024', tags: ['Design System', 'Product Design'] },
      { id: 'music-library', category: 'client', type: 'video', src: '/media/videos/storykit-music-lib.mp4', alt: 'Storykit Music Library ||| 2023–2024', tags: ['UX/UI Design', 'Research', 'Growth', 'Design System', 'Brand Identity'] },
      { id: 'bbc-design-system', category: 'client', type: 'image', src: '/media/images/bbc-crm-overview.png', alt: 'BlaBlacar Design System for CRM ||| 2021', tags: ['Design System', 'Product Design'] },
      { id: 'scania-helpcenter', category: 'client', type: 'video', src: '/media/videos/scania-helpcenter.mp4', alt: 'Scania Help Center ||| 2023–2024', tags: ['Product Design', 'Research', 'Copy Writing', 'UI Design', 'Workshop'] },
      // { id: 'create', category: 'client', type: 'image', src: '/media/images/storykit-create-page.png', alt: 'Storykit AI Video Creator ||| 2023–2024', tags: ['UX Design', 'UI Design', 'Research', 'Growth', 'Design System'] },
      { id: 'kiki-kat', category: 'independent', type: 'video', src: '/media/videos/branding-kikikatfam1.mp4', alt: 'Kiki Kat Fam Branding ||| 2026', tags: ['AI Design Workflow','Branding', 'Visual Design'] },
      // ── Independent Products ───────────────────────────────────────────────
      
      { id: 'ici-studio', category: 'independent', type: 'video', src: '/media/videos/ici-studio-mockup.mp4', alt: 'ici Studio Mockup Creator ||| 2026', tags: ['Designed with Claude','Vibe Coded'] },
      { id: 'agent-studio', category: 'independent', type: 'video', src: '/media/videos/agent-studio2.mp4', alt: 'Agent Studio: AI Design Agents ||| 2026', tags: ['AI Design Workflow','Multi Agents', 'AI Orchestration'] },
     
      
      // { id: 'music-mash', category: 'independent', type: 'image', src: '/media/images/music-mash-app.png', alt: 'Music Mash — Spotify App ||| 2020–2021', tags: ['UX Design', 'UI Design', 'Research', 'Testing', 'UI Engineering'] },
      // { id: 'blankt-home', category: 'independent', type: 'video', src: '/media/videos/blank-collection-old.mp4', alt: 'blankt.com — Home ||| 2021–2022', tags: ['UX Design', 'UI Design', 'Research', 'Testing', 'Growth', 'Brand Design'] },
      // { id: 'blankt-web', category: 'independent', type: 'video', src: '/media/videos/blankt.mp4', alt: 'blankt.com — Graphic Editor ||| 2021–2022', tags: ['UX Design', 'UI Design', 'Research', 'Testing', 'Growth', 'Product Design'] },

      // ── Cool Stuffs ────────────────────────────────────────────────────────
      
      { id: 'creative-coding-project', category: 'creative', type: 'video', src: '/media/videos/creative-coding-bob.mp4', alt: 'Visual Design — Bob ||| 2024', tags: ['Visual Design', 'Creative Coding', 'p5.js'] },
      { id: 'creative-coding-project2', category: 'creative', type: 'video', src: '/media/videos/creative-coding-fireworks.mp4', alt: 'Generative — Firework ||| 2024', tags: ['Visual Design', 'Creative Coding', 'p5.js'] },
      { id: 'creative-coding-project3', category: 'creative', type: 'video', src: '/media/videos/creative-coding-type.mp4', alt: 'Dynamic Type ||| 2024', tags: ['Visual Design', 'Creative Coding', 'p5.js'] },
      { id: 'creative-coding-project5', category: 'creative', type: 'video', src: '/media/videos/creative-coding-network.mp4', alt: 'Network Simulation ||| 2024', tags: ['Visual Design', 'Creative Coding', 'p5.js'] },
      { id: 'creative-coding-project4', category: 'creative', type: 'video', src: '/media/videos/creative-coding-rain.mp4', alt: 'Spring Rain ||| 2024', tags: ['Visual Design', 'Creative Coding', 'p5.js'] },
      { id: 'creative-coding-project6', category: 'creative', type: 'image', src: '/media/images/generated_pattern_gray.png', alt: 'Generated Pattern — Gray ||| 2024', tags: ['Visual Design', 'Creative Coding', 'p5.js'] },
      { id: 'creative-coding-project7', category: 'creative', type: 'image', src: '/media/images/generated_pattern_blue.png', alt: 'Generated Pattern — Blue ||| 2024', tags: ['Visual Design', 'Creative Coding', 'p5.js'] },
      { id: 'creative-coding-project8', category: 'creative', type: 'image', src: '/media/images/generated_pattern_white.png', alt: 'Generated Pattern — White ||| 2024', tags: ['Visual Design', 'Creative Coding', 'p5.js'] },
    ];
  }

  getAllProjects() {
    return this.projects;
  }

  getProjectById(id) {
    return this.projects.find(project => project.id === id);
  }

  getProjectsByCategory(category) {
    return this.projects.filter(project => project.category === category);
  }
}

export default ProjectModel;
