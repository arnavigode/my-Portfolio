import React, { Component } from "react";
// import { Icon } from "@iconify/react";
import { Button } from "react-bootstrap";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                    background: "transperent",
                    color: "white",
                  }}
                >
                  <br />
                  <span style={{}} className="wave">{hello} ☺️ </span>
                  <br />
                  <br />
                  <span style={{fontSize: "21px"}}>{about}</span>
                  <br />
                  <br />
                  <a
                    className="buttonres"
                    href="Arnavi_Gode.pdf"
                    download="Arnavi Gode.pdf"
                  >
                    <Button
                      className="button"
                      style={{
                        background: "black",
                        color: "white",
                        border: "none",
                        width:"30%",
                        height: "40px",
                        clear: "both",
                      }}
                    >
                      GET RESUME <i class="fas fa-download"></i>
                    </Button>
                  </a>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;


// "homepage": "https://arnavigode.github.io/my-Portfolio/",
