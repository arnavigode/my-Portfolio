import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import $ from "jquery";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      // var url = this.props.projects[1].url2;
        if (this.props.resumeBasicInfo.projects) {
          const technologies = this.props.resumeBasicInfo.projects.technologies;
        if (this.props.resumeBasicInfo.projects.technologies) {
          var tech = technologies.map((icons, i) => {
            return (
              <li className="list-inline-item mx-3" key={i}>
                <span>
                  <div className="text-center">
                    <i className={icons.class} style={{ fontSize: "300%" }}>
                      <p className="text-center" style={{ fontSize: "30%" }}>
                        {icons.name}
                      </p>
                    </i>
                  </div>
                </span>
              </li>
            );
          });
        }
      }
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer", color: "white" }}
            id="projects"
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div>
                  <img
                    src={projects.images[0]}
                    alt="projectImages"
                    height="230"
                    style={{
                      marginBottom: 0,
                      paddingBottom: 0,
                      position: "relative",
                    }}
                  />
                  {/* <span className="project-date">{projects.startDate}</span> */}
                  <br />
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <p className="project-title-settings mt-3">
                      {projects.title}
                    </p>
                    <br />
                    <p
                      className="project-title-settings mt-3"
                      style={{ padding: "5px 5px 0 5px" }}
                    >
                      {projects.url2 ? (
                        <a
                          href={projects.url2}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-href"
                        >
                          <i
                            className=" fab fa-github"
                            style={{ marginLeft: "10px" }}
                          ></i>
                        </a>
                      ) : null}
                      {projects.url ? (
                        <a
                          href={projects.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-href"
                        >
                          <i
                            className="fas fa-external-link-alt"
                            style={{ marginLeft: "10px" }}
                          ></i>
                        </a>
                      ) : null}
                    </p>
                   
                  </div>
                  {/* <p>React Project</p> */}
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "white", fontSize:"22px" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
