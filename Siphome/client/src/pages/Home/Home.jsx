import React from "react";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Update from "../../components/Update/Update";
import Services from "../../components/Services/Services";
import Testimonials from "../../components/Testimonials/Testimonials";
import Contact from "../../components/Contact/Contact";
export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Update />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
}
