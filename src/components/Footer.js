import React, { Component } from "react";
// import Mailer from "./Mailer";
class Footer extends Component {
  render() {
    
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
      
      <footer id="footer">
        
        <br/>
        <br/>
        <div className="col-md-12">
          <div>
            <div>
              <h1 style={{fontFamily: "'Raleway', sans-serif", fontSize:"22px"}}>CONTACT ME</h1>
              <br/>
              <br/>
              <div class="container">
                <div class="row">
                  <div class="col">
                    <i class="fas fa-mobile-android-alt fa-1x"></i> <span className="sp">+91-7350441681</span>
                  </div>
                  <div class="col">
                    <i class="fal fa-map-marker-check fa-1x"></i> <span className="sp">Pune,Maharshtra</span>
                  </div>
                  <div class="col">
                    <i class="far fa-envelope-open fa-1x"></i><span className="sp">arnavi.gode96@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="social-links">{networks}</div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy;{" "}
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : "???"}
              </small>
            </div>
          </div>
        </div>

        
      </footer>
    );
  }
}

export default Footer;
