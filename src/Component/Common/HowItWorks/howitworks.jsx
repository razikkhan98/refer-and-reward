import React, { useEffect, useRef, useState } from "react";
import './howitworks.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Robortgif from '../../../assets/HowItWorks/gif-hiw.gif';
import Planet1 from '../../../assets/HowItWorks/HIW-planet-1.svg';
import Planet2 from '../../../assets/HowItWorks/HIW-planet-2.svg';
import Planet3 from '../../../assets/HowItWorks/HIW-planet-3.svg';
import Rocketgif from '../../../assets/HowItWorks/racketgif.gif';

const Howitworks = ({ isActive, isExiting }) => {
  const sectionRef = useRef(null);
  const [step, setStep] = useState(0);
  const [robotClicked, setRobotClicked] = useState(false);
  const [showSteps, setShowSteps] = useState(false);
  const [showExit, setShowExit] = useState(false);

  // Initialize AOS once
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  // Steps animation logic
  useEffect(() => {
    if (showSteps) {
      const timeouts = [
        setTimeout(() => setStep(1), 3000),
        setTimeout(() => setStep(2), 4000),
        setTimeout(() => setStep(3), 5000),
        setTimeout(() => setStep(4), 6000),
        setTimeout(() => setStep(5), 7000),
        setTimeout(() => setStep(6), 8000),
      ];
      return () => timeouts.forEach(clearTimeout);
    }
  }, [showSteps]);

  // Exit animation and AOS refresh on active/exiting changes
  useEffect(() => {
    if (isExiting) {
      setShowExit(true);
    } else if (isActive) {
      setShowExit(false);
      setTimeout(() => AOS.refreshHard(), 100);
    }
  }, [isActive, isExiting]);
useEffect(() => {
  if (isExiting) {
    setShowExit(true);
  } else if (isActive) {
    // Reset all animation states when user scrolls back up
    setShowExit(false);
    setRobotClicked(false);
    setShowSteps(false);
    setStep(0);
    setTimeout(() => AOS.refreshHard(), 10);
  }
}, [isActive, isExiting]);

  const handleRobotClick = () => {
    setRobotClicked(true);
    setTimeout(() => {
      setShowSteps(true);
    }, 1000);
  };

  return (
    
    <section
      ref={sectionRef}
      data-aos= "zoom-in-up"

      className={`section-howitworks text-center ${showExit ? 'zoom-down-out' : ''}`}
      // {...(!showExit ? { 'data-aos': 'zoom-in-up' } : {})}
    >
      <div className="container position-relative h-100">
        <h2 className="space-grotesk-bold font-40 text-black-heading mb-5">
          How It Works
        </h2>

        {!showSteps && (
          <div
            className={`howitwork-first d-flex h-100 justify-content-center align-items-center ${robotClicked ? 'robot-exit' : ''}`}
            onClick={handleRobotClick}
          >
            <img className="robort-image" src={Robortgif} alt="Robot" />
          </div>
        )}

        {showSteps && (
          <div className="howitwork-second" data-aos="zoom-in-up">
            <img src={Rocketgif} alt="Rocket" className="rocket-gif mb-4" />

            <div className="row text-center position-relative inner-row-index">
              <div className={`col-4 howitworks-step ${step >= 1 ? 'visible' : ''}`}>
                <h6 className="montserrat-bold font-20 mb-22">Launch Your Cosmic Journey</h6>
                <p className="montserrat-regular font-18">
                  Start your adventure by signing up and setting course for your first galaxy.
                  Every star you navigate brings you closer to exciting rewards. Ready to explore?
                </p>
              </div>

              <div className={`col-4 howitworks-step ${step >= 3 ? 'visible' : ''}`}>
                <img src={Planet2} className="planet-width mb-3" alt="Planet 2" />
              </div>

              <div className={`col-4 howitworks-step ${step >= 5 ? 'visible' : ''}`}>
                <h6 className="montserrat-bold font-20 mb-22">Discover New Worlds & Unlock Rewards</h6>
                <p className="montserrat-regular font-18">
                  Every galaxy you explore holds new treasures!
                  Collect points along the way and redeem them for exclusive rewards.
                </p>
              </div>

              <div className="col-12 my-4">
                <div className={`timeline-dot ${step >= 1 ? 'visible' : ''}`} />
                <div className={`timeline-dot ${step >= 2 ? 'visible' : ''}`} />
                <div className={`timeline-dot ${step >= 3 ? 'visible' : ''}`} />
                <div className="timeline-border" />
              </div>

              <div className={`col-4 howitworks-step ${step >= 2 ? 'visible' : ''}`}>
                <img src={Planet1} className="planet-width mt-3" alt="Planet 1" />
              </div>

              <div className={`col-4 howitworks-step ${step >= 4 ? 'visible' : ''}`}>
                <h6 className="montserrat-bold font-20 mb-22">Invite a Friend & Travel Together</h6>
                <p className="montserrat-regular font-18">
                  Space expeditions are better with a co-pilot! Invite friends and earn points together.
                </p>
              </div>

              <div className={`col-4 howitworks-step ${step >= 6 ? 'visible' : ''}`}>
                <img src={Planet3} className="planet-width mt-3" alt="Planet 3" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Howitworks;
