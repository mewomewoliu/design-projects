class ProjectModel {
  constructor() {
    this.projects = [
      { id: 'bbc', type: 'video', src: '/media/videos/bbc.mp4', alt: 'Blablacar App ||| 2020-2021', tags: ['Product Design','Framer prototyping'] },
      { id: 'storykit-design-system', type: 'image', src: '/media/images/storykit-design-system.png', alt: 'Storykit Design System ||| 2023-2024', tags: ['Design System', 'Product Design'] },
      { id: 'scania-helpcenter', type: 'video', src: '/media/videos/scania-helpcenter.mp4', alt: 'Scania Help Center ||| 2024', tags: ['Product Design', 'Research', 'Copy Writing', 'UI Design', 'Workshop'] },  
      { id: 'blankt-home', type: 'video', src: '/media/videos/blankthome.mp4', alt: 'blankt.com Home ||| 2020-2021', tags: ['UX Design', 'UI Design', 'Research', 'Testing', 'Growth', 'Brand Design'] },
      { id: 'blankt-web', type: 'video', src: '/media/videos/blankt.mp4', alt: 'blankt.com Graphic Editor ||| 2020-2021', tags:  ['UX Design', 'UI Design', 'Research', 'Testing', 'Growth', 'Product Design'] },
      { id: 'music-mash', type: 'image', src: '/media/images/music-mash-app.png', alt: 'Music mash on Spotify App ||| 2020-2021', tags: ['UX Design', 'UI Design', 'Research', 'Testing', 'UI Engineering'] },
      // { id: 'music-mash-web', type: 'video', src: '/media/videos/music-mash-web.mp4', alt: 'Music mash on Spotify App ||| 2020-2021', tags: ['UX Design, UI Design, Research, Testing, UI Engineering'] },
      { id: 'music-library', type: 'video', src: '/media/videos/storykit.mp4', alt: 'Storykit Music Library ||| 2023-2024', tags:  ['UX Design', 'UI Design', 'Research', 'Growth', 'Design System']},
      { id: 'blankt-mobile', type: 'video', src: '/media/videos/blanktmobile.mp4', alt: 'blankt.com Mobile ||| 2020-2021', tags:  ['UX Design', 'UI Design', 'Research', 'Testing', 'Growth', 'Responsibe Design'] }, 
      { id: 'bbc-design-system', type: 'image', src: '/media/images/blankt-editor.png', alt: 'Blablacar Design System for Customer Success ||| 2021', tags: ['Design System', 'Product Design'] },
      { id: 'create', type: 'image', src: '/media/images/storykit-create-demo.png', alt: 'Storykit AI Video Creator ||| 2023-2024', tags: ['UX Design', 'UI Design', 'Research', 'Growth', 'Design System']},
      { id: 'yourbeetweb', type: 'image', src: '/media/images/yourbeetweb.png', alt: 'Yourbeet ||| 2020-2021', tags: ['UX Design', 'UI Design', 'Research', 'Testing', 'Branding', 'Product Design'] },
      { id: 'yourbeetmobile', type: 'video', src: '/media/videos/beet.mp4', alt: 'Your Beet Recipe App ||| 2020-2021', tags: ['UX Design', 'UI Design', 'Research', 'Testing', 'Branding', 'Product Design'] },
      { id: 'creative-coding-project', type: 'video', src: '/media/videos/creative-coding-project2.mp4', alt: 'Creative Coding Project: Index 1 ||| 2024', tags: ['Creative Coding', 'p5.js','Graphic Design'] },
      { id: 'creative-coding-project2', type: 'video', src: '/media/videos/creative-coding-project.mp4', alt: 'Creative Coding Project: Index 2 ||| 2024', tags: ['Creative Coding', 'p5.js'] },
      { id: 'creative-coding-project3', type: 'video', src: '/media/videos/creative-coding-firework.mp4', alt: 'Creative Coding Project: Firework ||| 2024', tags: ['Creative Coding', 'p5.js'] },
      // { id: 'graphic-design', type: 'image', src: '/media/images/yourbeet-type.png', alt: 'Graphic Design', tags: ['Graphic Design'] }
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