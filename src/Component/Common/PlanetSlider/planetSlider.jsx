// import React, { useState } from 'react';

// // images
// import centerPlanet1 from '../../../assets/HomePlanets/purple.svg';
// import centerPlanet2 from '../../../assets/HomePlanets/yellow.svg';
// import centerPlanet3 from '../../../assets/HomePlanets/green.svg';
// import centerPlanet4 from '../../../assets/HomePlanets/blue.svg';
// import planetRing from '../../../assets/HomePlanets/rings.svg';

// // image json
// const images = [centerPlanet1, centerPlanet2, centerPlanet3, centerPlanet4];

// function PlanetSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [rotation, setRotation] = useState(0);
//   const [ringRotation, setRingRotation] = useState(0); // new state for ring rotation
//   const [direction, setDirection] = useState('');

//   //  const [setCurrentPlanet] = useContext(UserContext)

//   const rotate = (dir) => {
//     setDirection(dir);
//     // Update planet rotation
//     setRotation((prev) => (dir === 'right' ? prev + 50 : prev - 50));
//     // Update ring rotation to match direction
//     setRingRotation((prev) => (dir === 'right' ? prev + 50 : prev - 50));

//     setTimeout(() => {
//       setCurrentIndex((prevIndex) =>
//         dir === 'right'
//           ? (prevIndex + 1) % images.length
//           : (prevIndex - 1 + images.length) % images.length,
//       );
//     }, 200); // Wait until halfway through rotation to switch image
//   };

//   // Calculate previous and next images
//   const prevIndex = (currentIndex - 1 + images.length) % images.length;
//   const nextIndex = (currentIndex + 1) % images.length;

//   return (
//     <>
//       <div className="container">
//         <div className="text-center">
//           <h3 className="text-uppercase text-blue space-grotesk-bold font-46 mb-0">
//             Milky Way Galaxy
//           </h3>
//         </div>
//         <ul
//           className="d-flex  justify-content-between mb-0 mt-4 pt-2 px-0"
//           id="banner-sec-heading-desk"
//         >
//           <li className="list-unstyled text-dark-blue  montserrat-semibold font-24">
//             <span className="d-block font-16 space-grotesk-regular text-light-white mb-1">
//               Meteors Gained
//             </span>
//             300 Meteors
//           </li>
//           <li className="list-unstyled text-dark-blue  montserrat-semibold font-24">
//             <span className="d-block font-16 space-grotesk-regular text-light-white mb-1">
//               Stars Gained
//             </span>
//             0 Stars
//           </li>
//           <li className="list-unstyled space-grotesk-medium font-46 text-white">
//             Planet{' '}
//             {`${currentIndex == 0 ? 'A' : currentIndex == 1 ? 'B' : currentIndex == 2 ? 'C' : 'D'}`}
//           </li>
//           <li className="list-unstyled text-dark-blue  montserrat-semibold font-24">
//             <span className="d-block font-16 space-grotesk-regular text-light-white mb-1">
//               Total Meteors
//             </span>
//             1000 Meteors
//           </li>
//           <li className="list-unstyled text-dark-blue  montserrat-semibold font-24">
//             <span className="d-block font-16 space-grotesk-regular text-light-white mb-1">
//               Planet Status
//             </span>
//             Unlocked
//           </li>
//         </ul>
//         <div
//           className="row  justify-content-center mt-5 pt-5"
//           id="banner-sec-heading-mob"
//         >
//           <div className="col-3 col-lg-3 ">
//             <div className="list-unstyled text-dark-blue montserrat-semibold font-24">
//               <span className="d-block font-16 space-grotesk-regular text-light-white mb-1">
//                 Meteors Gained
//               </span>
//               300 Meteors
//             </div>
//             <div className="list-unstyled text-dark-blue montserrat-semibold font-24">
//               <span className="d-block font-16 space-grotesk-regular text-light-white mb-1">
//                 Stars Gained
//               </span>
//               0 Stars
//             </div>
//           </div>
//           <div className="col-4 col-lg-4 text-center">
//             <div className="list-unstyled space-grotesk-medium font-46 text-white">
//               Planet A
//             </div>
//           </div>
//           <div className="col-3 col-lg-3 ">
//             <div className="list-unstyled text-dark-blue montserrat-semibold font-24">
//               <span className="d-block font-16 space-grotesk-regular text-light-white mb-1">
//                 Total Meteors
//               </span>
//               1000 Meteors
//             </div>
//             <div className="list-unstyled text-dark-blue montserrat-semibold font-24">
//               <span className="d-block font-16 space-grotesk-regular text-light-white mb-1">
//                 Planet Status
//               </span>
//               Unlocked
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="text-center solar-sys mt-5 pt-5">
//         <div className="row align-items-center mt-5">
//           {/* Planet ring with rotation */}
//           <div className="d-flex justify-content-center">
//             <img
//               className="bg-planet-ring position-absolute"
//               src={planetRing}
//               alt="planets-planetRing"
//               style={{
//                 transform: `rotate(${ringRotation}deg)`,
//                 transition: 'transform 0.2s linear',
//               }}
//             />
//           </div>
//           <div className="col text-start">
//             {/* Left arrow */}
//             <img
//               className={`navitag-left planet-shadow-${prevIndex == 0 ? 'purple' : prevIndex == 1 ? 'yellow' : prevIndex == 2 ? 'green' : 'blue'}`}
//               onClick={() => rotate('left')}
//               src={images[prevIndex]}
//               alt="planets-images"
//             />
//             <span className="navi-plnt-left text-dark-blue font-size-24 space-grotesk-medium">
//               Planet{' '}
//               {`${prevIndex == 0 ? 'A' : prevIndex == 1 ? 'B' : prevIndex == 2 ? 'C' : 'D'}`}
//             </span>
//           </div>
//           <div className="col-6">
//             {/* Main rotating planet */}
//             <div
//               className={`image-container d-flex justify-content-center align-items-center ${direction}`}
//               style={{
//                 transform: `rotate(${rotation}deg)`,
//                 transition: 'transform 0.2s linear',
//               }}
//             >
//               <img
//                 src={images[currentIndex]}
//                 alt="rotating"
//                 className={`img-fluid rounded-circle planet-shadow-${currentIndex == 0 ? 'purple' : currentIndex == 1 ? 'yellow' : currentIndex == 2 ? 'green' : 'blue'}`}
//               />
//             </div>
//           </div>
//           <div className="col text-end">
//             {/* Right arrow */}
//             <img
//               className={`navitag-right planet-shadow-${nextIndex == 0 ? 'purple' : nextIndex == 1 ? 'yellow' : nextIndex == 2 ? 'green' : 'blue'}`}
//               onClick={() => rotate('right')}
//               src={images[nextIndex]}
//               alt="planets-images"
//             />
//             <span className="navi-plnt-right text-dark-blue font-size-24 space-grotesk-medium">
//               Planet{' '}
//               {`${nextIndex == 0 ? 'A' : nextIndex == 1 ? 'B' : nextIndex == 2 ? 'C' : 'D'}`}
//             </span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default PlanetSlider;

