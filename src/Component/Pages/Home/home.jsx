import React from 'react';
import Herosection from '../../Common/HeroBanner/herosection';
import Navbar from '../../Common/Navbar/navbar';
import PlanetSlider from '../../Common/PlanetSlider/planetSlider';

const Home = () => {
  return (
    <section className="hero-section  position-relative" id="">
      <Navbar />
      <Herosection />
      <PlanetSlider />
    </section>
  );
};

export default Home;
