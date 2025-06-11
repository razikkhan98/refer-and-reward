// import React from "react";
import React, { useEffect, useState } from "react";
import './howitworks.scss';
import Planet1 from '../../../assets/HowItWorks/HIW-planet-1.svg';
import Planet2 from '../../../assets/HowItWorks/HIW-planet-2.svg';
import Planet3 from '../../../assets/HowItWorks/HIW-planet-3.svg';
import Rocketgif from '../../../assets/HowItWorks/racketgif.gif';

const Howitworks = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setStep(1), 2000),
      setTimeout(() => setStep(2), 4000),
      setTimeout(() => setStep(3), 6000),
    ];
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="section-howitworks d-flex flex-column text-center justify-content-center align-items-center">
      <div className="container position-relative  ">
        <h2 className="space-grotesk-bold font-40 text-black-heading">How It Works</h2>

        <img src={Rocketgif} alt="Rocket" className="rocket-gif" />
        <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="5000" className="row text-center position-relative inner-row-index">
          {/* Column 1 */}
          <div className={`col-4 howitworks-step d-flex flex-column align-items-center ${step >= 1 ? 'visible' : ''}`}>
            <div className="text-center px-3 mb-16">
              <h6 className="montserrat-bold font-20 mb-22">Launch Your Cosmic Journey</h6>
              <p className="montserrat-regular font-18">
                Start your adventure by signing up and setting course for your first galaxy.
                Every star you navigate brings you closer to exciting rewards. Ready to explore?
              </p>
            </div>
          </div>
          <div className={`col-4 howitworks-step d-flex flex-column align-items-center justify-content-end ${step >= 2 ? 'visible' : ''}`}>
                <img src={Planet2} className="planet-width mb-5" alt="planet 2" />
          </div>
          <div className={`col-4 howitworks-step d-flex flex-column align-items-center justify-content-center ${step >= 3 ? 'visible' : ''}`}>
            <div className="text-center px-3 mb-16">
              <h6 className="montserrat-bold font-20 mb-22">Discover New Worlds & Unlock Rewards</h6>
              <p className="montserrat-regular font-18">
                Every galaxy you explore holds new treasures!
                Collect points along the way and redeem them for exclusive rewards.
                The final cosmic gem awaits, keep exploring!
              </p>
            </div>
        </div>
        <div className="col-12">
            <div className={`timeline-dot howitworks-step bg-dark rounded-circle  ${step >= 1 ? 'visible' : ''}`} />
            <div className={`timeline-dot howitworks-step bg-dark rounded-circle ${step >= 2 ? 'visible' : ''}`} />
            <div className={`timeline-dot howitworks-step bg-dark rounded-circle ${step >= 3 ? 'visible' : ''}`} />
            <div className="timeline-border" />

        </div>
        <div className={`col-4 howitworks-step d-flex flex-column align-items-center justify-content-start ${step >= 1 ? 'visible' : ''}`}>
            <img src={Planet1} className="planet-width mt-3" alt="planet 1" />
        </div>
          <div className={`col-4 howitworks-step d-flex flex-column align-items-center position-relative ${step >= 2 ? 'visible' : ''}`}>
                <div className="text-center px-3 mt-32">
              <h6 className="montserrat-bold font-20 mb-22">Invite a Friend & Travel Together</h6>
              <p className="montserrat-regular font-18">
                Space expeditions are more thrilling with a co-pilot!
                Invite a friend to join the journey, and you'll both earn points
                as you explore the universe together.
              </p>
            </div>
          </div>
          <div className={`col-4 howitworks-step d-flex flex-column align-items-center justify-content-start ${step >= 3 ? 'visible' : ''}`}>
            <img src={Planet3} className="planet-width mt-3" alt="planet 3" />            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Howitworks;
