// import React from 'react';

// import blue from '../../assets/HomePlanets/blue.svg';

// const Test = () => {
//   return (
//     <section>
//       <div className="screen-first height-100vh bg-primary">
//         <div className="header py-5 text-center">header</div>
//         <div className="bottom text-center my-5 py-5" >
//           <img className="width-20 mt-5 pt-5" src={blue} alt="" />
//         </div>
//       </div>
//       <div className="screen-second height-100vh bg-danger">
//         <div className="row h-100">
//           <div className="col-lg-5 d-flex justify-content-center align-items-center">
//             section left
//           </div>
//           <div className="col-lg-5 d-flex justify-content-center align-items-center">
//             section right
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Test;

import React, { useRef, useEffect, useState } from 'react';
import Navbar from './Navbar/navbar';
import Herosection from './HeroBanner/herosection';
import PlanetSlider from './PlanetSlider/planetSlider';
import SecondScreen from '../Pages/secondScreen/secondScreen';
// import images
import metero from '../../assets/secondScreen/metero.svg';
import tiltship from '../../assets/secondScreen/tillship1.svg';
import star from '../../assets/secondScreen/star.svg';
import borderstar from '../../assets/secondScreen/bdrstar.svg';
import prgicon from '../../assets/secondScreen/prgicon.svg';
import leftarrow from '../../assets/secondScreen/leftarrow.svg';
import longarrow from '../../assets/secondScreen/lngarw.svg';
import rocket from '../../assets/secondScreen/rocket.svg';
import astronot from '../../assets/secondScreen/astronot.svg';
import alenship from '../../assets/secondScreen/alienship.svg';

import pathway from '../../assets/secondScreen/pathway.svg';
import blue from '../../assets/HomePlanets/blue.svg';
import green from '../../assets/HomePlanets/green.svg';
import purple from '../../assets/HomePlanets/purple.svg';
import yellow from '../../assets/HomePlanets/yellow.svg';

//
import centerPlanet1 from '../../assets/HomePlanets/purple.svg';
import centerPlanet2 from '../../assets/HomePlanets/yellow.svg';
import centerPlanet3 from '../../assets/HomePlanets/green.svg';
import centerPlanet4 from '../../assets/HomePlanets/blue.svg';
import planetRing from '../../assets/HomePlanets/rings.svg';

const images = [centerPlanet1, centerPlanet2, centerPlanet3, centerPlanet4];

