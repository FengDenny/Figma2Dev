import React from 'react';
import Hero from '../component/Hero/Hero';
import Banner from '../component/Banner/Banner';
import Card from '../component/Card/Card';
import Service from '../component/Service/Service';
import Numbers from '../component/Numbers/Numbers';
import Blog from '../component/Blog/Blog';
import Testimonials from '../component/Testimonials/Testimonials';

export default function home() {
  return (
    <main>
      <Hero />
      <Banner />
      <Card />
      <Service />
      <Numbers />
      <Blog />
      <Testimonials />
    </main>
  );
}
