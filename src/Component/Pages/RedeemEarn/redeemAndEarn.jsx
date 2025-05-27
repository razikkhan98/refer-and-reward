import React from 'react';

// imports images
import metero from '../../../assets/secondScreen/metero.svg';
import redeembox from '../../../assets/redeemEarn/redembox.svg';
import leftcloud from '../../../assets/redeemEarn/leftcloud.svg';
import rocket from '../../../assets/redeemEarn/moverokt.svg';
import coins from '../../../assets/redeemEarn/coinsclt.svg';

const RedeemAndEarn = () => {
  return (
    <section className="hero-section d-flex justify-content-center align-items-center px-5">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="redeem-box col-lg-7 position-relative p-5 bg-opacity-25 bg-light rounded-4"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
          >
            <div
              className="redeem-circle-sect position-absolute"
              data-aos="fade-left"
              data-aos-offset="600"
              data-aos-easing="ease-in-sine"
            >
              <div className="redeem-circle gift-circle-sec redeem-shadow position-relative d-flex justify-content-center align-items-center">
                <img
                  className="position-absolute redem-box"
                  src={redeembox}
                  alt="redeembox"
                />
                <img
                  className="position-absolute left-cloud start-0 "
                  src={leftcloud}
                  alt="redeembox"
                />

                <div className="redeem-circle-cont text-center">
                  <h2 className="text-white mb-0 font-size-24 ms-5 ps-3">
                    Redeem
                  </h2>
                  <div className="text-white d-flex justify-content-center align-items-center ms-5 ps-4">
                    <span className="text-light-yellow font-size-12 montserrat-semibold">
                      150
                    </span>
                    <img className="mx-1" src={metero} alt="metero" />
                    <span className="font-size-14 montserrat-medium">
                      Total Meteors
                    </span>
                  </div>
                </div>
                <img
                  className="position-absolute launch-rocket"
                  src={rocket}
                  alt="rocket"
                />
              </div>
            </div>
            <p className="text-center font-32 space-grotesk-medium px-5 py-4 mb-0 text-dark-blue lh-sm">
              Earn more with every action and redeem for real rewards on your
              journey through the stars
            </p>

            <div
              className="earnmore-circle-sect  position-absolute"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="redeem-circle playearn-circle-sec earn-shadow position-relative d-flex justify-content-center align-items-center">
                <img
                  className="position-absolute coins-box"
                  src={coins}
                  alt="coins"
                />
                <img
                  className="position-absolute left-cloud start-0 "
                  src={leftcloud}
                  alt="redeembox"
                />

                <div className="earnmore-circle-cont text-center">
                  <h2 className="text-white mb-0 font-size-24 ms-5 ps-3">
                    Earn More
                  </h2>
                  <div className="text-white d-flex justify-content-center align-items-center ms-5 ps-4">
                    <span className="text-light-yellow font-size-12 montserrat-semibold">
                      150
                    </span>
                    <img className="mx-1" src={metero} alt="metero" />
                    <span className="font-size-14 montserrat-medium">
                      Total Meteors
                    </span>
                  </div>
                </div>
                <img
                  className="position-absolute launch-rocket"
                  src={rocket}
                  alt="rocket"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedeemAndEarn;
