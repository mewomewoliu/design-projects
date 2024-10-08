class ProjectModel {
  constructor() {
    this.projects = [
      { id: 'scania-helpcenter', type: 'image', src: `${process.env.PUBLIC_URL}/media/images/scania-helpcenter-home.png`, alt: 'Scania Helpcenter' },
      { id: 'bbc', type: 'video', src: `${process.env.PUBLIC_URL}/media/videos/bbc.mp4`, alt: 'Blablacar' },
      { id: 'music-library', type: 'video', src: `${process.env.PUBLIC_URL}/media/videos/storykit.mp4`, alt: 'Music Library' },
      { id: 'blankt-web', type: 'video', src: `${process.env.PUBLIC_URL}/media/videos/blankt.mp4`, alt: 'blankt' },
      { id: 'blankt-mobile', type: 'video', src: `${process.env.PUBLIC_URL}/media/videos/blanktmobile.mp4`, alt: 'blankt Mobile' },
      { id: 'blankt-home', type: 'video', src: `${process.env.PUBLIC_URL}/media/videos/blankthome.mp4`, alt: 'blankt Home' },
      { id: 'yourbeetweb', type: 'image', src: `${process.env.PUBLIC_URL}/media/images/yourbeetweb.png`, alt: 'Yourbeet' },
      { id: 'yourbeetmobile', type: 'video', src: `${process.env.PUBLIC_URL}/media/videos/beet.mp4`, alt: 'Beet' },
      { id: 'music-mash', type: 'video', src: `${process.env.PUBLIC_URL}/media/videos/music-mash-demo.mp4`, alt: 'Music mash' },
      { id: 'creative-coding-project', type: 'video', src: `${process.env.PUBLIC_URL}/media/videos/creative-coding-project2.mp4`, alt: 'Creative Coding Project' },
      { id: 'creative-coding-project2', type: 'video', src: `${process.env.PUBLIC_URL}/media/videos/creative-coding-project.mp4`, alt: 'Creative Coding Project' },
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