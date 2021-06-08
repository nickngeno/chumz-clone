import React, { useEffect } from "react";
import { Container, Row, Col, Card, CardColumns,Image } from "react-bootstrap";
import Contacts from "./Contacts";
import { Members } from "../Members";

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = Members;

  return (
    <section className="new-section">
      <Container>
        <Row className="mt-3">
          <Col>
            <h2>Our Amazing Team</h2>
          </Col>
        </Row>
        <Row className="team-stack">
          <CardColumns>
            {data.map((member, index) => (
              <Card key={index}>
                <div className="d-flex justify-content-center">
                  <Image 
                  src={member.image}
                  roundedCircle
                  style={{
                    width: "171px",
                    height: "180px",
                  }} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Subtitle className="text-muted mb-3">
                   {member.title}
                  </Card.Subtitle>
                  <Card.Subtitle>Background</Card.Subtitle>
                  <Card.Text className="text-muted">{member.degree}</Card.Text>
                  <Card.Subtitle>Passion</Card.Subtitle>
                  <Card.Text className="text-muted">{member.passion}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </CardColumns>
        </Row>
      </Container>
      <Contacts />
    </section>
  );
};

export default Team;
