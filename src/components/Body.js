import React from "react";
import Goals from "./Goals";
import Hero from "./Hero";
import CardSection from "./CardSection";
import Groups from "./Groups";
import LeaderBoard from "./LeaderBoard";
import CuratedSaving from "./CuratedSaving";
import Testimonial from "./Testimonial";
import CallToAction from "./CallToAction";
import Contacts from "./Contacts";


const Body = () => {
  return (
    <>
      <Hero />
      <Goals />
      <CardSection />
      <Groups />
      <LeaderBoard />
      <CuratedSaving />
      <Testimonial />
      <CallToAction/>
      <Contacts />
    </>
  );
};

export default Body;
