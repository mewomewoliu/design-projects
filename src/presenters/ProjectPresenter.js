class ProjectPresenter {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  presentProjects() {
    const projects = this.model.getAllProjects();
    this.view.renderProjects(projects);
  }
  
}


export default ProjectPresenter;