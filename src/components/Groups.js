import React from "react";
import { Container, Row, Col, Button, CardDeck, Card } from "react-bootstrap";
import groupchart from "../images/downloadprocess1.png";
import approval from "../images/downloadprocess2.png";
import history from "../images/downloadprocess3.png";

const Groups = () => {
  return (
    <section className="new-section">
      <Container fluid>
        <Container>
          <Row>
            <Col
              lg={8}
              className="d-flex flex-column align-items-center justify-content-center offset-lg-2"
              style={{ textAlign: "center" }}
            >
              <h2>Forget Whatsapp groups save on chumz</h2>
              <p>
                Join forces with friends, family, chama, colleagues to save for
                a common goal
              </p>
              <Button variant="btn btn-danger mb-3 ">Learn more</Button>
            </Col>
          </Row>
        </Container>
        <Container fluid className="chama mb-5"></Container>
        <Container>
          <CardDeck>
            <Card className="text-center bg-primary bg-gradient" text="white">
              <Card.Body>
                <Card.Title>Group chat</Card.Title>
                <Card.Img src={groupchart} />
              </Card.Body>
            </Card>
            <Card className="text-center bg-warning bg-gradient"  text="dark">
              <Card.Body>
                <Card.Title>Withdrawal approval</Card.Title>
                <Card.Img src={approval} />
              </Card.Body>
            </Card>
            <Card className="text-center bg-success bg-gradient" text="white">
              <Card.Body>
                <Card.Title>Transaction history</Card.Title>
                <Card.Img src={history} />
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </Container>
    </section>
  );
};

export default Groups;
