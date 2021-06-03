import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import playstore from "../images/playstore.png";
import herophone from "../images/phonebanner.0384c356.png";
const Hero = () => {
  return (
    <>
      <Container fluid className="hero">
        <Container>
          <Row>
            <Col sm={6} className="hero-text">
              <h2>CHUMZ</h2>
              <p>Building a saving culture</p>
              <img src={playstore} alt="playstore" style={{width:"150px" ,cursor:"pointer"}} />
            </Col>
            <Col sm={6} className="hero-right">
                <img src={herophone} alt="herophone"  style={{width:"400px"}} />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Hero;
