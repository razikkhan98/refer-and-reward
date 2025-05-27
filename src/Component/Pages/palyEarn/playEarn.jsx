import React, { useState } from 'react';
import spinwheel from '../../../assets/playEarn/spinwheel.svg';

const PlayEarn = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section className="pay-earn-section">
      <div className="pay-earn-content"
      data-aos="zoom-in-up"
       data-aos-delay="300"
      data-aos-duration="600"
      >
        <div className="container h-100 pb-5">
          <div className="h-100 d-flex align-items-end position-relative">
            <img
              className={`position-absolute play-earn-img ${hoveredCard ? 'play-img-eft-act' : 'play-img-eft'} mt-5`}
              src={spinwheel}
              alt="spinwheel"
            />
            <div className="row justify-content-between p-4 rounded-4"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="500"
            >
              {/* First Play & Win section */}
              <div className="col-lg-2 text-center ms-3 my-3">
                <h4 className="mt-4 pt-1 mb-2 font-size-28 space-grotesk-bold text-uppercase text-dark-blue">
                  Play & Win
                </h4>
                <p className="font-size-18 montserrat-semibold text-dark-blue">
                  Enter the Game Zone and get chance to earn more points!!
                </p>
              </div>

              <div
                className="col-lg-3 hover-card pb-1 bg-light text-center rounded-4 my-3"
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                <h3 className="mt-4 pt-1 mb-2 text-uppercase font-size-24 space-grotesk-bold text-dark-blue">
                  Spin The Wheel
                </h3>
                <p className="font-size-16 montserrat-medium text-blue">
                  Spin and win bonus points, perks, and exclusive rewards. Give
                  it a go now!
                </p>
                <button className="btn background-text-blue text-white font-size-16 montserrat-medium rounded-5 mb-4 px-4">
                  Play Now
                </button>
              </div>

              <div
                className="col-lg-3 hover-card pb-1 bg-light text-center rounded-4 my-3"
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
              >
                <h3 className="mt-4 pt-1 mb-2 text-uppercase font-size-24 space-grotesk-bold text-dark-blue">
                  Spin The Wheel
                </h3>
                <p className="font-size-16 montserrat-medium text-blue">
                  Spin and win bonus points, perks, and exclusive rewards. Give
                  it a go now!
                </p>
                <button className="btn background-text-blue text-white font-size-16 montserrat-medium rounded-5 mb-4 px-4">
                  Play Now
                </button>
              </div>

              <div
                className="col-lg-3 hover-card pb-1 bg-light text-center rounded-4 me-3 my-3"
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
              >
                <h3 className="mt-4 pt-1 mb-2 text-uppercase font-size-24 space-grotesk-bold text-dark-blue">
                  Spin The Wheel
                </h3>
                <p className="font-size-16 montserrat-medium text-blue">
                  Spin and win bonus points, perks, and exclusive rewards. Give
                  it a go now!
                </p>
                <button className="btn background-text-blue text-white font-size-16 montserrat-medium rounded-5 mb-4 px-4">
                  Play Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayEarn;
