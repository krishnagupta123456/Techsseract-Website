import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='starts text-light'>
                <h2>Let's Get Started</h2>
            </div>
            <footer className="text-light py-5" style={{background: "#333333"}}>
                <Container style={{ width: "75%", margin: "auto" ,marginTop: "5rem",marginBottom: "5rem"}}>
                    <Row>
                        <Col md={3}>
                            <h5>About Us</h5>
                            <p className="text">Designing, Website Development, Mobile Application Development.</p>
                        </Col>
                        <Col md={3}>
                            <h5>Important Links</h5>
                            <ul className="list-unstyled  ">
                                <li><a href="#privacy" className="text">Privacy Policy</a></li>
                                <li><a href="#terms" className="text">Terms of Use</a></li>
                                <li><a href="#refund" className="text">Refund Policy</a></li>
                                <li><a href="#pricing" className="text">Pricing</a></li>
                            </ul>
                        </Col>
                        <Col md={3}>
                            <h5>Follow Us</h5>
                            <div className='social-icons' style={{width: "70%"}} >
                                <a href="#" className='text me-3'>< FaFacebookF /></a>
                                <a href="#" className='text me-3'><FaTwitter /></a>
                                <a href="#" className='text me-3'><FaInstagram /></a>
                            </div>
                        </Col>
                        <Col md={3}>
                            <h5>Contact Us</h5>
                            <p>Phone:
                                <a href="#" className="text me-4"> +91-9452052583</a></p>
                            <p>Email:
                                <a href="#" className="text me-3"> contact@techsseract.com</a></p>
                        </Col>
                    </Row>
                </Container>
                <div>
                    <hr style={{ width: "75%", margin: "auto", marginBottom: "50px" }} />
                </div>
                <div className='text text-center'>
                    <p >&copy; 2024 Techsseract. All rights reserved.</p>
                </div>

            </footer>
        </>
    );
};

export default Footer;
