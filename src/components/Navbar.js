import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleNav = styled.div`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .navbarp {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    background: #3f3f3f;
    /* background-color: red; */
    color: black;
    font-family: "Raleway", sans-serif;
    box-shadow: 0 4px 6px rgb(0 0 0 / 30%);
    position: fixed;
    width: 100vw !important;
    top: 0;
    z-index: 1 !important;
    /* overflow: hidden; */
  }
  .navbarp h3 {
    display: flex;
    justify-content: flex-end !important;
    margin-left: 30%;
  }
  a {
    color: white !important;
  }
  .logo {
    font-size: 30px;
  }
  .nav-links {
    display: flex;
    justify-content: flex-end !important;
    list-style: none;
    width: 75px;
    margin-left: 90%;
  }
  .home,
  .about,
  .skills,
  .projects,
  .contact {
    text-decoration: none;
    color: white;
    font-size: 20px;
    padding: 10px 20px;
    margin: 0 10px;
    cursor: pointer;
  }
`;

export default function Navbar() {
  return (
    <StyleNav>
      <nav className="navbarp">
             {/* <h3>ARNAVI</h3>  */}
            <ul className="nav-links">
                <div className="home" >
                    <a href="#home">
                    <li>Home</li>
                    </a>
                </div>
                <div  className="about" >
                <a href="#about">
                    <li>About</li>
                    </a>
                </div>
                <div  className="skills" >
                <a href="#skills">
                    <li>Skills</li>
                    </a>
                </div>
                <div  className="projects" >
                <a href="#projects">
                    <li>Projects</li>
                    </a>
                    
                </div>
                <div className="contact" >
                <a href="#footer">
                    <li>Contact</li>
                    </a>
                    
                </div>
            </ul>
      </nav> 
{/* 
      <nav className="navbar navbar-expand-lg navbarp">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
           
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" style={{background:"white"}}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav"></div>
            <div className="navbar-nav ms-auto">
              <a href="#home" className="nav-item nav-link active home">
                Home
              </a>
              <a href="#about" className="nav-item nav-link about">
                About
              </a>
              <a href="#projects" className="nav-item nav-link projects">
                Projects
              </a>
              <a
                href="#footer"
                className="nav-item nav-link contact"
                // tabindex="-1"
                // style={{cursor:"pointer"}}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav> */}
    </StyleNav>
  );
}
