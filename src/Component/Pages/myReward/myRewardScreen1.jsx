import React from 'react';
// import component
import Navbar from '../../Common/Navbar/navbar';

// import slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import images
import metero from '../../../assets/secondScreen/metero.svg';
import tiltship from '../../../assets/secondScreen/tillship1.svg';
import star from '../../../assets/secondScreen/star.svg';
import moneypocket from '../../../assets/MyRewards/moneypkt.svg';
import shootingmeteor from '../../../assets/MyRewards/shotmeteor.svg';
import rewardRocket from '../../../assets/MyRewards/rewardRocket.svg';
import longArrow from '../../../assets/MyRewards/longArrow.svg';
import flowPlanet1 from '../../../assets/MyRewards/flowplnt1.svg';
import moverocket from '../../../assets/MyRewards/moverocket.svg';
import clouds from '../../../assets/MyRewards/clouds.svg';

const MyRewardFirstScreen = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  // const discount = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   initialSlide: 0,
  //   centerPadding: '60px',
  // };
  const discount = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2.5, // Show 3.5 slides
  slidesToScroll: 1,
  centerMode: true,
  initialSlide: 2,
  centerPadding: '150px', // Adjust this to control the partial slide visibility
};

  return (
    <>
      <section className="hero-section  position-relative">
        <Navbar />
        <div className="container">
          {/* <div className="row justify-content-between px-3">
            <div className="col-lg-3"></div>
            <div className="col-lg-4 d-flex justify-content-end px-0">
              <div className="till-ship w-75 position-relative tilte-shadow rounded-3">
                <img
                  className="position-absolute till-ship-img"
                  src={tiltship}
                  alt="tiltship"
                />
                <div className="py-2 offset-2 text-white d-flex justify-content-evenly align-items-center">
                  <span className="montserrat-bold font-14 montserrat-bold till-ship-border-color pe-3 z-1 position-relative">
                    300
                    <img className="my-1 mx-2" src={metero} alt="metero" />
                    <span className="font-14 montserrat-medium">Meteors</span>
                  </span>
                  <span className="font-14 montserrat-semibold">
                    1
                    <img className="mx-1" src={star} alt="star" />
                    <span className="space-grotesk-medium">star</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex my-reward-cards gap-4 mt-3 px-0">
            <div className="w-50 myreward-card-1 px-4 pb-4 rounded-4">
              <h2 className="font-24 montserrat-bold text-white mb-1 mt-3 pt-3">
                My Collections
              </h2>
              <p className="font-14 montserrat-medium text-white">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </p>
              <div className="row justify-content-around">
                <div className="col-lg-4 rounded-4 background-light-white position-relative px-2 pb-1 pt-2 mt-4">
                  <span className="font-46 montserrat-semibold text-blue ms-1">
                    X
                  </span>{' '}
                  <span className="text-blue font-16 montserrat-semibold ms-1">
                    Stars
                  </span>{' '}
                  <img
                    className="position-absolute w-50 myreward-star"
                    src={star}
                    alt="star"
                  />
                </div>
                <div className="col-lg-6 rounded-4 background-light-white position-relative px-2 pb-1 pt-2 mt-4">
                  <span className="font-46 montserrat-semibold text-blue ms-1">
                    X
                  </span>{' '}
                  <span className="text-blue font-16 montserrat-semibold ms-1">
                    Cashbacks
                  </span>{' '}
                  <img
                    className="position-absolute w-25 myreward-pocket"
                    src={moneypocket}
                    alt="moneypocket"
                  />
                </div>
                <div className="col-lg-6 d-flex position-relative justify-content-between rounded-4 background-light-white  px-2 pb-1 pt-4 mt-4">
                  <div className="d-inline">
                    <span className="font-46 montserrat-semibold text-blue ms-1">
                      X
                    </span>{' '}
                    <span className="text-blue font-16 montserrat-semibold ms-1">
                      Meteors
                    </span>{' '}
                  </div>
                  <img
                    className="w-25 position-absolute myreward-shotingmeteor"
                    src={shootingmeteor}
                    alt="star"
                  />
                </div>
                <div className="col-lg-4 rounded-4 background-light-white px-2 pb-1 pt-4 mt-4">
                  <span className="font-46 montserrat-semibold text-blue ms-1">
                    X
                  </span>{' '}
                  <span className="text-blue font-16 montserrat-semibold ms-1">
                    Vouchers
                  </span>{' '}
                </div>
              </div>
            </div>
            <div className="w-50 myreward-card-2 px-4 pb-4 rounded-4">
              <h2 className="font-24 montserrat-bold text-white mb-1 mt-3 pt-3">
                Earn More
              </h2>
              <p className="font-14 montserrat-medium text-white">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </p>
              <label
                className="d-block font-14 montserrat-medium text-white mb-1"
                htmlFor="Invite Code"
              >
                Invite Code
              </label>
              <input
                className="background-light-white border-0 rounded-3 w-100 py-2"
                type="text"
                name=""
                id=""
              />
              <label
                className="d-block font-14 montserrat-medium text-white mt-4 mb-1"
                htmlFor="Invite Link"
              >
                Invite Link
              </label>
              <input
                className="background-light-white border-0 rounded-3 w-100 py-2"
                type="text"
                name=""
                id=""
              />
              <div className="d-flex justify-content-between mt-4">
                <button className="px-4 font-16 montserrat-semibold width-48 py-2 bg-white text-blue border-blue rounded-3">
                  Play & Earn
                </button>
                <button className="px-4 font-16 montserrat-semibold width-48 py-2 text-white background-text-blue rounded-3">
                  Invite a Friend
                </button>
              </div>
            </div>
          </div> */}

          {/* <div className="d-flex background-text-blue rounded-4 overflow-hidden">
            <div className="width-12">
              <h3 className="font-20 montserrat-semibold text-white">
                Your Reward Journey So Far
              </h3>
              <img className="w-50" src={rewardRocket} alt="" />
            </div>
            <div>
              <Slider {...settings}>
                <div className="background-light-white-2 border-radius-12 text-center pt-2 pb-3 ">
                  <h4 className="font-14 montserrat-semibold text-blue">
                    Level 1
                  </h4>
                  <img className="width-60" src={flowPlanet1} alt="" />
                  <h4 className="font-14 montserrat-regular">1000 Meteors</h4>
                  <button className="background-text-blue border-0 border-radius-8 font-12 px-5 py-2 mx-3 montserrat-semibold text-white">
                    Claim
                  </button>
                </div>
                <div className="background-light-white-2 border-radius-12 text-center pt-2 pb-3 ">
                  <h4 className="font-14 montserrat-semibold text-blue">
                    Level 1
                  </h4>
                  <img className="width-60" src={flowPlanet1} alt="" />
                  <h4 className="font-14 montserrat-regular">1000 Meteors</h4>
                  <button className="background-text-blue border-0 border-radius-8 font-12 px-5 py-2 mx-3 montserrat-semibold text-white">
                    Claim
                  </button>
                </div>
                <div className="background-light-white-2 border-radius-12 text-center pt-2 pb-3 ">
                  <h4 className="font-14 montserrat-semibold text-blue">
                    Level 1
                  </h4>
                  <img className="width-60" src={flowPlanet1} alt="" />
                  <h4 className="font-14 montserrat-regular">1000 Meteors</h4>
                  <button className="background-text-blue border-0 border-radius-8 font-12 px-5 py-2 mx-3 montserrat-semibold text-white">
                    Claim
                  </button>
                </div>
              </Slider>
            </div>
          </div> */}
          {/* <div className="d-flex justify-content-between py-3 pe-4 background-text-blue rounded-4 overflow-hidden position-relative">
            <div className="width-15">
              <h3 className="font-20 montserrat-semibold text-white ms-3 w-50">
                Your Reward Journey So Far
              </h3>
              <img className='position-absolute reward-moving-rkt' src={moverocket} alt="moverocket" />
              <img className="width-10 position-absolute bottom-0 " src={clouds} alt="clouds" />
            </div>
            <div className="width-80">
              <Slider className='reward-slider' {...settings}>
                {[1,2,3,4]?.map((item)=>
                <div className="background-light-white-2 border-radius-12 text-center  pt-2 pb-3">
                  <h4 className="font-14 montserrat-semibold text-blue">
                    Level 1
                  </h4>
                  <img className="width-60 mx-auto" src={flowPlanet1} alt="" />
                  <h4 className="font-14 montserrat-regular">1000 Meteors</h4>
                  <button className="background-text-blue border-0 border-radius-8 font-12 px-5 py-2 mx-3 montserrat-semibold text-white">
                    Claim
                  </button>
                </div>
                 )}
           
                
              </Slider>
            </div>
          </div> */}

          {/* Discount and exclusive cards */}
          <div className="reward-discount border-blue shadow-lg rounded-4 p-4">
            <h2 className="font-18 space-grotesk-bold text-blue mb-1">
              Discount Codes
            </h2>
            <p className="font-14 montserrat-medium text-blue">
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </p>
            <div className="slider-container">
              {/* <Slider className=" excl-discount" {...discount}>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                <div className="d-flex excl-discount-card p-3 border-radius-8 background-text-blue position-relative  overflow-hidden me-3"> */}
                <Slider className="excl-discount" {...discount}>
  {[1, 2, 3, 4, 5, 6].map((num) => (
    <div className="d-flex excl-discount-card p-3 border-radius-8 background-text-blue position-relative overflow-hidden me-3">
                    <span className="p-4 border-radius-8 bg-white"></span>
                    <div className="text-white ms-3 me-5 pe-5">
                      <h2 className="font-14 mb-0 montserrat-medium">
                        Flat{' '}
                        <span className="font-16 montserrat-bold">10% Off</span>{' '}
                        on
                      </h2>
                      <h2 className="font-14 mb-0 montserrat-medium">
                        Sales Ninja
                      </h2>
                    </div>
                    <div className="position-absolute top-0 end-0 background-light-cream px-3 py-0 discount-border">
                      7 d
                    </div>
                </div>
                ))}
               
              </Slider>
            </div>
          </div>
        </div>
        {/* <div className="myreward-bottom mt-5 text-center">
          <h2 className="m-0 font-32 space-grotesk-bold text-blue">
            Your Reward Journey So Far
          </h2>
          <img className='offset-3' src={longArrow} alt="longArrow" />
        </div>
        <div className="position-absolute bottom-0 start-0">
          <img className='width-60' src={rewardRocket} alt="footerrocket" />
        </div> */}
      </section>
    </>
  );
};

export default MyRewardFirstScreen;
