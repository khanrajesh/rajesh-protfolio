import {Col, Container, Row} from "react-bootstrap";
import {CardinalCurve} from "react-svg-curve";
import {useState, useEffect} from "react";
import p1 from '../assets/img/p1.png'
import p2 from '../assets/img/p2.png'
import p3 from '../assets/img/p3.png'
import p4 from '../assets/img/p4.png'
import p5 from '../assets/img/p5.png'
import p6 from '../assets/img/p6.png'
import p7 from '../assets/img/p7.png'
import p8 from '../assets/img/p8.png'
import p9 from '../assets/img/p9.png'
import p10 from '../assets/img/p10.png'
import p11 from '../assets/img/p11.png'
import {Box} from "react-bootstrap-icons";

export const TimeLine = () => {
    const data = [

        [1250, 80],
        [400, 270],
        [1000, 570],
        [10, 950],
    ];

    return (
        <section className="time-line" id="time-line">
            <Container>
                <div>
                    {/*<svg className="curve">*/}
                    {/*    <CardinalCurve className="cardinal-curve" data={data} tension={0}/>*/}
                    {/*</svg>*/}

                    <img className="p-image" id="p1" src={p1} alt="p1"/>
                    <img className="p-image" id="p2" src={p2} alt="p2"/>
                    <img className="p-image" id="p12" src={p2} alt="p12"/>
                    <img className="p-image" id="p3" src={p3} alt="p3"/>
                    <img className="p-image" id="p4" src={p4} alt="p4"/>
                    <img className="p-image" id="p5" src={p5} alt="p5"/> {/*red planet*/}
                    <img className="p-image" id="p6" src={p6} alt="p6"/>
                    <img className="p-image" id="p7" src={p7} alt="p7"/>
                    <img className="p-image" id="p10" src={p10} alt="p10"/>
                    <img className="p-image" id="p11" src={p11} alt="p11"/> {/*last blue planet*/}


                    <Col className="time-line-card" id="tl8" size={12} sm={6} md={4}>
                        <div className="">
                            <h6>Iseveru Technology <br></br><span>(Software Engineer 2022-present)</span></h6>
                            <p>Implementation of various features across different applications.
                                BBPS features are integrated into India Post Payment Bank and iServeu app.
                                IRCTC SDK incorporates PNR status check and payment process using Kotlin, Retrofit,
                                WebView, Rest API, and MVVM.
                                Iserveu app includes live internet detection, ads implementation, and a server-driven UI
                                with Compose, using Broadcast Receiver, LiveData, Firestore, and REST API.
                                Axis Bank, AEPS implements.
                                Orbonix (Orbo Care) implements a Medical Test Management System, Admin-User Wallet, and Paytm Integration.
                            </p>
                        </div>
                    </Col>

                    <Col className="time-line-card" id="tl7" size={12} sm={6} md={4}>
                        <div className="">
                            <h6>Intealth Technology pvt ltd<br></br><span>(Software Engineer-Trainee)</span>
                            </h6>
                            <p>Developing company’s Application That provides Health service to its users. Working on
                                Kotlin, Compose, Retrofit, Notification Management, Camera Pixel Manipulation, Heart
                                rate Monitoring, Graph Implementation in compose and REST API integration of
                                Company Applications.
                            </p>
                        </div>
                    </Col>

                    <Col className="time-line-card" id="tl6" size={12} sm={6} md={4}>
                        <div className="">
                            <h6>Silver Phoenix pvt ltd<br></br><span>(Software Engineer Intern)</span>
                            </h6>
                            <p>Developing company’s Application E-commerce platform that includes 3 apps a Customer
                                App (version 2), Partner app/Delivery App and Admin App. Working on java, Retrofit,
                                Payment Integration, Live tracking, FireBase, Notification Management, Messaging
                                Service (FAST2SMS), BHIM UPI payment Method, Google Map, Google Place API, and
                                REST API integration of Company Applications.

                            </p>
                        </div>
                    </Col>
                    <Col className="time-line-card" id="tl5" size={12} sm={6} md={4}>
                        <div className="">
                            <h6>Skill Afford<br></br><span>(Data Science & Analyst Intern) Aug 2021 - Jan 2022</span></h6>
                            <p>
                            </p>
                        </div>
                    </Col>

                    <Col className="time-line-card" id="tl4" size={12} sm={6} md={4}>
                        <div className="">
                            <h6>Bhadani's Quantity Surveying Institute<br></br><span>(Jr. Quantity Surveyor cum Corporate Trainer) Feb 2020 - April 2020</span></h6>
                            <p>
                                Providing Quantity surveying service, Training and Guidance to the Civil Engineers at their training decision, responsible for business development and lead generation
                            </p>
                        </div>
                    </Col>

                    <Col className="time-line-card" id="tl3" size={12} sm={6} md={4}>
                        <div className="">
                            <h6>B.Tech (Civil Engineering) <br></br><span>GIET University, Gunupur (2016 - 2020)</span></h6>
                            <p>
                            </p>
                        </div>
                    </Col>
                    <Col className="time-line-card" id="tl2" size={12} sm={6} md={4}>
                        <div className="">
                            <h6>Higher Secondary (+2)<br></br><span>Govt. Jr Science College Malkangiri (2014 - 2016)</span></h6>
                            <p>
                            </p>
                        </div>
                    </Col>

                    <Col className="time-line-card" id="tl1" size={12} sm={6} md={4}>
                        <div className="">
                            <h6>Matriculation (10th)<br></br><span>Kendriya Vidyalaya Malkangiri (2014)</span></h6>
                            <p>
                            </p>
                        </div>
                    </Col>



                </div>

            </Container>
        </section>
    );
};


