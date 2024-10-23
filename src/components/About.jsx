import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import about_1 from '../img/about_1.jpg';

const About = () => {
  return (
    <Container className="my-5">
      <Row className='mx-auto about'>
        {/* Text Column */}
        <Col md={6} lg={6} className="text-column">
          <h1>About Us</h1>
          <p>
            This website is operated by CMP CookMyProject LLP. We have a team of dedicated experts having vast experience in Web Development on almost all platforms, bringing prospects that promote sales and revenue within your desirable budget.
          </p>
          <Row className="mt-4">
            <Col md={6}>
              <h4>Consultancy Specialties</h4>
              <p>
                Search has changed. We understand that ranking is not the goal; selling is. So, we go beyond traditional branding to help you establish your brand name and dominate the competition.
              </p>
            </Col>
            <Col md={6}>
              <h4>Designing Specialists</h4>
              <p>
                Good designs provide the opportunity to build brand awareness, transmit messages to key audiences, and drive website traffic at very low costs, offering significant returns through more leads.
              </p>
            </Col>
          </Row>
        </Col>

        {/* Image Column */}
        <Col md={5} lg={5} className="image-column">
          <img src={about_1} alt="About us" className="img-fluid" style={{marginLeft:"80px"}} />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
