import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const leaderBoard = () => {
  return (
    <section className="new-section">
      <Container >
        <Row>
          <Col
            lg={12}
            className="d-flex flex-column align-items-end justify-content-center"
          >
            <h2>Test your grit in our savings leaderboard</h2>
            <p>
            Fancy yourself competitive? Compete with other players and stand to win prizes
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="leaderboard" ></Container>
      
    </section>
  );
};

export default leaderBoard;
