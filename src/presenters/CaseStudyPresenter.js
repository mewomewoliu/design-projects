class CaseStudyPresenter {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  presentCaseStudy(id) {
    const caseStudy = this.model.getCaseStudy(id);
    if (caseStudy) {
      const allCaseStudies = this.model.getAllCaseStudies();
      const currentIndex = allCaseStudies.findIndex(study => study.id === id);
      const nextStudy = allCaseStudies[(currentIndex + 1) % allCaseStudies.length];
      this.view.renderCaseStudy(caseStudy, nextStudy);
    } else {
      this.view.renderNotFound();
    }
  }
}

export default CaseStudyPresenter;