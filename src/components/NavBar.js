import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import logo from '../assets/img/logo.svg';
import gitlabIcon from '../assets/img/gitlab.svg'
import githubIcon from '../assets/img/github.svg'
import linkdenIcon from '../assets/img/linkedin.svg'
import instagramIcon from '../assets/img/instagram.svg'
import mediumIcon from '../assets/img/medium.svg'
import { HashLink } from 'react-router-hash-link';

import {  BrowserRouter as Router} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <section className="home" id="home">
<Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
           <h1 className="ms-logo"> Rajesh Khan </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
              <Nav.Link href="#time-line" className={activeLink === 'time-line' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('time-line')}>Time Line</Nav.Link>

              {/* <Nav.Link href="#project" className={activeLink === 'blogs' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('blogs')}>Blogs</Nav.Link> */}
            </Nav>

            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/rajesh-khan-105635172/" target="_blank"><img src={linkdenIcon} alt="" /></a>
                <a href="https://www.instagram.com/rajesh_kha.n/" target="_blank"><img src={instagramIcon} alt="" /></a>
                <a href="https://gitlab.com/khanrajesh" target="_blank"><img src={gitlabIcon} alt="" /></a>
                <a href="https://github.com/khanrajesh" target="_blank"><img src={githubIcon} alt="" /></a>
                <a href="https://medium.com/@khanrajesh7128" target="_blank"><img src={mediumIcon} alt="" /></a>

              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
    </section>
  )
}
