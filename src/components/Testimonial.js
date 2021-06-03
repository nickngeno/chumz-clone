import React from "react";
import { Container, Row, Col, CardDeck, Card } from "react-bootstrap";
import testimanial1 from "../images/testimonial-1.a553bb8f.png";
import testimanial2 from "../images/testimonial-2.ccfc8e90.png";
import testimanial3 from "../images/testimonial-3.3d88bcce.png";

const Testimonial = () => {
  return (
    <section className="new-section" >
      <Container fluid>
        <Container>
          <Row>
            <Col
              lg={12}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <h2>Testimononials</h2>
              <p>
                Don't just take our word for it.This is What others have to say
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <CardDeck>
            <Card className="text-dark bg-light border-0 shadow">
              <Card.Body >
              <div className="d-flex justify-content-end">
                  <img
                    src={testimanial1}
                    alt="testimonial"
                  />
                </div>
                <Card.Title>Jack kinga</Card.Title>
                <Card.Text>
                  Chumz has help me think different about saving due to ease of
                  use
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="text-dark bg-light border-0 shadow">
              <Card.Body>
                <div className="d-flex justify-content-end ">
                  <img
                    src={testimanial2}
                    alt="testimonial"
                  />
                </div>
                <Card.Title>Kelvin Kamau </Card.Title>
                <Card.Text>
                  Chumz has enabled me get to achieve most of my financial goals
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="text-dark bg-light border-0 shadow">
              <Card.Body>
              <div className="d-flex justify-content-end">
                  <img
                    src={testimanial3}
                    alt="testimonial"
                  />
                </div>
                <Card.Title>Emily wakarima</Card.Title>
                <Card.Text>
                  The app is great! I'm now able to save for different events in
                  my personal life, and also with my girlfriends, right from my
                  phone!!!
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </Container>
    </section>
  );
};

export default Testimonial;
