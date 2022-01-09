import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Navbar from "./Navbar";
export default function Main() {
    return (
        <div>
            <Router>
            <Navbar/>
          <Routes>
            <Route exact path="/" element={Header}>
              {/* <Header/> */}
            </Route>
            <Route exact path="/about" element={About}>
              {/* <Header/> */}
            </Route>
          </Routes>
        
        </Router>
        </div>
    )
}
