import React from "react";
import Goals from "./Goals";
import Hero from "./Hero";
import CardSection from "./CardSection";
import Groups from "./Groups";
import LeaderBoard from "./LeaderBoard";

const Body = () => {
  return (
    <>
      <Hero />
      <Goals />
      <CardSection />
      <Groups />
      <LeaderBoard />
    </>
  );
};

export default Body;
