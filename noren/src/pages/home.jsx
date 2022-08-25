import React from 'react';
import Hero from '../component/Hero/Hero';
import Banner from '../component/Banner/Banner';
import Card from '../component/Card/Card';
import ThreeSteps from '../component/ThreeSteps/ThreeSteps';
import Numbers from '../component/Numbers/Numbers';
import Blog from '../component/Blog/Blog';

export default function home() {
  return (
    <main>
      <Hero />
      <Banner />
      <Card />
      <ThreeSteps />
      <Numbers />
      <Blog />
    </main>
  );
}
