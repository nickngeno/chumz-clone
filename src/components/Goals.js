import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import goals from "../images/secion2image.png";
const Goals = () => {
  return (
    <section className="new-section">
      <Container fluid style={{backgroundColor:"red"}}>
        <Container>
          <Row>
            <Col lg={5} sm={12}>
              <img src={goals} alt="goals" style={{ width: "350px" }} />
            </Col>
            <Col lg={7} sm={12} className="goals-text">
              <h2>Saving made easy</h2>
              <p>
                Achieve the goals, milestones you set out for yourself today. It
                all starts by setting an easy goal. It’s time to achieve the
                dream. Chumz gives you nudges and reminders to help you stay on
                track
              </p>
              <Button variant="btn btn-danger">Start saving</Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Goals;
