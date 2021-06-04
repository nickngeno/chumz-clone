import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GrFacebook } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import pigicon from "../images/pigicon.046c4398.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="new-section">
      <Container fluid>
        <Container className="footer">
          <Row>
            <Col>
              <h5>Pages</h5>
              <ul className="footer-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/team">Team</Link>
                </li>
              </ul>
            </Col>
            <Col>
              <h5>Legal</h5>
              <ul className="footer-menu">
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms">Terms</Link>
                </li>
                <li>
                  <Link to="/faqs">FAQs</Link>
                </li>
              </ul>
            </Col>
            <Col>
              <h5>About Us</h5>
              <img
                src={pigicon}
                alt=""
                style={{ width: "30px", marginBottom: "1rem" }}
              />
              <p>
                We are a community dedicated to achieving personal financial
                freedom.
              </p>
            </Col>
            <Col className="text-center" >
              <h5>Follow Us</h5>
              <ul className="social-media">
                <li>
                  <a
                    href="https://facebook.com/chumz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GrFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/chumz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GrTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GrLinkedin />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <Container className=" d-flex justify-content-center">
          <p> &copy;2021 Moneto Ventures. All Rights Reserved</p>
        </Container>
      </Container>
    </section>
  );
};

export default Footer;
