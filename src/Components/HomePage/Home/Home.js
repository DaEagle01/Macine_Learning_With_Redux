import React from "react";
import About from "../About/About";
import Hero from "../Hero/Hero";
import Pricing from "../Pricing/Pricing";
import Solutions from "../Solutions/Solutions";
import Subscribe from "../Subscribe/Subscribe";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Solutions></Solutions>
      <About></About>
      <Pricing></Pricing>
      <Testimonial></Testimonial>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
