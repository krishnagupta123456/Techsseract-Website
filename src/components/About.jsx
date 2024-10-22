import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import about_1 from '../img/about_1.jpg';

const About = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h1>About Us</h1>
          <p>This website is operated by CMP CookMyProject LLP. We have a team of dedicated experts having vast experience in Web Development in almost all the platforms, bringing prospects which in turn promote sales and revenue, in your own desirable budget.</p>
          <Row className="mt-4">
            <Col md={6}>
              <h4>Consultancy Specialties</h4>
              <p>Search has changed. We understand that ranking is not the goal, selling is. So, we go beyond traditional branding and help you in establishing your brand name and dominating the competition.</p>
            </Col>
            <Col md={6}>
              <h4>Designing Specialists</h4>
              <p>Good Designs provides the opportunity to build brand awareness, transmit messages to key audiences, and drive website traffic at very low cost, therefore offering big returns through more leads.</p>
            </Col>
          </Row>
        </Col>
        <Col md={5}>
          <img src={about_1} alt="About us" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;