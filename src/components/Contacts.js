import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
const Contacts = () => {
  return (
    <section className="new-section">
      <Container fluid className="contact-fluid">
        <Container>
          <Row>
            <Col className="contact">
              <BiPhoneCall />
              <p>+(254) 704 089 351</p>
            </Col>
            <Col className="contact">
              <AiOutlineMail />
              <p>info@moneto.co.ke</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Contacts;
