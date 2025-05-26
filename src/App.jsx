import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';
import '../src/styles/main.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import '@fontsource/space-grotesk';
// import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SecondScreen from './Component/Pages/secondScreen/secondScreen';
import RedeemAndEarn from './Component/Pages/RedeemEarn/redeemAndEarn';
import Home from './Component/Pages/Home/home';
import PlayEarn from './Component/Pages/palyEarn/playEarn';
import Invitefriend from './Component/Common/Invitefriend/invitefriend';
import Offer from './Component/Pages/Offers/offer';
import Howitworksfirst from './Component/Common/HowItWorks/howitworkfirst';
import Howitworks from './Component/Common/HowItWorks/howitworks';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <Home />
      <SecondScreen />
      <Invitefriend />
      <Howitworksfirst />
      <Howitworks />
      <RedeemAndEarn />
      <PlayEarn />
      <Offer />
    </>
  );
}

export default App;