import React, { useState } from 'react';
import centerPlanet1 from '../../../assets/HomePlanets/purple.svg';
import centerPlanet2 from '../../../assets/HomePlanets/yellow.svg';
import centerPlanet3 from '../../../assets/HomePlanets/green.svg';
import centerPlanet4 from '../../../assets/HomePlanets/blue.svg';
import planetRing from '../../../assets/HomePlanets/rings.svg';

const images = [centerPlanet1, centerPlanet2, centerPlanet3, centerPlanet4];

const PlanetSlider = ({ onPlanetClick, setIsVisible, isVisible }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [ringRotation, setRingRotation] = useState(0);
  const [direction, setDirection] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

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
  };

  return (
    <div className="text-center solar-sys mt-5 pt-5">
      <div className="row align-items-center mt-5">
        <div className={`d-flex justify-content-center ${isVisible ? 'plnt-animt-up' : 'plnt-animt-down'}`}>
          <img
            className="bg-planet-ring position-absolute"
            src={planetRing}
            alt="planet-ring"
            style={{
              transform: `rotate(${ringRotation}deg)`,
              transition: 'transform 0.2s linear',
            }}
          />
        </div>

        <div className={` text-start ${isVisible ? 'plnt-animt-up' : 'plnt-animt-down'}`}>
          <img
            className={`navitag-left cursor-pointer planet-shadow-${prevIndex === 0 ? 'purple' : prevIndex === 1 ? 'yellow' : prevIndex === 2 ? 'green' : 'blue'}`}
            onClick={() => rotate('left')}
            src={images[prevIndex]}
            alt="left-planet"
          />
          <span className="navi-plnt-left">
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
              className={`img-fluid cursor-pointer rounded-circle planet-shadow-${currentIndex === 0 ? 'purple' : currentIndex === 1 ? 'yellow' : currentIndex === 2 ? 'green' : 'blue'} ${
                isAnimating ? 'fade-down-shrink' : ''
              }`}
            />
          </div>
        </div>

        <div className={` text-end ${isVisible ? 'plnt-animt-up' : 'plnt-animt-down'}`}>
          <img
            className={`navitag-right cursor-pointer planet-shadow-${nextIndex === 0 ? 'purple' : nextIndex === 1 ? 'yellow' : nextIndex === 2 ? 'green' : 'blue'}`}
            onClick={() => rotate('right')}
            src={images[nextIndex]}
            alt="right-planet"
          />
          <span className="navi-plnt-right">
            Planet {['A', 'B', 'C', 'D'][nextIndex]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlanetSlider;
