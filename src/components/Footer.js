import {Container, Row, Col} from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import gitlabIcon from '../assets/img/gitlab.svg'
import githubIcon from '../assets/img/github.svg'
import linkdenIcon from '../assets/img/linkedin.svg'
import instagramIcon from '../assets/img/instagram.svg'
import mediumIcon from '../assets/img/medium.svg'

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    {/* <MailchimpForm /> */}
                    <Col size={12} sm={6}>
                        <h1 className="ms-logo"> Rajesh Khan </h1>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/rajesh-khan-105635172/" target="_blank"><img
                                src={linkdenIcon} alt=""/></a>
                            <a href="https://www.instagram.com/rajesh_kha.n/" target="_blank"><img src={instagramIcon}
                                                                                                   alt=""/></a>
                            <a href="https://gitlab.com/khanrajesh/" target="_blank"><img src={gitlabIcon} alt=""/></a>
                            <a href="https://github.com/khanrajesh/" target="_blank"><img src={githubIcon} alt=""/></a>
                            <a href="https://medium.com/@khanrajesh7128/" target="_blank"><img src={mediumIcon} alt=""/></a>

                        </div>
                        <p>Copyright 2023. All Rights Reserved
                            <br></br>
                            <a href="https://webdecoded.gumroad.com/" style={{textDecoration: 'none'}} target="_blank"
                               id="footer_thanks"> Thank You WebDecoded for helping us learn</a>
                        </p>
                    </Col>
                </Row>


            </Container>
        </footer>
    )
}
