import appleLogo from '../assets/img/applelogo.png'
import androidLogo from '../assets/img/androidlogo.png'
import webLogo from '../assets/img/weblogo.png'
import globalLogo from '../assets/img/globallogo.png'
import aiLogo from '../assets/img/ailogo.png'
import databaseLogo from '../assets/img/databaselogo.png'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Developed a versatile skill set in software development, creating sophisticated industry-level applications.<br>
                        </br>Consistently deliver exceptional results by staying updated with the latest industry standards and evolving norms.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={androidLogo} alt="Image" />
                                <h5>Android Development</h5>
                                <h5>(Java, Kotlin, React Native)</h5>
                            </div>
                            <div className="item">
                                <img src={appleLogo} alt="Image" />
                                <h5>ISO Development</h5>
                                <h5>(Xcode, Swift)</h5>
                            </div>
                            <div className="item">
                                <img src={globalLogo} alt="Image" />
                                <h5>Web Development</h5>
                                <h5>(React.js, Javascrept)</h5>
                            </div>
                            <div className="item">
                                <img src={webLogo} alt="Image" />
                                <h5>Backend Development</h5>
                                <h5>(Ktor, Django, Flask)</h5>
                            </div>
                            <div className="item">
                                <img src={aiLogo} alt="Image" />
                                <h5>ML & AI Model Deployment</h5>
                                <h5>(R, Python)</h5>
                            </div>
                            <div className="item">
                                <img src={databaseLogo} alt="Image" />
                                <h5>Data Base Management</h5>
                                <h5>(FireBase, SQL, MongoDB)</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
