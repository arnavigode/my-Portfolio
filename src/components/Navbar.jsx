import React from "react";
import {Link} from "react-router-dom"
import styled from 'styled-components'

const StyleNav = styled.div`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.navbarp{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
    background: #3f3f3f;
    color: white;
    font-family: 'Raleway', sans-serif;
    box-shadow: 0 4px 6px rgb(0 0 0 / 30%);
}
.navbarp h3{
    display: flex;
    justify-content: flex-end!important;
    margin-left: 30%;
}
a { color: white !important } 
.logo{
    font-size: 30px;
}
.nav-links{
    display: flex;
    justify-content: flex-end !important;
    list-style: none;
    width: 75px;
    margin-left: 90%;
}
.home,.about,.skills,.projects,.contact{
     text-decoration: none;
     color: white;
     font-size: 20px;
     padding: 10px 20px;
     margin: 0 10px;
     cursor: pointer;
}
`

export default function Navbar() {
  return (
    <StyleNav>
      <nav className="navbarp">
            {/* <h3>ARNAVI</h3> */}
            <ul className="nav-links">
                <div className="home" >
                    <a href="#about">
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
    </StyleNav>
  );
}