const Test = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [showSecScr, setShowSecScr] = useState(true);
    const [SecScrAnimt, setSecScrAnimt] = useState(false);

    // --------------------------------------------------
    const [currentIndex, setCurrentIndex] = useState(0);
    const [rotation, setRotation] = useState(0);
    const [ringRotation, setRingRotation] = useState(0);
    const [direction, setDirection] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);

    // ==========
    // Function
    // ==========

    const handleToggle = () => {
        setSecScrAnimt(true);
    };

    const handleAnimationEnd = () => {
        setShowSecScr((prev) => !prev);
        setSecScrAnimt(false);
    };

    // ======================================================
    const [showModal, setShowModal] = useState(true);

    const handleClose = () => setShowModal(false);
    const handleOpen = () => setShowModal(true);

    //  Animation Functionality Code
    const leftBoxRef = useRef(null);
    const rightBoxRef = useRef(null);
    const b2Ref = useRef(null);

    // State for positions of left and right boxes
    const [leftBoxLeft, setLeftBoxLeft] = useState('0%'); // initial position for left box
    const [rightBoxLeft, setRightBoxLeft] = useState('0%'); // initial position for right box
    const [BoxOpacity, setBoxOpacity] = useState(1);
    const [sectionOpacity, setsectionOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            if (b2Ref.current) {
                const b2Top = b2Ref.current.offsetTop;
                const b2Height = b2Ref.current.offsetHeight;
                const scrollY = window.scrollY || window.pageYOffset;
                const windowHeight = window.innerHeight;
                const scrollThreshold = windowHeight * 1.5; // 200vh in pixels
                const sectionOpacity = windowHeight * 1.4; // 200vh in pixels

                if (
                    scrollY >= b2Top + b2Height - windowHeight / 0.1 &&
                    scrollY >= sectionOpacity
                ) {
                    const progress = Math.min(
                        (scrollY - sectionOpacity) / (windowHeight * 0.1),
                        1,
                    ); // progress from 0 to 1
                    const newOpacity = 1 - progress; // fade out
                    setsectionOpacity(newOpacity);
                } else {
                    setsectionOpacity(1);
                }

                if (
                    scrollY >= b2Top + b2Height - windowHeight / 1.5 &&
                    scrollY >= scrollThreshold
                ) {
                    // Move left box to the left and fade out
                    setLeftBoxLeft('-80%');
                    setRightBoxLeft('80%');

                    // Calculate opacity based on how far past the threshold we are
                    const progress = Math.min(
                        (scrollY - scrollThreshold) / (windowHeight * 0.1),
                        1,
                    ); // progress from 0 to 1
                    const newOpacity = 1 - progress; // fade out
                    setBoxOpacity(newOpacity);
                    setBoxOpacity(newOpacity);
                } else {
                    // Reset to center and full opacity
                    setLeftBoxLeft('0%');
                    setRightBoxLeft('0%');
                    setBoxOpacity(1);
                    setBoxOpacity(1);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const styles = {
        box1: {
            left: leftBoxLeft,
            transition: 'left 0.5s ease, opacity 0.5s ease',
            opacity: BoxOpacity,
        },
        box2: {
            left: rightBoxLeft,
            transition: 'left 0.5s ease, opacity 0.5s ease',
            opacity: BoxOpacity,
        },
        section: {
            transition: 'opacity 0.5s ease',
            opacity: sectionOpacity,
        },
    };

    // ===============================
    // Planet Section Functionality
    // ===============================
    const rotate = (dir) => {
        if (isAnimating) return; // prevent interaction during animation
        setDirection(dir);
        setRotation((prev) => (dir === 'right' ? prev + 50 : prev - 50));
        setRingRotation((prev) => (dir === 'right' ? prev + 50 : prev - 50));

        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                dir === 'right'
                    ? (prevIndex + 1) % images.length
                    : (prevIndex - 1 + images.length) % images.length,
            );
        }, 200);
    };

    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;

    // Trigger Animation

    const toggleAnimtElements = () => {
        setIsVisible((prev) => !prev);
        handleToggle();
    };
    const filteredImages = images.filter(
        (_, index) =>
            index !== prevIndex && index !== nextIndex && index !== currentIndex,
    );

    // Choose an image from the filtered list
    const selectedImage = filteredImages[0];
    // =================================
    // Planet Section Functionality END
    // =================================
    return (
        <>
            <section className="hero-section  position-relative height-100vh">
                <div className={`${showSecScr ? '' : 'container'}`}>
                    {/* Navbar */}
                    <div className={`${isVisible ? 'home-animt-show' : ''}`}>
                        {showSecScr ? (
                            <span
                                className={`nav-section scr-fst-nav ${isVisible ? 'nav-slide-down' : 'nav-slide-up'}`}
                                style={{
                                    animation: SecScrAnimt
                                        ? 'moveUpFade 0.7s forwards'
                                        : 'fadeInDown 0.7s',
                                }}
                                onAnimationEnd={SecScrAnimt ? handleAnimationEnd : undefined}
                            >
                                <Navbar />
                            </span>
                        ) : (
                            <div
                                className="row justify-content-between mt-4 "
                                style={{
                                    animation: SecScrAnimt
                                        ? 'moveDownFade 0.7s forwards'
                                        : 'fadeInUp 0.7s',
                                }}
                                onAnimationEnd={SecScrAnimt ? handleAnimationEnd : undefined}
                            >
                                <div className="col-lg-3">
                                    <span
                                        className=" text-white d-flex font-size-14 montserrat-medium"
                                        onClick={toggleAnimtElements}
                                    >
                                        <img className="me-1" src={leftarrow} alt="leftarrow" />{' '}
                                        Back
                                    </span>
                                </div>
                                <div className="col-lg-4 d-flex justify-content-end px-0 mt-4">
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
                                                <span className="font-14 montserrat-medium">
                                                    Meteors
                                                </span>
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
                        )}
                    </div>
                    {/* Middle Section */}
                    <div
                        className="row justify-content-between second-screen-xl"
                        ref={b2Ref}
                    >
                        {showSecScr ? (
                            <span className={`${!SecScrAnimt ? '' : 'middle-sect'}`}>
                                <Herosection />
                            </span>
                        ) : (
                            // second page middle section sidepanel and 4 plnts
                            <span
                                className={`row justify-content-between second-screen-xl ${!SecScrAnimt ? 'visible-second-sect' : 'hidden-second-sect'
                                    }`}
                            >
                                <div
                                    className={`col-lg-2 px-0 d-flex flex-column justify-content-between ${!SecScrAnimt ? 'visible-second-sect' : 'hidden-second-sect'
                                        }`}
                                >
                                    <div
                                        className={`left-sidebar-main-div  ${!SecScrAnimt
                                                ? 'visible-second-sect'
                                                : 'hidden-second-sect'
                                            }`}
                                    >
                                        <p className="text-dark-blue space-grotesk-medium font-16 mb-3">
                                            Your Progress So far
                                        </p>
                                        <div className="progress-sect rounded-4">
                                            <ul className="list-unstyled mb-0 ps-4 pt-1">
                                                <li className="d-flex pt-2 mt-2 position-relative">
                                                    <div className="d-grid progress-side-sec">
                                                        <img
                                                            className="w-50 mx-auto"
                                                            src={prgicon}
                                                            alt="prgicon"
                                                        />{' '}
                                                        <hr className="opacity-100 progress-side-hr " />
                                                    </div>{' '}
                                                    <span className="position-absolute space-grotesk-medium font-12 tooltiptext p-2 rounded text-light-yellow">
                                                        300 Meteors
                                                    </span>
                                                    <span className="ms-2 progress-sect-name space-grotesk-medium font-16 text-blue-2">
                                                        Planet A
                                                    </span>
                                                </li>
                                                <li className="d-flex pt-1">
                                                    <div className="d-grid progress-side-sec">
                                                        <hr className="opacity-100 progress-side-hr11" />
                                                        <img
                                                            className="w-50 mx-auto"
                                                            src={prgicon}
                                                            alt="prgicon"
                                                        />{' '}
                                                    </div>{' '}
                                                    <span className="ms-2 progress-sect-name mt-1 d-flex align-items-end space-grotesk-medium font-16 text-blue-2">
                                                        Planet B
                                                    </span>
                                                </li>
                                                <li className="d-flex pt-2">
                                                    <div className="d-grid progress-side-sec">
                                                        <hr className="opacity-100 progress-side-hr-2" />
                                                        <img
                                                            className="w-50 mx-auto opacity-75"
                                                            src={prgicon}
                                                            alt="prgicon"
                                                        />{' '}
                                                    </div>{' '}
                                                    <span className="ms-2 progress-sect-name mt-1 d-flex align-items-end space-grotesk-medium font-16 text-blue-2">
                                                        Planet C
                                                    </span>
                                                </li>
                                                <li className="d-flex pt-2">
                                                    <div className="d-grid progress-side-sec">
                                                        <hr className="opacity-100 progress-side-hr-2" />
                                                        <img
                                                            className="w-50 mx-auto opacity-75"
                                                            src={prgicon}
                                                            alt="prgicon"
                                                        />{' '}
                                                    </div>{' '}
                                                    <span className="ms-2 progress-sect-name mt-1 d-flex align-items-end space-grotesk-medium font-16 text-blue-2">
                                                        Planet D
                                                    </span>
                                                </li>
                                            </ul>
                                            <div className="text-center mt-34 pb-3">
                                                <img
                                                    className="w-25"
                                                    src={borderstar}
                                                    alt="borderstar"
                                                />
                                                <h4 className="my-0 mt-2 text-blue-2  font-18 space-grotesk-medium">
                                                    Galaxy Complete
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="d-flex justify-content-evenly background-text-blue rounded-2 position-relative py-2 left-box"
                                        // style={styles.box1}
                                        ref={leftBoxRef}
                                        id="leftBox"
                                    >
                                        <img
                                            className="w-25 progress-sect-rocket position-absolute"
                                            src={rocket}
                                            alt="rocket"
                                        />
                                        <span className="text-white font-14 montserrat-semibold offset-2">
                                            Play & Earn
                                        </span>
                                        <img src={longarrow} alt="longarrow" />
                                    </div>
                                    <div
                                        className="d-flex justify-content-evenly background-dark-pink mt-0 rounded-2 position-relative py-2 left-box"
                                        // style={styles.box1}
                                        ref={leftBoxRef}
                                        id="leftBox"
                                    >
                                        <img
                                            className=" progress-sect-astronot position-absolute"
                                            src={astronot}
                                            alt="astronot"
                                        />
                                        <span className="text-white font-14 montserrat-semibold offset-2 ">
                                            Invite & Earn
                                        </span>
                                        <img src={longarrow} alt="longarrow" />
                                    </div>
                                </div>
                                <div className="col-lg-9 planet-section">
                                    <div className="row ">
                                        <div className="col-lg-3 text-center">
                                            <img
                                                className={`width-50 width-md-50 width-lg-25 width-xl-70 planet-shadow-${currentIndex === 0 ? 'purple' : currentIndex === 1 ? 'yellow' : currentIndex === 2 ? 'green' : 'blue'}`}
                                                src={images[currentIndex]}
                                                alt="purple"
                                            />
                                        </div>
                                        <div className="col-lg-3"></div>
                                        <div className="col-lg-3 text-center">
                                            <img
                                                className={`width-50 width-md-50 width-lg-25 width-xl-70 planet-shadow-${nextIndex === 0 ? 'purple' : nextIndex === 1 ? 'yellow' : nextIndex === 2 ? 'green' : 'blue'}`}
                                                src={images[nextIndex]}
                                                alt="yellow"
                                            />
                                        </div>
                                        <div className="col-lg-3"></div>
                                    </div>
                                    <div className="row position-relative">
                                        <img
                                            className="position-absolute second-screen-pathway px-0"
                                            src={pathway}
                                            alt="pathway"
                                        />
                                        <div className="col-lg-3 text-center text-dark-blue mt-4 pt-4 px-0">
                                            <h4 className="mb-2 space-grotesk-medium font-24">
                                                Planet A
                                            </h4>
                                            <p className="space-grotesk-regular font-14 my-0">
                                                Complete the level and earn
                                            </p>
                                            <span className="space-grotesk-medium">1000 Meteors</span>
                                        </div>
                                        <div className="col-lg-3"></div>
                                        <div className="col-lg-3 text-center text-dark-blue mt-4 pt-4 px-0">
                                            <h4 className="mb-2 space-grotesk-medium font-24">
                                                Planet C
                                            </h4>
                                            <p className="space-grotesk-regular font-14 my-0">
                                                Little more consistency and
                                            </p>
                                            you will earn{' '}
                                            <span className="space-grotesk-medium">2080 Meteors</span>
                                        </div>
                                        <div className="col-lg-3"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3"></div>
                                        <div className="col-lg-3 text-center text-dark-blue second-scrn-padding">
                                            <img
                                                className={`width-50 width-md-50 width-lg-25 width-xl-70 planet-shadow-${prevIndex === 0 ? 'purple' : prevIndex === 1 ? 'yellow' : prevIndex === 2 ? 'green' : 'blue'}`}
                                                src={images[prevIndex]}
                                                alt="greenplnt"
                                            />
                                            <div className=" text-center text-dark-blue">
                                                <h4 className="mb-2 space-grotesk-medium font-24">
                                                    Planet B
                                                </h4>
                                                You are just{' '}
                                                <span className="space-grotesk-medium">
                                                    1850 Meteors
                                                </span>
                                                <p className="space-grotesk-regular font-14 my-0">
                                                    away to reach to this planet
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3"></div>
                                        <div className="col-lg-3 text-center text-dark-blue">
                                            <img
                                                className={`width-50 width-md-50 width-lg-25 width-xl-70 planet-shadow-${selectedImage === 0 ? 'purple' : selectedImage === 1 ? 'yellow' : selectedImage === 2 ? 'green' : 'blue'}`}
                                                src={selectedImage}
                                                alt="blueplnt"
                                            />
                                            <div className=" text-center text-dark-blue">
                                                <h4 className="mb-2 space-grotesk-medium font-24">
                                                    Planet D
                                                </h4>
                                                <span className="space-grotesk-medium">
                                                    3080 Meteors
                                                </span>{' '}
                                                to go
                                                <p className="space-grotesk-regular font-14 my-0">
                                                    and your exclusive reward awaits!!!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={`footer-responsive position-relative right-box ${showModal ? 'visible' : 'invisible'}`}
                                        // style={styles.box2}
                                        ref={rightBoxRef}
                                        id="rightBox"
                                    >
                                        <div
                                            className="fade show d-block"
                                            tabIndex="-1"
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                        >
                                            <div className="modal-dialog modal-xl modal-bottom">
                                                <div className="modal-content border-0">
                                                    <div className="modal-header border-0">
                                                        <button
                                                            type="button"
                                                            className="btn-close bg-light p-1 font-8 mb-2 rounded-circle"
                                                            onClick={handleClose}
                                                            aria-label="Close"
                                                        ></button>
                                                    </div>
                                                    <div className="modal-body position-relative background-push-notification rounded-3 d-flex justify-content-between align-items-center">
                                                        <div className="alien-ship">
                                                            <img
                                                                className="position-absolute progress-foot-alen"
                                                                src={alenship}
                                                                alt="alenship"
                                                            />
                                                        </div>
                                                        <span className="py-4 font-18 space-grotesk-medium text-white">
                                                            Push Up Notification
                                                        </span>
                                                        <button
                                                            type="button"
                                                            className="btn btn-light rounded-3 me-3 font-16 montserrat-semibold"
                                                        >
                                                            View
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        )}
                        {/* Footer Section */}
                        {/* planet section */}

                        <div className="text-center solar-sys mt-5 pt-5">
                            <div className="row align-items-center mt-5">
                                <div
                                    className={`d-flex justify-content-center`}
                                >
                                    <img
                                        className={`bg-planet-ring position-absolute ${isVisible ? 'plnt-animt-up' : 'plnt-animt-down'}`}
                                        src={planetRing}
                                        alt="planet-ring"
                                        style={{
                                            transform: `rotate(${ringRotation}deg)`,
                                            transition: 'transform 0.2s linear',
                                        }}
                                    />
                                </div>

                                <div
                                    className={` text-start`}
                                >
                                    <img
                                        className={`navitag-left planet-shadow-${prevIndex === 0 ? 'purple' : prevIndex === 1 ? 'yellow' : prevIndex === 2 ? 'green' : 'blue'} ${isVisible ? 'plnt-animt-up' : 'plnt-animt-down'}`}
                                        onClick={() => rotate('left')}
                                        src={images[prevIndex]}
                                        alt="left-planet"
                                    />
                                    <span className={`font-24 space-grotesk-medium text-dark-blue navi-plnt-left ${isVisible ? 'plnt-animt-up' : 'plnt-animt-down'}`}>
                                        Planet {['A', 'B', 'C', 'D'][prevIndex]}
                                    </span>
                                </div>

                                <div className="col-6">
                                    <div
                                        className={`image-container d-flex justify-content-center align-items-center ${direction} ${isVisible ? 'big-plnt-btm' : 'big-plnt-top'}`}
                                        style={{
                                            transform: `rotate(${rotation}deg)`,
                                            transition: 'transform 0.2s linear',
                                        }}
                                    >
                                        <img
                                            src={images[currentIndex]}
                                            alt="center-planet"
                                            onClick={toggleAnimtElements}
                                            className={`img-fluid rounded-circle planet-shadow-${currentIndex === 0 ? 'purple' : currentIndex === 1 ? 'yellow' : currentIndex === 2 ? 'green' : 'blue'} ${isAnimating ? 'fade-down-shrink' : ''
                                                }`}
                                        />
                                    </div>
                                </div>

                                <div
                                    className={` text-end`}
                                >
                                    <img
                                        className={`navitag-right planet-shadow-${nextIndex === 0 ? 'purple' : nextIndex === 1 ? 'yellow' : nextIndex === 2 ? 'green' : 'blue'} ${isVisible ? 'plnt-animt-up' : 'plnt-animt-down'}`}
                                        onClick={() => rotate('right')}
                                        src={images[nextIndex]}
                                        alt="right-planet"
                                    />
                                    <span className={`font-24 space-grotesk-medium text-dark-blue navi-plnt-right ${isVisible ? 'plnt-animt-up' : 'plnt-animt-down'}`}>
                                        Planet {['A', 'B', 'C', 'D'][nextIndex]}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Test;
