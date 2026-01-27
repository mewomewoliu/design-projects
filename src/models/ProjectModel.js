class ProjectModel {
  constructor() {
    this.projects = [
      { id: 'thermo-cal', type: 'video', src: '/media/videos/thermo-cal.mp4', alt: 'Thermo Cal ||| 2025', tags: ['Product Design', 'UX/UI Design', 'Research', 'AI-Integrated designworkflow'] },
      { id: 'bbc', type: 'video', src: '/media/videos/bbc.mp4', alt: 'Blablacar App ||| 2020-2021', tags: ['Product Design','Framer prototyping'] },
      { id: 'storykit-design-system', type: 'image', src: '/media/images/storykit-design-system.png', alt: 'Storykit Design System ||| 2023-2024', tags: ['Design System', 'Product Design'] },
      { id: 'music-library', type: 'video', src: '/media/videos/storykit-music-lib.mp4', alt: 'Storykit Music Library ||| 2023-2024', tags:  ['UX&UI Design', 'Research', 'Growth', 'Design System','Brand Identity']},
      { id: 'scania-helpcenter', type: 'video', src: '/media/videos/scania-helpcenter.mp4', alt: 'Scania Help Center ||| 2024', tags: ['Product Design', 'Research', 'Copy Writing', 'UI Design', 'Workshop'] },  
      { id: 'music-mash', type: 'image', src: '/media/images/music-mash-app.png', alt: 'Music mash on Spotify App ||| 2020-2021', tags: ['UX Design', 'UI Design', 'Research', 'Testing', 'UI Engineering'] },
      // { id: 'music-mash-web', type: 'video', src: '/media/videos/music-mash-web.mp4', alt: 'Music mash on Spotify App ||| 2020-2021', tags: ['UX Design, UI Design, Research, Testing, UI Engineering'] },
      { id: 'blankt-home', type: 'video', src: '/media/videos/blank-collection.mp4', alt: 'blankt.com Home ||| 2020-2021', tags: ['UX Design', 'UI Design', 'Research', 'Testing', 'Growth', 'Brand Design'] },
      { id: 'blankt-web', type: 'video', src: '/media/videos/blankt.mp4', alt: 'blankt.com Graphic Editor ||| 2020-2021', tags:  ['UX Design', 'UI Design', 'Research', 'Testing', 'Growth', 'Product Design'] },
      // { id: 'blankt-mobile', type: 'video', src: '/media/videos/blanktmobile.mp4', alt: 'blankt.com Mobile ||| 2020-2021', tags:  ['UX Design', 'UI Design', 'Research', 'Testing', 'Growth', 'Responsibe Design'] }, 
      { id: 'bbc-design-system', type: 'image', src: '/media/images/bbc-crm-overview.png', alt: 'Blablacar Design System for Customer Success ||| 2021', tags: ['Design System', 'Product Design'] },
      { id: 'create', type: 'image', src: '/media/images/storykit-create-page.png', alt: 'Storykit AI Video Creator ||| 2023-2024', tags: ['UX Design', 'UI Design', 'Research', 'Growth', 'Design System']},
      // { id: 'yourbeetweb', type: 'image', src: '/media/images/yourbeetweb.png', alt: 'Yourbeet ||| 2020-2021', tags: ['UX Design', 'UI Design', 'Research', 'Testing', 'Branding', 'Product Design'] },
      // { id: 'yourbeetmobile', type: 'video', src: '/media/videos/beet.mp4', alt: 'Your Beet Recipe App ||| 2020-2021', tags: ['UX Design', 'UI Design', 'Research', 'Testing', 'Branding', 'Product Design'] },
      
      { id: 'creative-coding-project', type: 'video', src: '/media/videos/creative-coding-bob.mp4', alt: 'Creative Coding Project: Visual Design ||| 2024', tags: ['Visual Design','Creative Coding', 'p5.js','Graphic Design'] },
      { id: 'creative-coding-project2', type: 'video', src: '/media/videos/creative-coding-fireworks.mp4', alt: 'Creative Coding Project: Firework ||| 2024', tags: ['Visual Design','Creative Coding', 'p5.js'] },
      { id: 'creative-coding-project3', type: 'video', src: '/media/videos/creative-coding-type.mp4', alt: 'Creative Coding Project: Dynamic Type ||| 2024', tags: ['Visual Design','Creative Coding', 'p5.js'] },
      { id: 'creative-coding-project5', type: 'video', src: '/media/videos/creative-coding-network.mp4', alt: 'Creative Coding Project:  ||| 2024', tags: ['Visual Design','Creative Coding', 'p5.js'] },
      { id: 'creative-coding-project4', type: 'video', src: '/media/videos/creative-coding-rain.mp4', alt: 'Creative Coding Project: Spring Rain ||| 2024', tags: ['Visual Design', 'Creative Coding', 'p5.js'] },
      { id: 'creative-coding-project6', type: 'image', src: '/media/images/generated_pattern_gray.png', alt: 'Creative Coding Project: Generated Pattern Gray ||| 2024', tags: ['Visual Design', 'Creative Coding', 'p5.js', 'Graphic Design'] },
      { id: 'creative-coding-project7', type: 'image', src: '/media/images/generated_pattern_blue.png', alt: 'Creative Coding Project: Generated Pattern Blue ||| 2024', tags: ['Visual Design','Creative Coding', 'p5.js','Graphic Design'] },
      { id: 'creative-coding-project8', type: 'image', src: '/media/images/generated_pattern_white.png', alt: 'Creative Coding Project: Generated Pattern White ||| 2024', tags: ['Visual Design','Creative Coding', 'p5.js','Graphic Design'] },
    ];
      
  }

  getAllProjects() {
    return this.projects;
  }

  getProjectById(id) {
    return this.projects.find(project => project.id === id);
  }
}

export default ProjectModel;