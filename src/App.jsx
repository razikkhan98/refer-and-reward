// import { useState, useEffect } from 'react';

// import './App.scss';
// import '../src/styles/main.scss';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// // import '@fontsource/space-grotesk';
// // import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import SecondScreen from './Component/Pages/secondScreen/secondScreen';
// import RedeemAndEarn from './Component/Pages/RedeemEarn/redeemAndEarn';
// import Home from './Component/Pages/Home/home';
// import PlayEarn from './Component/Pages/palyEarn/playEarn';
// import Invitefriend from './Component/Common/Invitefriend/invitefriend';
// import Offer from './Component/Pages/Offers/offer';
// import Howitworksfirst from './Component/Common/HowItWorks/howitworkfirst';
// import Howitworks from './Component/Common/HowItWorks/howitworks';
// import MyRewardFirstScreen from './Component/Pages/myReward/myRewardScreen1';
// import MyRewardSecondScreen from './Component/Pages/myReward/myRewardScreen2';
// import MyRewardThirdScreen from './Component/Pages/myReward/myRewardScreen3';
// import Registration from './Component/Pages/RegistrationPage/registration';
// import Test from './Component/Common/test';
// function App() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration (ms)
//       once: false, // Whether animation should happen only once
//     });
//   }, []);
//   return (
//     <>
       
//        {/* <Home /> */}
//       {/* <SecondScreen /> */}
//       {/* <Invitefriend /> */}
//      {/* <Howitworksfirst /> */}
//       {/* <Howitworks /> */}
//       {/* <RedeemAndEarn /> */}
//       {/* <PlayEarn /> */}
     


//       {/* <Offer /> */}
//       {/* <MyRewardFirstScreen/>
//      <MyRewardSecondScreen />
//      <MyRewardThirdScreen /> */}
//       {/*
//        */}
//       {/*
//        */}
//       {/* <Registration/> */}

//       {/* <Test/> */}
//     </>
//   );
// }

// export default App;


// ==================================================================

import { useState, useEffect, useRef, useCallback } from 'react';
import './App.scss';
import '../src/styles/main.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Components
// import SecondScreen from './Component/Pages/secondScreen/secondScreen';
import RedeemAndEarn from './Component/Pages/RedeemEarn/redeemAndEarn';
// import Home from './Component/Pages/Home/home';
import PlayEarn from './Component/Pages/palyEarn/playEarn';
import Invitefriend from './Component/Common/Invitefriend/invitefriend';
import Offer from './Component/Pages/Offers/offer';
import Howitworks from './Component/Common/Howitworks/howitworks';
import Test from './Component/Common/test';
import MyReferralScreen1 from './Component/Pages/MyReferral/myReferralScreen1';
import MyReferralScreen2 from './Component/Pages/MyReferral/MyReferralScreen2';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [exitAnimation, setExitAnimation] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const offerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
      mirror: true,
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {
    if (activeIndex === 2) {
      setExitAnimation(false);
      setTimeout(() => AOS.refreshHard(), 100);
    } else if (activeIndex > 2) {
      setExitAnimation(true);
    }
  }, [activeIndex]);

 useEffect(() => {
  setTimeout(() => {
    AOS.refreshHard(); // ensures animations reset even if DOM changed
  }, 1000);
}, [activeIndex]);

  const handleWheel = useCallback(
    (e) => {
      if (transitioning) return;

      if (activeIndex === 5 && offerRef.current) {
        const el = offerRef.current;
        const { scrollTop, scrollHeight, clientHeight } = el;

        if (
          (e.deltaY > 0 && scrollTop + clientHeight < scrollHeight) ||
          (e.deltaY < 0 && scrollTop > 0)
        ) {
          return;
        }
      }

      let newIndex = activeIndex;
      if (e.deltaY > 0 && activeIndex < 5) {
        newIndex = activeIndex + 1;
      } else if (e.deltaY < 0 && activeIndex > 0) {
        newIndex = activeIndex - 1;
      }

      if (newIndex !== activeIndex) {
        setTransitioning(true);
        setTimeout(() => {
          setActiveIndex(newIndex);
          setTimeout(() => setTransitioning(false), 1000);
        }, 100);
      }
    },
    [activeIndex, transitioning],
  );

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  return (
    <div className="fixed-section-container">
      {[
        Test,
        Invitefriend,
        Howitworks,
        RedeemAndEarn,
        PlayEarn,
        Offer,
      ].map((Component, index) => {
        const isActive = index === activeIndex;
        const isOfferSection = index === 5; // Offer section index

        return (
          <div
            key={index}
            className={`section ${isActive ? 'active' : ''}`}
            ref={isOfferSection ? offerRef : null}
            style={{
              overflowY: isOfferSection && isActive ? 'auto' : 'hidden',
            }}
          >
            {index === 2 ? (
              <Howitworks   
                isActive={isActive && !exitAnimation}
                isExiting={exitAnimation}
              />
            ) : (
              <div data-aos="fade-up">
                <Component />
              </div>
            )}
            
          </div>
        );
      })}
    </div>
  );
}

export default App;
