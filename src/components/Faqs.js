import React, {useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Contacts from "./Contacts";

const Faqs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="new-section">
      <Container>
        <Row>
          <Col>
            <h2>FAQs</h2>
            <h3>WHAT IS CHUMZ?</h3>
            <p className="text-muted">
              Chumz is a mobile based saving application that provides the best
              user experience and guidance to help you achieve your goals
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Why should I use chumz ?</h5>
            <ul className="text-muted">
              <li>
                Chumz helps you to easily turn your intent to save to action
              </li>
              <li>Chumz makes saving fun and engaging through gamification </li>
              <li>
                Chumz has intelligent alert model to encourage saving from
                mobile money
              </li>
              <li>Chumz enables you to save as low as ksh 5</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>How do I get started ?</h5>
            <p className="text-muted">
              Download chumz app from playstore using the link below
            </p>
            <p className="text-muted">https://bit.ly/ChumzApp</p>
            <p className="text-muted">Create an account and start saving</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>How much can I save ?</h5>
            <p className="text-muted">You can save as low as ksh 5</p>
            <p className="text-muted">
              We don't have an upper limit on the amount you can save
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>SAFETY AND SECURITY</h3>
            <h5>How secure is my personal information ?</h5>
            <p className="text-muted">
              Information collected is a kyc requirement by regulator
            </p>
            <p className="text-muted">
              -Your personal information is encrypted using bank-level
              encryption both in transit and in stored
            </p>
            <p className="text-muted">
              -Your personal info is not shared with any third party
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Does chumz have an office ?</h5>
            <p className="text-muted">
              Yes, We are located on the 3rd floor, Police Sacco Plaza (Ngara
              road, Nairobi).
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>How secure is my money ?</h5>
            <p className="text-muted">
              All the money saved through Chumz is held in a trust account by
              our partner bank.
            </p>
            <p className="text-muted">
              Our partner bank is regulated by the Central Bank of Kenya (CBK)
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>CHUMZ SAVING PLANS</h3>
            <h5>What is quick save and how does it work ?</h5>
            <p className="text-muted">
              Quick save is a saving account that you set aside funds that you
              want to save but don’t yet have a goal in mind
            </p>
            <p className="text-muted">
              You can’t directly withdraw funds from quicksave. You can only
              move funds in quick save to a saving plan
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>What savings plans are available on chumz ?</h5>
            <p className="text-muted">
              We have most of the savings plans on pre set, so you can easily
              select one when creating a goal.
            </p>

            <p className="text-muted">
              However if you have a goal that's not in the preset plans you can
              create a custom plan
            </p>

            <p className="text-muted">
              Some of already preset plans include :-
            </p>

            <p className="text-muted">
              52 weeks challenge Rent Insurance Education Business
            </p>

            <p className="text-muted">
              Emergency Clear debt Eat out Furniture House
            </p>
            <p className="text-muted">
              Kitchen Ware Electronics Life event Movies Shoes
            </p>
            <p className="text-muted">
              Shopping Land Tech Gadgets Travel Vacation.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>How secure is my money ?</h5>
            <p className="text-muted">
              All the money saved through Chumz is held in a trust account by
              our partner bank.
            </p>
            <p className="text-muted">
              Our partner bank is regulated by the Central Bank of Kenya (CBK)
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>WITHDRAWALS</h3>
            <h5>When can I withdraw my funds?</h5>
            <p className="text-muted">
              You can withdraw money from your goals at any time
            </p>
            <h5>How do I withdraw ?</h5>
            <p className="text-muted">Tap on a goal</p>

            <p className="text-muted">Click on view more details</p>

            <p className="text-muted">Click on withdraw icon</p>

            <p className="text-muted">
              Withdrawal partial or the full amount for that goal
            </p>

            <p className="text-muted">
              You will get the funds in your M-pesa in less than 10 minutes
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>FEES</h3>
            <h5>How much does it cost ?</h5>
            <p className="text-muted">Chumz is free to use.</p>
            <p className="text-muted">
              no monthly charge, no maintenance cost, no nothing
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>MORE QUESTIONS</h3>
            <p className="text-muted">
              If you have more question email us info@moneto.co.ke
            </p>
          </Col>
        </Row>
      </Container>
      <Contacts />
    </section>
  );
};

export default Faqs;
