// import React, { useState } from "react";

// // images
// import centerPlanet1 from "../../../Assets/Images/HomePlanets/Planet-1 (1).svg";
// import centerPlanet2 from "../../../Assets/Images/HomePlanets/Planet-2.svg";
// import centerPlanet3 from "../../../Assets/Images/HomePlanets/Planet-3.svg";
// import centerPlanet4 from "../../../Assets/Images/HomePlanets/Planet-4 (1).svg";
// import planetRing from "../../../Assets/Images/HomePlanets/Space-rings (1).png";

// // image json
// const images = [centerPlanet1, centerPlanet2, centerPlanet3, centerPlanet4];

// function PlanetSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [rotation, setRotation] = useState(0);
//   const [direction, setDirection] = useState("");

//   const rotate = (dir) => {
//     setDirection(dir);
//     setRotation((prev) => (dir === "right" ? prev + 50 : prev - 50));

//     setTimeout(() => {
//       setCurrentIndex((prevIndex) =>
//         dir === "right"
//           ? (prevIndex + 1) % images.length
//           : (prevIndex - 1 + images.length) % images.length
//       );
//     }, 200); // Wait until halfway through rotation to switch image
//   };

//   // Calculate previous and next images
//   const prevIndex = (currentIndex - 1 + images.length) % images.length;
//   const nextIndex = (currentIndex + 1) % images.length;

//   return (
//     <div className="container text-center position-relative mt-5">
//       <div className="row align-items-center">
//           <img className="w-75 bg-planet-ring position-absolute" src={planetRing}  alt="" />
//         <div className="col">
//           <img
//             className="w-25 "
//             onClick={() => rotate("left")}
//             src={images[prevIndex]}
//             alt=""
//           />
//         </div>
//         <div className="col-6">
//           <div
//             className={`image-container ${direction}`}
//             style={{ transform: `rotate(${rotation}deg)` }}
//           >
//             <img
//               src={images[currentIndex]}
//               alt="rotating"
//               className="img-fluid rounded-circle"
//             />
//           </div>
//         </div>
//         <div className="col">
//           <img
//             className="w-25 "
//             onClick={() => rotate("right")}
//             src={images[nextIndex]}
//             alt=""
//           />
//         </div>
//       </div>
   
//     </div>
//   );
// }

// export default PlanetSlider;

import React, { useState } from "react";

// images
import centerPlanet1 from "../../../Assets/Images/HomePlanets/plnt1-removebg-preview.png";
import centerPlanet2 from "../../../Assets/Images/HomePlanets/plnt2-removebg-preview.png";
import centerPlanet3 from "../../../Assets/Images/HomePlanets/plnt3-removebg-preview.png";
import centerPlanet4 from "../../../Assets/Images/HomePlanets/plnt4-removebg-preview.png";
import planetRing from "../../../Assets/Images/HomePlanets/rings (1).png";

// image json
const images = [centerPlanet1, centerPlanet2, centerPlanet3, centerPlanet4];

function PlanetSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [ringRotation, setRingRotation] = useState(0); // new state for ring rotation
  const [direction, setDirection] = useState("");

  const rotate = (dir) => {
    setDirection(dir);
    // Update planet rotation
    setRotation((prev) => (dir === "right" ? prev + 50 : prev - 50));
    // Update ring rotation to match direction
    setRingRotation((prev) => (dir === "right" ? prev + 50 : prev - 50));

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        dir === "right"
          ? (prevIndex + 1) % images.length
          : (prevIndex - 1 + images.length) % images.length
      );
    }, 200); // Wait until halfway through rotation to switch image
  };

  // Calculate previous and next images
  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <div className="text-center solar-sys mt-5 pt-5">
      <div className="row align-items-center mt-5">
        {/* Planet ring with rotation */}
        <div className="d-flex justify-content-center">
        <img
          className="w-75 bg-planet-ring position-absolute"
          src={planetRing}
          alt=""
          style={{ transform: `rotate(${ringRotation}deg)`, transition: 'transform 0.2s linear' }}
          />
          </div>
        <div className="col text-start">
          {/* Left arrow */}
          <img
            className="navitag-left"
            onClick={() => rotate("left")}
            src={images[prevIndex]}
            alt=""
          />
        </div>
        <div className="col-6">
          {/* Main rotating planet */}
          <div
            className={`image-container ${direction}`}
            style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.2s linear' ,width:"40%"}}
          >
            <img
              src={images[currentIndex]}
              alt="rotating"
              className="img-fluid rounded-circle"
            />
          </div>
        </div>
        <div className="col text-end">
          {/* Right arrow */}
          <img
            className="navitag-right"
            onClick={() => rotate("right")}
            src={images[nextIndex]}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default PlanetSlider;