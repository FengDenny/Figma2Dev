import React from "react";
import Hero from "../../component/Hero/Hero";
import Benefits from "../../component/Benefit/Benefits";
import Pricing from "../../component/Pricing/Pricing";
import Testimonials from "../../component/Testimonials/Testimonials";
import Compatibility from "../../component/Compatibility/Compatibility";

export default function Home() {
  return (
    <div>
      <Hero />
      <Benefits />
      <Pricing />
      <Testimonials />
      <Compatibility />
    </div>
  );
}
