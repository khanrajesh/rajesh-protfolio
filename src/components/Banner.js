import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImage from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Android Developer", "IOS Developer", "Backend Developer"];
    const [text, setText] = useState('');
    const period = 2000;
    const [delta,setDelta] = useState(300 - Math.random() *100);
    const [index, setIndex] = useState(1);

    //
    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)

        return ()=> {clearInterval(ticker)};
    },[text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
    }

  return (
    <section className="banner" id="name">
      <Container>
        <Row className="banner-row">
          <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi! I'm Rajesh Khan`}</h1>
            <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='["Web Developer", "Android Developer", "IOS Developer", "Backend Developer"]'><span className="wrap">{text}</span></span></h1>
            <p>
            With 3+ years of experience in Software Development, 
            I excel at creating exceptional applications that provide seamless customer experiences. 
            I have successfully delivered top-notch solutions to diverse clients, showcasing my commitment to excellence. 
            Proficient in technologies like Kotlin, Java, C, Ktor, Compose UI, AWS, Firebase, SQL, R, Python, Android Library, AI, and ML, I also possess a solid understanding of Data Structures, Algorithms, Solid Principles, Design Patterns, and Clean Architecture.
            My passion for product quality drives me to develop cutting-edge applications.
            </p>
            <button onClick={() => console.log("connect")}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
            </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImage} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
