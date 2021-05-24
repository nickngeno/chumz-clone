import React from "react";
import { Container, Card, CardGroup } from "react-bootstrap";
import  award from "../images/award.0cf9a246.svg"
import  bell from "../images/bell.86facacc.svg"
import  report from "../images/barchart.6c44238f.svg"
import  tracking from "../images/calendar.b3d6e64c.svg"
import  groups from "../images/users.fcd0300a.svg"
import  crosshair from "../images/crosshair.1c802f70.svg"



const CardSection = () => {
  return (
    <section className="new-section">
      <Container fluid style={{backgroundColor:"yellow"}}>
        <CardGroup>
          <Card className="text-center card-item p-5">
            <Card.Body>
            <Card.Img src={crosshair} style={{width:"40px"}} />
              <Card.Title>Goals</Card.Title>
              <Card.Text>
                Create, track and achieve your savings goals. You can create a
                goal to save for anything you wish to save for.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="text-center card-item p-5">
            <Card.Body>
            <Card.Img src={bell} style={{width:"40px"}} />
              <Card.Title>Reminder</Card.Title>
              <Card.Text>
              Never lose track of your savings. Get notifications reminding you to save either daily, weekly, monthly. The choice is yours.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="text-center card-item p-5">
            <Card.Body>
            <Card.Img src={report} style={{width:"40px"}} />
              <Card.Title>Reports</Card.Title>
              <Card.Text>
              See your saving performance over time. Get detailed well designed reports along with suggestions for improvements.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card className="text-center card-item p-5">
            <Card.Body>
            <Card.Img src={groups} style={{width:"40px"}} />
              <Card.Title>Groups</Card.Title>
              <Card.Text>
              Create saving groups and save together together with you family, friends and colleagues. Save for any goal you wish for.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="text-center card-item p-5">
            <Card.Body>
            <Card.Img src={tracking} style={{width:"40px"}} />
              <Card.Title>Tracking</Card.Title>
              <Card.Text>
              Set amounts you wish to save and how you wish to be saving. The app will help you track your goals on an easy to use interface.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="text-center card-item p-5">
            <Card.Body>
            <Card.Img src={award} style={{width:"40px"}} />
              <Card.Title>Leader boards</Card.Title>
              <Card.Text>
              See how you compare with the rest of the Chumz community in terms of the goals achieved and how much you save
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </section>
  );
};

export default CardSection;
