import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../src/styles/main.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import '@fontsource/space-grotesk';
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Component/Pages/Home/home';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      once: false,     // Whether animation should happen only once
    });
  }, []);
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App;
