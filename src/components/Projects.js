import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import webproject1 from '../assets/img/webproject1.png'
import webproject2 from '../assets/img/webproject2.png'
import webproject3 from '../assets/img/webproject3.png'
import webproject4 from '../assets/img/webproject4.png'

import androidproject1 from '../assets/img/androidproject1.png'
import androidproject2 from '../assets/img/androidproject2.png'
import androidproject3 from '../assets/img/androidproject3.png'
import androidproject4 from '../assets/img/androidproject4.png'
import androidproject6 from '../assets/img/androidproject6.png'
import androidproject7 from '../assets/img/androidproject7.jpeg'

import backendproject1 from '../assets/img/backendproject1.png'
import backendproject2 from '../assets/img/backendproject2.jpg'

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const webProject = [
    {
      title: "Udgam Foundation",
      description: "Design & Development",
      imgUrl: webproject1,
      url:"https://www.udgamfoundation.net/"
    },
    {
      title: "Skill Afford",
      description: "Design & Development",
      imgUrl: webproject2,
      url:"https://skillafford.wixsite.com/mysite"
    },
    {
      title: "Biswal Group of Construction",
      description: "Design & Development",
      imgUrl: webproject3,
      url: "https://skillafford.wixsite.com/website-1"
    }, {
      title: "Dew Drop Entertainment",
      description: "Design & Development",
      imgUrl: webproject4,
      url:"https://skillafford.wixsite.com/dewdropsent"
    },
  ];

  const androidProject = [
    {
      title: "Intealth (the healthy app)",
      description: "Design & Development",
      imgUrl: androidproject1,
      url:"https://scene.zeplin.io/project/6220d01c9159c859c61d0d16"
    },
    {
      title: "Sutpitara",
      description: "Design & Development",
      imgUrl: androidproject2,
      url:"https://www.figma.com/file/TYNm63kDEpVO64HrJ638FI/Sutpitara?type=design&node-id=0%3A1&mode=design&t=gbbUOcMQZXLy9vRE-1"
    },
    {
      title: "DORO",
      description: "Design, Development & Architecture",
      imgUrl: androidproject3,
      url:"https://play.google.com/store/apps/details?id=com.silverphoenix_v2.doro"
    }, {
      title: "DORO Partner",
      description: "Design, Development & Architecture",
      imgUrl: androidproject4,
      url:"https://play.google.com/store/apps/details?id=com.silverphoenix.doropartner"
    },{
      title: "DORO Admin",
      description: "Design, Development & Architecture",
      imgUrl: androidproject3,
    },{
      title: "NetWeb Bharat",
      description: "Design, Development & Architecture",
      imgUrl: androidproject6,
      url:"https://netwebbharat.com/"
    },{
      title: "Unity is Strength",
      description: "Design, Development & Architecture",
      imgUrl: androidproject7,
      url:"https://uisodisha.in/"
    },

  ];

  const backendProject = [
    {
      title: "Backend Developer (Ktor)",
      description: "System Design and Server Development",
      imgUrl: backendproject1,
    }, {
      title: "Tool Detection & Monitoring software (Python & Django)",
      description: "System Design and Server Development",
      imgUrl: backendproject2,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Works & Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Android & IOS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Backend, AI & ML</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          webProject.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          androidProject.map((project, index) => {
                            return (
                                <ProjectCard
                                    key={index}
                                    {...project}
                                />
                            )
                          })
                        }
                      </Row>                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          backendProject.map((project, index) => {
                            return (
                                <ProjectCard
                                    key={index}
                                    {...project}
                                />
                            )
                          })
                        }
                      </Row>                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
