import React from "react";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Pricing from "../Pricing/Pricing";
import Solutions from "../Solutions/Solutions";
import Subscribe from "../Subscribe/Subscribe";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Solutions></Solutions>
      <About></About>
      <Pricing></Pricing>
      <Testimonial></Testimonial>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
};

export default Home;
