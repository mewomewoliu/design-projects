class ProjectModel {
  constructor() {
      this.projects = [
      { id: 'bbc', type: 'video', src: `${process.env.PUBLIC_URL}/media/videos/bbc.mp4`, alt: 'Blablacar' },
      { id: 'music-library', type: 'video', src: `${process.env.PUBLIC_URL}/media/videos/storykit.mp4`, alt: 'Music Library' },
      { id: 'blankt-web', type: 'video', src: `${process.env.PUBLIC_URL}/media/videos/blankt.mp4`, alt: 'blankt' },
      { id: 'blankt-mobile', type: 'video', src: `${process.env.PUBLIC_URL}/media/videos/blanktmobile.mp4`, alt: 'blankt Mobile' },
      { id: 'blankt-home', type: 'video', src: `${process.env.PUBLIC_URL}/media/videos/blankthome.mp4`, alt: 'blankt Home' },
      { id: 'yourbeetweb', type: 'image', src: `${process.env.PUBLIC_URL}/media/images/yourbeetweb.png`, alt: 'Yourbeet' },
      { id: 'yourbeetmobile', type: 'video', src: `${process.env.PUBLIC_URL}/media/videos/beet.mp4`, alt: 'Beet' },
      { id: 'particle', type: 'image', src: `${process.env.PUBLIC_URL}/media/images/Particle.png`, alt: 'Particle' },
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