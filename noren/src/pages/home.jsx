import React from 'react';
import Hero from '../component/Hero/Hero';
import Banner from '../component/Banner/Banner';
import Card from '../component/Card/Card';
import Service from '../component/Service/Service';
import Accomplishments from '../component/Accomplishments/Accomplishments';
import Blog from '../component/Blog/Blog';
import Testimonials from '../component/Testimonial/Testimonials';
import Contact from '../component/Contact/Contact';

export default function home() {
  return (
    <main>
      <Hero />
      <Banner />
      <Card />
      <Service />
      <Accomplishments />
      <Blog />
      <Testimonials />
      <Contact />
    </main>
  );
}
