import React from "react";
import Goals from "./Goals";
import Hero from "./Hero";
import CardSection from "./CardSection";
import Groups from "./Groups";
import LeaderBoard from "./LeaderBoard";
import CuratedSaving from "./CuratedSaving";
import Testimonial from "./Testimonial";

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
    </>
  );
};

export default Body;
