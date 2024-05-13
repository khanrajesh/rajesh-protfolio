import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import {  VentureCard } from "./VentureCard";


import lazier from '../assets/img/lazier.png'
import charging from '../assets/img/charging.jpg'
import thrower from '../assets/img/throw.jpg'

import backendproject1 from '../assets/img/backendproject1.png'
import backendproject2 from '../assets/img/backendproject2.jpg'

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Ventures = () => {

  const webProject = [
    {
      title: "Lazier",
      description: "Android Library for ",
      imgUrl: lazier,
      url:"https://github.com/blazebizz/lazier"
    }, {
      title: "Error Thrower",
      description: "Simple node server throw the given error back",
      imgUrl: thrower,
      url:"https://github.com/khanrajesh/error_thrower_throw"
    },
  ];


  const backendProject = [
    {
      title: "Backend Developer (Ktor)",
      description: "System Design and Server Development",
      imgUrl: charging,
    }, {
      title: "Tool Detection & Monitoring software (Python & Django)",
      description: "System Design and Server Development",
      imgUrl: backendproject2,
    },
  ];

  return (
    <section className="venture" id="venture">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Evolving Expertise through Contributions</h2>
                <p>Explore a dynamic portfolio showcasing my latest projects and ongoing innovations. From web development to open-source contributions,
                  each endeavor reflects creativity and expertise. Join me in shaping the future of technology – collaborate, inquire, and let's craft something
                  extraordinary together. Get in touch and ignite innovation today!</p>
                <Tab.Container id="venture-tabs" defaultActiveKey="first">
                  <Nav variant="pillss" className="nav-pillss mb-5 justify-content-center align-items-center" id="pillss-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Open Source Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Ongoing Endeavors</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          webProject.map((project, index) => {
                            return (
                              <VentureCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          backendProject.map((project, index) => {
                            return (
                                <VentureCard
                                    key={index}
                                    {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/*<img className="background-image-right" src={colorSharp2}></img>*/}
    </section>
  )
}
