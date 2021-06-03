import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const CallToAction = () => {
  return (
    <section className="new-section">
      <Container fluid>
        <Container>
          <Row className="calltoAction">
            <Col
              sm={4}
              className="d-flex justify-content-center align-items-center"
            >
              <h3>Ready to get started?</h3>
            </Col>
            <Col
              sm={4}
              className="d-flex justify-content-center align-items-center"
            >
              <p>
                Start saving today and be on track to your dream of financial
                freedom
              </p>
            </Col>
            <Col
              sm={4}
              className="d-flex justify-content-center align-items-center"
            >
              <Button className="btn btn-danger bg-gradient">
                Start saving
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default CallToAction;
