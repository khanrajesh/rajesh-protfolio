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
      description: "Elevate your Android development with 'Lazier,' simplifying tasks, reducing boilerplate, and empowering developers to build innovative apps effortlessly.",
      imgUrl: lazier,
      url:"https://github.com/blazebizz/lazier"
    }, {
      title: "Error Thrower",
      description: "Revolutionize your testing workflow with 'ErrorThrower,' a simple Node server that replicates errors for robust testing and efficient debugging.",
      imgUrl: thrower,
      url:"https://github.com/khanrajesh/error_thrower_throw"
    },
  ];


  const backendProject = [
    {
      title: "EcoCharge Hub (Android)",
      description: "Effortlessly charge your electric vehicle on-the-go with our intuitive app, offering convenient location search, payment options, and real-time availability updates.",
      imgUrl: charging,
      url:"https://github.com/blazebizz/EvChargingAndroid"
    }, {
      title: "EcoCharge Hub (Backend)",
      description: "Power up your electric charging network with our robust backend server, ensuring seamless transactions, data management, and scalability.",
      imgUrl: charging,
      url:"https://github.com/blazebizz/EvChargingBackend"
    },{
      title: "EcoCharge Hub (Web)",
      description: "Discover the future of electric mobility with our sleek website, featuring easy navigation, interactive maps, and comprehensive charging station information.",
      imgUrl: charging,
      url:"https://github.com/blazebizz/EvChargingWeb"
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
                <p>Explore a dynamic portfolio showcasing my latest projects and ongoing innovations. From development to open-source contributions,
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
