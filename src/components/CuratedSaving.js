import React from "react";
import { Container, Row, Col, CardDeck, Card } from "react-bootstrap";
import generalImage from "../images/other.f2e37f45.jpg";
import business from "../images/business.eac5958d.jpg";
import calender from "../images/calendar.756438d7.jpg";
import emergency from "../images/emergency.f359490f.jpg";
import headphones from "../images/headphones.01a4734a.jpg";
import land from "../images/land.56df608f.jpg";
import sneakers from "../images/sneakers.12596dba.jpg";
import rent from "../images/rent.73d6d054.jpg";
import graduation from "../images/graduation.cd424adf.jpg";

const CuratedSaving = () => {
  return (
    <section className="new-section">
      <Container fluid style={{ backgroundColor: "purple" }}>
        <Container>
          <Row>
            <Col
              lg={12}
              className="d-flex align-items-center justify-content-center"
            >
              <h2>Curated saving plans</h2>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <CardDeck>
            <Card className="text-center">
              <Row className="g-0">
                <Col md={4}>
                  <img
                    src={generalImage}
                    alt="general"
                    className="card-img-top h-100 w-100"
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Group one</Card.Title>
                    <Card.Text>37 goals</Card.Text>
                    <Card.Text>KES 73254 saved</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className="text-center">
              <Row className="g-0">
                <Col md={4}>
                  <img
                    src={business}
                    alt="general"
                    className="card-img-top h-100 w-100"
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>General</Card.Title>
                    <Card.Text>37 goals</Card.Text>
                    <Card.Text>KES 73254 saved</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className="text-center">
              <Row className="g-0">
                <Col md={4}>
                  <img
                    src={emergency}
                    alt="general"
                    className="card-img-top h-100 w-100"
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Emergency</Card.Title>
                    <Card.Text>37 goals</Card.Text>
                    <Card.Text>KES 73254 saved</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </CardDeck>
          <br />
          <CardDeck>
            <Card className="text-center">
              <Row className="g-0">
                <Col md={4}>
                  <img
                    src={headphones}
                    alt="general"
                    className="card-img-top h-100 w-100"
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Tech Accessories</Card.Title>
                    <Card.Text>37 goals</Card.Text>
                    <Card.Text>KES 73254 saved</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className="text-center">
              <Row className="g-0">
                <Col md={4}>
                  <img
                    src={land}
                    alt="general"
                    className="card-img-top h-100 w-100"
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Land</Card.Title>
                    <Card.Text>37 goals</Card.Text>
                    <Card.Text>KES 73254 saved</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className="text-center">
              <Row className="g-0">
                <Col md={4}>
                  <img
                    src={graduation}
                    alt="general"
                    className="card-img-top h-100 w-100"
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Education</Card.Title>
                    <Card.Text>37 goals</Card.Text>
                    <Card.Text>KES 73254 saved</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </CardDeck>
          <br />
          <CardDeck>
            <Card className="text-center">
              <Row className="g-0">
                <Col md={4}>
                  <img
                    src={sneakers}
                    alt="general"
                    className="card-img-top h-100 w-100"
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Fitness</Card.Title>
                    <Card.Text>37 goals</Card.Text>
                    <Card.Text>KES 73254 saved</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className="text-center">
              <Row className="g-0">
                <Col md={4}>
                  <img
                    src={calender}
                    alt="general"
                    className="card-img-top h-100 w-100"
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>52 Week Challenge</Card.Title>
                    <Card.Text>37 goals</Card.Text>
                    <Card.Text>KES 73254 saved</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className="text-center">
              <Row className="g-0">
                <Col md={4}>
                  <img
                    src={rent}
                    alt="general"
                    className="card-img-top h-100 w-100"
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Rent</Card.Title>
                    <Card.Text>37 goals</Card.Text>
                    <Card.Text>KES 73254 saved</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </CardDeck>
        </Container>
      </Container>
    </section>
  );
};

export default CuratedSaving;
