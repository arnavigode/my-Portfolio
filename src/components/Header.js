import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles
        .map((x) => [x.toUpperCase(), 1500])
        .flat();
    }

    const HeaderTitleTypeAnimation = React.memo(
      () => {
        return (
          <Typical className="title-styles" steps={this.titles} loop={50} />
        );
      },
      (props, prevProp) => true
    );
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <header
        id="home"
        style={{ height: "50px", display: "block" }}
      >
        <div className="row aligner" style={{ height: "100%" }}>
          <div className="col-md-12">
            <div>
              <span
                className="iconify header-icon"
                data-icon="la:laptop-code"
                data-inline="false"
              ></span>
              <br />
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#baaa80"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="twemoji:owl"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:sun-with-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              />
            </div>
            <br />
            <br />
            <div class="container">
              <div class="row">
                <div class="col">
                <a
                      href="https://github.com/arnavigode"
                      style={{ textDecoration: "none", cursor: "pointer", color: "inherit" }}
                    >
                  <i class="fab fa-github fa-2x" style={{textDecoration: "none", cursor: "pointer" }}>
                    
                  </i>
                  </a>
                  <a
                      href="https://www.linkedin.com/in/arnavi-gode-3227ba148/"
                      style={{ textDecoration: "none", cursor: "pointer", color: "inherit" }}
                    >
                  <i
                    class="fab fa-linkedin fa-2x"
                    style={{ cursor: "pointer" }}
                  >
                    
                  </i>
                  </a>
                  <a
                      href="https://twitter.com/GodeArnavi"
                      style={{ textDecoration: "none", cursor: "pointer" , color: "inherit"}}
                    >
                  <i class="fab fa-twitter fa-2x" style={{ cursor: "pointer" }}>
                    
                  </i>
                  </a>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
